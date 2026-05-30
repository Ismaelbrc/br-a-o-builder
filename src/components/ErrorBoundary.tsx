import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const msg = error?.message || '';
    // Backstop para chunk desatualizado após deploy: recarrega 1x (guarda de 10s anti-loop).
    const isChunkError = /dynamically imported module|Loading chunk|Importing a module script failed|Loading CSS chunk|Failed to fetch/i.test(msg);
    if (isChunkError) {
      const now = Date.now();
      const last = Number(sessionStorage.getItem('chunkReloadAt') || '0');
      if (now - last > 10000) {
        sessionStorage.setItem('chunkReloadAt', String(now));
        window.location.reload();
        return;
      }
    }
    console.error('[ErrorBoundary]', msg, info.componentStack);
    // Ping Clarity so errored sessions get flagged for review
    if (typeof (window as unknown as Record<string, unknown>).clarity === 'function') {
      (window as unknown as Record<string, (...a: unknown[]) => void>).clarity('event', 'app_error');
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4">
          <div className="text-center max-w-sm">
            <p className="text-5xl mb-4">⚠️</p>
            <h1 className="text-white text-xl font-bold mb-2">Algo deu errado</h1>
            <p className="text-gray-400 text-sm mb-6">
              Tente recarregar a página. Se o erro persistir, fale com a gente pelo WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="bg-[#e85d04] hover:bg-[#d14e00] text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Recarregar página
              </button>
              <a
                href="https://wa.me/556296472423"
                className="border border-white/30 text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
