import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
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
import { 
  ChevronRight, MessageCircle, Mail, MapPin, Clock, 
  Send, Instagram, Linkedin 
} from 'lucide-react';

const contactCards = [
  {
    icon: MessageCircle,
    iconBg: 'bg-brand-whatsapp/10',
    iconColor: 'text-brand-whatsapp',
    hoverBorder: 'hover:border-brand-whatsapp',
    title: 'WhatsApp',
    text: '(62) 99924-7285',
    subtext: 'Atendimento rápido e direto',
    href: 'https://wa.me/5562999247285?text=Olá!%20Gostaria%20de%20falar%20com%20a%20BR%20Aço.',
  },
  {
    icon: Mail,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    hoverBorder: 'hover:border-blue-500',
    title: 'E-mail',
    text: 'contato@grupobraco.com.br',
    subtext: 'Respondemos em até 24h',
    href: 'mailto:contato@grupobraco.com.br',
  },
  {
    icon: MapPin,
    iconBg: 'bg-brand-orange/10',
    iconColor: 'text-brand-orange',
    hoverBorder: 'hover:border-brand-orange',
    title: 'Endereço',
    text: 'R. 11, Quadra 05 - Lote 07 - Polo Industrial',
    subtext: 'Aparecida de Goiânia - GO, 74985-235',
  },
  {
    icon: Clock,
    iconBg: 'bg-brand-navy/10',
    iconColor: 'text-brand-navy',
    hoverBorder: 'hover:border-brand-navy',
    title: 'Horário',
    text: 'Segunda a Sexta: 7h às 17h',
    subtext: '',
  },
];

const products = [
  'Corte e Dobra',
  'Vergalhões',
  'Treliças',
  'Telas e Malhas Pop',
  'Colunas',
  'Pregos e Arames',
];

const obraTypes = ['Residencial', 'Comercial', 'Industrial', 'Loteamento', 'Infraestrutura', 'Outro'];

export default function Contato() {
  useSEO({
    title: 'Contato | Solicite Orçamento de Aço em Goiânia | BR Aço',
    description: 'Entre em contato com a BR Aço. Solicite orçamento de vergalhões, corte e dobra, treliças e mais. Atendimento rápido via WhatsApp ou formulário. Goiânia e todo o Goiás.',
    canonical: 'https://grupobraco.com.br/contato',
    keywords: 'contato br aço, orçamento vergalhão goiânia, solicitar orçamento aço',
  });

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

    toast({
      title: "✓ Orçamento enviado com sucesso!",
      description: "Entraremos em contato em breve.",
    });

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

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contato</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Fale Conosco</h1>
          <p className="text-gray-300 mt-3">Estamos prontos para atender você e sua obra</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">Entre em Contato</h2>
              <p className="text-brand-gray-medium mt-2">
                Fale com nossa equipe comercial e técnica por qualquer um dos canais abaixo.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  const content = (
                    <div 
                      className={`bg-brand-gray-light rounded-xl p-5 flex items-start gap-4 border border-transparent ${card.hoverBorder} transition-colors ${card.href ? 'cursor-pointer' : ''}`}
                    >
                      <div className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${card.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-navy">{card.title}</h3>
                        <p className="text-brand-gray-medium text-sm">{card.text}</p>
                        <p className="text-xs text-brand-gray-medium mt-0.5">{card.subtext}</p>
                      </div>
                    </div>
                  );

                  return card.href ? (
                    <a key={index} href={card.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              {/* Social */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-4">
                  Siga-nos
                </h4>
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/grupobraco_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand-gray-light flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors text-brand-gray-medium"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://br.linkedin.com/company/grupobraco" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand-gray-light flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors text-brand-gray-medium"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Solicite seu Orçamento</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className={`rounded-xl ${errors.nome ? 'border-red-500' : ''}`}
                  />
                </div>

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
                    className={`rounded-xl ${errors.whatsapp ? 'border-red-500' : ''}`}
                  />
                </div>

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
                    className="rounded-xl"
                  />
                </div>

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
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-brand-navy mb-1.5 block">
                    Tipo de obra
                  </Label>
                  <Select
                    value={formData.tipoObra}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, tipoObra: value }))}
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Selecione o tipo de obra" />
                    </SelectTrigger>
                    <SelectContent>
                      {obraTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm font-medium text-brand-navy mb-3 block">
                    Produtos de interesse
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {products.map((product) => (
                      <div key={product} className="flex items-center space-x-2">
                        <Checkbox
                          id={`contato-${product}`}
                          checked={formData.produtos.includes(product)}
                          onCheckedChange={(checked) => handleProductChange(product, checked as boolean)}
                          className="data-[state=checked]:bg-brand-orange data-[state=checked]:border-brand-orange"
                        />
                        <Label htmlFor={`contato-${product}`} className="text-sm text-brand-gray-dark cursor-pointer">
                          {product}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="mensagem" className="text-sm font-medium text-brand-navy mb-1.5 block">
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto..."
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-xl py-4 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Orçamento
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-brand-gray-light flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-brand-gray-medium mx-auto mb-3" />
                <p className="text-brand-gray-medium">Mapa será carregado aqui</p>
              </div>
            </div>
            <p className="text-center text-brand-gray-medium mt-4">
              R. 11, Quadra 05 - Lote 07 - Polo Industrial — Aparecida de Goiânia - GO
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
