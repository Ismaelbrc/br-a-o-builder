import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, Lock, MessageCircle, Bell } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgveona';

export default function Cliente() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ nome: '', email: '' });
  const [sending, setSending] = useState(false);
  const whatsappUrl = "https://wa.me/5562999247285?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20BR%20A%C3%A7o.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.email.trim()) return;

    setSending(true);

    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ nome: formData.nome, email: formData.email }),
        });
        if (!res.ok) throw new Error('Falha no envio');
      }

      toast({
        title: "✓ Cadastro realizado!",
        description: "Você será avisado quando a Área do Cliente estiver disponível.",
      });

      setFormData({ nome: '', email: '' });
    } catch {
      toast({
        title: "Erro ao cadastrar",
        description: "Tente novamente ou nos chame no WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Área do Cliente</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Área do Cliente</h1>
          <p className="text-gray-300 mt-3">Acompanhe seus pedidos e orçamentos</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto">
            <Lock className="w-10 h-10 text-brand-orange" />
          </div>
          
          <h2 className="text-2xl font-bold text-brand-navy mt-6">Em breve!</h2>
          
          <p className="text-brand-gray-medium mt-4 leading-relaxed">
            Estamos preparando uma experiência exclusiva para você. Em breve, 
            você poderá acompanhar seus pedidos, histórico de compras, orçamentos 
            e muito mais — tudo em um só lugar.
          </p>

          {/* Interest Form */}
          <div className="bg-brand-gray-light rounded-2xl p-8 mt-10">
            <h3 className="text-lg font-semibold text-brand-navy">
              Quer ser avisado quando estiver pronto?
            </h3>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                  className="flex-1 rounded-xl"
                />
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="flex-1 rounded-xl"
                />
                <Button
                  type="submit"
                  disabled={sending}
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl px-6 disabled:opacity-60"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  {sending ? 'Enviando…' : 'Avisar-me'}
                </Button>
              </div>
            </form>
          </div>

          {/* Alternative CTA */}
          <div className="mt-8">
            <p className="text-brand-gray-medium mb-4">
              Enquanto isso, fale com nossa equipe
            </p>
            <Button
              variant="outline"
              asChild
              className="border-2 border-brand-whatsapp text-brand-whatsapp hover:bg-brand-whatsapp hover:text-white rounded-xl"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
