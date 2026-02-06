import Layout from '@/components/Layout';
import { User, Lock } from 'lucide-react';

export default function Cliente() {
  return (
    <Layout>
      <div className="flex min-h-[80vh] items-center justify-center bg-brand-gray-light">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-brand-orange" />
            </div>
            <h1 className="text-2xl font-bold text-brand-navy">
              Área do Cliente
            </h1>
            <p className="text-brand-gray-medium mt-2">
              Em breve você poderá acompanhar seus pedidos e orçamentos
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-brand-navy mb-1.5 block">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                disabled
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-navy mb-1.5 block">
                Senha
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                disabled
              />
            </div>
            <button
              className="w-full bg-brand-orange/50 text-white font-semibold rounded-xl py-4 cursor-not-allowed flex items-center justify-center gap-2"
              disabled
            >
              <Lock className="w-4 h-4" />
              Em desenvolvimento
            </button>
          </div>

          <p className="text-center text-xs text-brand-gray-medium mt-6">
            Entre em contato pelo WhatsApp para consultar seus pedidos
          </p>
        </div>
      </div>
    </Layout>
  );
}
