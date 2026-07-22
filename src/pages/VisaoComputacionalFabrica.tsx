import { Link } from 'react-router-dom';
import { analytics } from '@/lib/analytics';
import {
  Camera, ShieldCheck, Radio, HardHat, ChevronRight, ArrowRight,
  MessageCircle, Lock, FileCheck, Clock, LucideIcon,
} from 'lucide-react';
import Layout from '@/components/Layout';
import Eyebrow from '@/components/Eyebrow';
import SectionIntro from '@/components/SectionIntro';
import Reveal from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';

const WHATSAPP = "https://wa.me/556299032023?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20sobre%20a%20vis%C3%A3o%20computacional%20na%20f%C3%A1brica%20da%20BR%20A%C3%A7o%20e%20gostaria%20de%20saber%20mais.";

interface Passo { icon: LucideIcon; title: string; description: string; }
const comoFunciona: Passo[] = [
  {
    icon: Camera,
    title: 'Identificação na entrada',
    description: 'Câmeras posicionadas na portaria reconhecem cada pessoa que entra — funcionário ou visitante previamente cadastrado — e registram o acesso nominalmente, sem depender de crachá ou catraca.',
  },
  {
    icon: Radio,
    title: 'Acompanhamento por zona',
    description: 'O sistema acompanha, de forma anônima nos bastidores, a movimentação pelas áreas dos 4.000 m² de chão de fábrica — sem vincular a rotina de ninguém a uma identidade, apenas mapeando fluxo e ocupação.',
  },
  {
    icon: HardHat,
    title: 'Verificação automática de EPI',
    description: 'Uso de capacete e colete é verificado continuamente nas áreas de produção. Quando falta um equipamento obrigatório, o alerta é imediato — antes que vire um incidente.',
  },
  {
    icon: Clock,
    title: 'Detecção de linha parada',
    description: 'Quando uma linha de produção fica parada sem explicação, o sistema identifica e avisa. Ninguém precisa estar olhando uma tela de câmera o dia inteiro para perceber.',
  },
];

interface Compromisso { icon: LucideIcon; title: string; description: string; }
const compromissos: Compromisso[] = [
  {
    icon: Lock,
    title: 'Dado sensível tratado como sensível',
    description: 'Informação de reconhecimento facial é classificada e protegida com o mesmo rigor de qualquer dado sensível da empresa — acesso restrito, criptografia e finalidade específica.',
  },
  {
    icon: FileCheck,
    title: 'Sem armazenamento de vídeo identificado',
    description: 'A BR Aço não guarda gravação de vídeo associada a uma identidade. O que fica registrado é um identificador criptografado, sem valor fora do próprio sistema.',
  },
  {
    icon: ShieldCheck,
    title: 'Consentimento e prazos definidos',
    description: 'Cada pessoa cadastrada — funcionário ou visitante — tem consentimento registrado, com prazo de retenção definido e processo de exclusão, dentro do mesmo padrão de compliance que rege os demais processos da empresa.',
  },
];

export default function VisaoComputacionalFabrica() {
  useSEO({
    title: 'Visão Computacional na Fábrica | BR Aço',
    description: 'Como a BR Aço usa reconhecimento por câmera para acompanhar segurança e protocolos em seus 4.000 m² de chão de fábrica, com tratamento de dados sensível e responsável.',
    noindex: true,
  });

  return (
    <Layout>
      {/* ══ HERO ══ */}
      <section className="relative bg-metal overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <nav className="flex items-center gap-2 label-eyebrow text-white/40 mb-10" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Visão Computacional na Fábrica</span>
          </nav>
          <Eyebrow tone="light">Operação · Segurança e Qualidade</Eyebrow>
          <h1 className="text-display-xl text-white mt-6 max-w-[22ch]">
            Sabemos exatamente quem está na fábrica — e por quê isso importa.
          </h1>
          <p className="text-lg text-white/75 mt-6 max-w-2xl leading-relaxed">
            A BR Aço opera um chão de fábrica de 4.000 m². Decidimos saber, em tempo real, quem
            está em cada área e se os protocolos de segurança estão sendo seguidos —
            não por desconfiança, mas por compromisso com a segurança do nosso time e com a
            qualidade do aço que chega até a sua obra.
          </p>
        </div>
      </section>

      {/* ══ COMO FUNCIONA ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Como funciona"
            title="Uma camada a mais de controle sobre a operação."
            description="Sem trocar nenhum processo de produção — apenas com mais visibilidade sobre o que já fazemos todos os dias."
          />
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {comoFunciona.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={(index % 2) * 80}>
                  <div className="group relative flex h-full flex-col bg-background p-7 sm:p-8">
                    <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                    <h3 className="font-display text-xl font-semibold text-brand-navy mt-6 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray-medium text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="text-sm text-brand-gray-medium mt-8 max-w-2xl">
            Os alertas chegam por WhatsApp e painel interno — sem depender de alguém observando
            câmera o dia inteiro. A resposta a qualquer desvio é mais rápida porque a informação
            chega antes de virar problema.
          </p>
        </div>
      </section>

      {/* ══ RESPONSABILIDADE / LGPD ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Responsabilidade sobre os dados"
            title="Reconhecimento facial é dado sensível. Tratamos como tal."
            description="Ganhar visibilidade sobre a fábrica não pode custar a privacidade de quem trabalha ou visita nossas instalações. Por isso, este sistema segue o mesmo rigor de qualquer processo de compliance da BR Aço."
          />
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {compromissos.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={(index % 3) * 70}>
                  <div className="group relative h-full bg-card rounded-2xl border border-hairline p-7 hover:border-brand-orange/40 transition-colors">
                    <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                    <h3 className="font-display text-lg font-semibold text-brand-navy mt-5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray-medium text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FECHAMENTO ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="text-display-md text-brand-navy text-balance">
              Parte do nosso compromisso com uma operação moderna — para o nosso time e para
              quem recebe o nosso aço.
            </p>
            <div className="mt-6 space-y-4 text-brand-gray-medium leading-relaxed max-w-3xl">
              <p>
                Essa camada de visão computacional não é um produto que vendemos — é uma decisão
                operacional interna. Faz parte do jeito como a BR Aço encara segurança do time,
                disciplina de processo e a garantia de qualidade que sustenta cada peça de aço
                que sai do nosso pátio até a sua obra.
              </p>
            </div>
          </Reveal>

          <div className="relative overflow-hidden bg-brand-orange rounded-2xl p-10 md:p-14 mt-12 text-center">
            <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <Eyebrow tone="light" className="justify-center">Fale com a gente</Eyebrow>
              <h2 className="text-display-md text-white mt-5">
                Tem uma dúvida sobre como operamos? Pergunte diretamente.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild className="bg-white text-brand-orange hover:bg-white/90 rounded-lg px-8 py-6 text-base font-semibold">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setTimeout(() => analytics.whatsappClick('visao-computacional-fabrica'), 0)}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Link
                  to="/sobre"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold rounded-lg px-8 py-4 hover:bg-white hover:text-brand-orange transition-colors"
                >
                  Conhecer a BR Aço
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
