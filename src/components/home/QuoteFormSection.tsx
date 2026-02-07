import { useState } from 'react';
import { Send, Clock, ShieldCheck, Phone, CreditCard, MessageCircle, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const products = [
  'Corte e Dobra',
  'Vergalhões',
  'Treliças',
  'Malhas',
  'Telas e Colunas',
  'Bobinas',
  'Sapatas',
  'Pregos e Arames',
];

const obraTypes = [
  'Residencial',
  'Comercial',
  'Industrial',
  'Loteamento',
  'Infraestrutura',
  'Outro',
];

const benefits = [
  { icon: Clock, text: 'Resposta em até 24h' },
  { icon: ShieldCheck, text: 'Orçamento sem compromisso' },
  { icon: Phone, text: 'Suporte técnico especializado' },
  { icon: CreditCard, text: 'Parcelamento em até 10x' },
];

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    cidade: '',
    tipoObra: '',
    produtos: [] as string[],
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

  const handleProductChange = (product: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      produtos: checked
        ? [...prev.produtos, product]
        : prev.produtos.filter(p => p !== product),
    }));
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

    // Success
    toast({
      title: "✓ Orçamento enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      nome: '',
      whatsapp: '',
      email: '',
      cidade: '',
      tipoObra: '',
      produtos: [],
      mensagem: '',
    });
  };

  const whatsappUrl = "https://wa.me/5562982858558?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20obra.";

  return (
    <section id="orcamento" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Solicite seu Orçamento"
          subtitle="Preencha os dados e nossa equipe entra em contato em até 24h"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12 max-w-6xl mx-auto">
          {/* Form Column */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nome */}
              <div>
                <Label htmlFor="nome" className="text-sm font-medium text-brand-navy mb-1.5 block">
                  Nome completo <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder:text-gray-400 ${
                    errors.nome ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
              </div>

              {/* WhatsApp */}
              <div>
                <Label htmlFor="whatsapp" className="text-sm font-medium text-brand-navy mb-1.5 block">
                  WhatsApp <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="(62) 99999-9999"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder:text-gray-400 ${
                    errors.whatsapp ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-brand-navy mb-1.5 block">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Cidade */}
              <div>
                <Label htmlFor="cidade" className="text-sm font-medium text-brand-navy mb-1.5 block">
                  Cidade / Estado
                </Label>
                <Input
                  id="cidade"
                  name="cidade"
                  type="text"
                  placeholder="Ex: Goiânia - GO"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Tipo de Obra */}
              <div>
                <Label className="text-sm font-medium text-brand-navy mb-1.5 block">
                  Tipo de obra
                </Label>
                <Select
                  value={formData.tipoObra}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, tipoObra: value }))}
                >
                  <SelectTrigger className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20">
                    <SelectValue placeholder="Selecione o tipo de obra" />
                  </SelectTrigger>
                  <SelectContent>
                    {obraTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Produtos de interesse */}
              <div>
                <Label className="text-sm font-medium text-brand-navy mb-3 block">
                  Produtos de interesse
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {products.map((product) => (
                    <div key={product} className="flex items-center space-x-2">
                      <Checkbox
                        id={product}
                        checked={formData.produtos.includes(product)}
                        onCheckedChange={(checked) => handleProductChange(product, checked as boolean)}
                        className="accent-brand-orange data-[state=checked]:bg-brand-orange data-[state=checked]:border-brand-orange"
                      />
                      <Label htmlFor={product} className="text-sm text-brand-gray-dark cursor-pointer">
                        {product}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <Label htmlFor="mensagem" className="text-sm font-medium text-brand-navy mb-1.5 block">
                  Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto, quantidades ou prazos desejados..."
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-xl py-4 text-lg mt-2 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Orçamento
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-2">
            <div className="bg-brand-gray-light rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-brand-navy">
                Atendimento personalizado
              </h3>
              <p className="text-sm text-brand-gray-medium mt-3">
                Nossa equipe técnica está pronta para analisar seu projeto e oferecer a melhor solução.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <benefit.icon className="w-5 h-5 text-brand-orange" />
                    <span className="text-sm text-brand-gray-dark font-medium">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 my-6" />

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-[#25D366] text-[#25D366] rounded-xl py-3 hover:bg-[#25D366] hover:text-white transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Prefere WhatsApp? Fale agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
