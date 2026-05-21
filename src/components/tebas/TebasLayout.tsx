import { Link } from 'react-router-dom';

interface TebasLayoutProps {
  children: React.ReactNode;
  showBack?: boolean;
}

export function TebasLayout({ children, showBack = true }: TebasLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0D1B2A', color: '#F1F5F9' }}>
      {/* Mini header */}
      <header className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <Link to="/tebas" className="flex items-center gap-2 no-underline">
          <span className="font-bold text-xl tracking-tight" style={{ color: '#F47A20' }}>
            Tebas
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded font-medium"
            style={{ background: 'rgba(244,122,32,0.15)', color: '#F47A20' }}
          >
            β
          </span>
        </Link>

        {showBack && (
          <Link
            to="/"
            className="text-sm transition-colors no-underline"
            style={{ color: 'rgba(241,245,249,0.45)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(241,245,249,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,245,249,0.45)')}
          >
            ← grupobraco.com.br
          </Link>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="px-6 py-4 text-center text-xs" style={{ color: 'rgba(241,245,249,0.3)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        Tebas é uma ferramenta de pré-dimensionamento para anteprojeto. Não substitui projeto estrutural com ART.
      </footer>
    </div>
  );
}
