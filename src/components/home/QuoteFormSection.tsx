import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    mensagem: '',
  });
  const [errors, setErrors] = useState<{ nome?: boolean; whatsapp?: boolean }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!formData.nome.trim()) newErrors.nome = true;
    if (!formData.whatsapp.trim()) newErrors.whatsapp = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast({
      title: "✓ Orçamento enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      nome: '',
      whatsapp: '',
      email: '',
      mensagem: '',
    });
  };

  return (
    <section id="orcamento" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-orange">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para ter um fornecedor de confiança no Centro Oeste?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mt-3 sm:mt-4">
            Peça um orçamento agora e comece a trabalhar com a BR Aço ainda esta semana.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Top row: 3 inputs + button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Input
              name="nome"
              type="text"
              placeholder="Nome Completo"
              value={formData.nome}
              onChange={handleInputChange}
              className={`w-full bg-white border-0 rounded-lg px-4 py-4 text-base min-h-[56px] placeholder:text-gray-500 focus:ring-2 focus:ring-white/50 ${
                errors.nome ? 'ring-2 ring-red-500' : ''
              }`}
            />
            <Input
              name="whatsapp"
              type="tel"
              placeholder="WhatsApp (62) 99999-99"
              value={formData.whatsapp}
              onChange={handleInputChange}
              className={`w-full bg-white border-0 rounded-lg px-4 py-4 text-base min-h-[56px] placeholder:text-gray-500 focus:ring-2 focus:ring-white/50 ${
                errors.whatsapp ? 'ring-2 ring-red-500' : ''
              }`}
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-white border-0 rounded-lg px-4 py-4 text-base min-h-[56px] placeholder:text-gray-500 focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="w-full bg-white text-brand-orange font-semibold rounded-lg px-6 py-4 min-h-[56px] hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2 text-base"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Message textarea */}
          <Textarea
            name="mensagem"
            rows={4}
            placeholder="Mensagem (opcional) - Conte um pouco sobre sua necessidade..."
            value={formData.mensagem}
            onChange={handleInputChange}
            className="w-full bg-white border-0 rounded-lg px-4 py-4 text-base placeholder:text-gray-500 focus:ring-2 focus:ring-white/50 resize-none min-h-[120px]"
          />
        </form>

        {/* Footer text */}
        <p className="text-center text-white/90 text-sm sm:text-base mt-6 sm:mt-8">
          Resposta em até 2 horas (horário comercial). Sem compromisso.
        </p>
      </div>
    </section>
  );
};

export default QuoteFormSection;
