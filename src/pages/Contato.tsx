import { useState } from 'react';
import { analytics } from '@/lib/analytics';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import Layout from '@/components/Layout';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ChevronRight, MessageCircle, Mail, MapPin, Clock,
  Send, Instagram, Linkedin, Phone, ArrowRight
} from 'lucide-react';

const WHATSAPP_BASE = 'https://wa.me/556299032023';

const contactCards = [
  {
    icon: MessageCircle,
    iconBg: 'bg-brand-whatsapp/10',
    iconColor: 'text-brand-whatsapp',
    borderColor: 'hover:border-brand-whatsapp/50',
    title: 'WhatsApp',
    text: '(62) 9903-2023',
    subtext: 'Resposta em minutos',
    href: `${WHATSAPP_BASE}?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20BR%20A%C3%A7o.`,
    trackFn: () => analytics.whatsappClick('contato'),
  },
  {
    icon: Mail,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    borderColor: 'hover:border-blue-500/50',
    title: 'E-mail',
    text: 'contato@grupobraco.com.br',
    subtext: 'Respondemos em até 24h',
    href: 'mailto:contato@grupobraco.com.br',
  },
  {
    icon: MapPin,
    iconBg: 'bg-brand-orange/10',
    iconColor: 'text-brand-orange',
    borderColor: 'hover:border-brand-orange/50',
    title: 'Endereço',
    text: 'Rua 11, Qd. 05, L7. 07 - Polo Industrial',
    subtext: 'Aparecida de Goiânia - GO',
    href: 'https://www.google.com/maps/search/BR+Aço+Aparecida+de+Goiânia',
  },
  {
    icon: Clock,
    iconBg: 'bg-brand-navy/10',
    iconColor: 'text-brand-navy',
    borderColor: 'hover:border-brand-navy/30',
    title: 'Horário',
    text: 'Seg–Sex: 7h às 17h',
    subtext: 'Fechado aos finais de semana',
    href: null,
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

function buildWhatsAppMessage(data: {
  nome: string;
  whatsapp: string;
  email: string;
  cidade: string;
  tipoObra: string;
  produtos: string[];
  mensagem: string;
}) {
  const lines = [
    `[src:formulario] Olá! Tenho interesse em orçamento.`,
    `Nome: ${data.nome}`,
    data.whatsapp ? `WhatsApp: ${data.whatsapp}` : null,
    data.email ? `E-mail: ${data.email}` : null,
    data.cidade ? `Cidade: ${data.cidade}` : null,
    data.tipoObra ? `Tipo de obra: ${data.tipoObra}` : null,
    data.produtos.length > 0 ? `Produtos: ${data.produtos.join(', ')}` : null,
    data.mensagem ? `Mensagem: ${data.mensagem}` : null,
  ].filter(Boolean);
  return encodeURIComponent(lines.join('\n'));
}

export default function Contato() {
  useSEO({
    title: 'Contato | Solicite Orçamento de Aço em Goiânia | BR Aço',
    description: 'Entre em contato com a BR Aço. Solicite orçamento de vergalhões, corte e dobra, treliças e mais. Atendimento rápido via WhatsApp ou formulário. Goiânia e todo o Goiás.',
    canonical: 'https://grupobraco.com.br/contato',
    keywords: 'contato br aço, orçamento vergalhão goiânia, solicitar orçamento aço',
  });

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
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    const msg = buildWhatsAppMessage(formData);
    setTimeout(() => analytics.whatsappClick('contato-form'), 0);
    window.open(`${WHATSAPP_BASE}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">Contato</span>
          </nav>

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="h-px w-6 bg-brand-orange" />
              Fale Conosco
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Solicite seu orçamento
            </h1>
            <p className="text-white/60 mt-4 text-base sm:text-lg max-w-lg">
              Nossa equipe técnica responde em minutos. Mande a lista de material ou planta — calculamos tudo para você.
            </p>

            <a
              href={`${WHATSAPP_BASE}?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Quero%20solicitar%20um%20or%C3%A7amento.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setTimeout(() => analytics.whatsappClick('contato-hero'), 0)}
              className="mt-8 inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white font-semibold rounded-xl px-6 py-3.5 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              const content = (
                <div className={`group bg-white rounded-xl p-4 sm:p-5 border border-gray-100 ${card.borderColor} transition-all hover:shadow-md flex items-start gap-3 sm:gap-4 h-full ${card.href ? 'cursor-pointer' : ''}`}>
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${card.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-brand-navy text-sm sm:text-base">{card.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-0.5 break-words">{card.text}</p>
                    {card.subtext && <p className="text-xs text-gray-400 mt-0.5">{card.subtext}</p>}
                  </div>
                </div>
              );

              return card.href ? (
                <a
                  key={index}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => card.trackFn?.()}
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left — Form */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">Formulário de Orçamento</h2>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Preencha abaixo — ao enviar, abrimos o WhatsApp com as informações preenchidas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all ${errors.nome ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'}`}
                    />
                    {errors.nome && <p className="text-xs text-red-500 mt-1">Campo obrigatório</p>}
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-brand-navy mb-1.5">
                      WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="(62) 99999-9999"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all ${errors.whatsapp ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'}`}
                      />
                    </div>
                    {errors.whatsapp && <p className="text-xs text-red-500 mt-1">Campo obrigatório</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1.5">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Cidade / Estado
                    </label>
                    <input
                      id="cidade"
                      name="cidade"
                      type="text"
                      placeholder="Ex: Goiânia - GO"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1.5">
                    Tipo de obra
                  </label>
                  <Select
                    value={formData.tipoObra}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, tipoObra: value }))}
                  >
                    <SelectTrigger className="rounded-xl border-gray-200 h-11">
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
                  <label className="block text-sm font-medium text-brand-navy mb-2.5">
                    Produtos de interesse
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4">
                    {products.map((product) => (
                      <div key={product} className="flex items-center gap-2">
                        <Checkbox
                          id={`contato-${product}`}
                          checked={formData.produtos.includes(product)}
                          onCheckedChange={(checked) => handleProductChange(product, checked as boolean)}
                          className="data-[state=checked]:bg-brand-orange data-[state=checked]:border-brand-orange"
                        />
                        <Label htmlFor={`contato-${product}`} className="text-sm text-gray-700 cursor-pointer select-none">
                          {product}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-brand-navy mb-1.5">
                    Mensagem ou lista de materiais
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    placeholder="Ex: Preciso de 200 barras de CA-50 10mm para laje de 120m²..."
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white font-semibold rounded-xl py-4 text-base transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </button>

                <p className="text-center text-xs text-gray-400">
                  Ao enviar, abrimos o WhatsApp com as informações preenchidas.
                </p>
              </form>
            </div>

            {/* Right — Info + Social */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Why choose card */}
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-4 text-white/90">Por que escolher a BR Aço?</h3>
                <ul className="space-y-3">
                  {[
                    { icon: '⚡', text: 'Entrega em até 48h em Goiânia e região' },
                    { icon: '✅', text: 'Certificação ABNT NBR 7480 em todos os produtos' },
                    { icon: '🏭', text: 'Produção 100% automatizada, sem desperdício' },
                    { icon: '💬', text: 'Suporte técnico gratuito com engenheiros' },
                    { icon: '📦', text: 'Atendemos desde construtoras até autônomos' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className="text-base flex-shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h4 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-4">
                  Siga-nos
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/grupobraco_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram BR Aço"
                    className="flex items-center gap-2.5 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 hover:border-brand-orange hover:text-brand-orange transition-colors"
                  >
                    <Instagram className="w-4 h-4 flex-shrink-0" />
                    @grupobraco_
                  </a>
                  <a
                    href="https://br.linkedin.com/company/grupobraco"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Grupo Braco"
                    className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-xl px-3 py-3 text-gray-700 hover:border-blue-500 hover:text-blue-500 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick whatsapp */}
              <a
                href={`${WHATSAPP_BASE}?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20r%C3%A1pido.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTimeout(() => analytics.whatsappClick('contato-sidebar'), 0)}
                className="flex items-center gap-4 bg-brand-whatsapp/5 hover:bg-brand-whatsapp/10 border border-brand-whatsapp/20 rounded-2xl p-5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-whatsapp/15 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-brand-whatsapp" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-brand-navy text-sm">Resposta imediata</p>
                  <p className="text-xs text-gray-500 mt-0.5">Prefere chamar direto? Clique aqui.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-whatsapp flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-base font-semibold text-brand-navy mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-orange" />
            Nossa localização
          </h2>
          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Localização BR Aço — Polo Industrial Aparecida de Goiânia"
              src="https://maps.google.com/maps?q=BR+Aço+Polo+Industrial+Aparecida+de+Goiânia+GO&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Rua 11, Qd. 05, L7. 07 - Polo Industrial — Aparecida de Goiânia - GO, 74985-235
          </p>
        </div>
      </section>
    </Layout>
  );
}
