import { Link } from 'react-router-dom';
import { analytics } from '@/lib/analytics';
import {
  Camera, ShieldCheck, Radio, HardHat, ChevronRight, ArrowRight,
  MessageCircle, Lock, FileCheck, Clock, LucideIcon,
  Cpu, Fingerprint, Workflow, Wifi, Database, KeyRound,
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

interface StackItem { icon: LucideIcon; title: string; description: string; }
const stackTecnica: StackItem[] = [
  {
    icon: Camera,
    title: 'Captura',
    description: 'Câmeras IP RTSP (H.264/H.265, PoE) na entrada e nas áreas de cobertura, num switch PoE+ com VLAN dedicada e isolada do restante da rede.',
  },
  {
    icon: Cpu,
    title: 'Processamento de visão',
    description: 'NVIDIA DeepStream faz o batch de todas as câmeras numa única GPU; YOLOv11 detecta pessoas, EPI e empilhadeiras; ByteTrack mantém o rastreamento entre frames.',
  },
  {
    icon: Fingerprint,
    title: 'Identidade',
    description: 'SCRFD localiza o rosto e ArcFace gera o identificador (InsightFace, rodando em GPU); a galeria de funcionários e visitantes fica em banco próprio, com consentimento e prazo de validade registrados.',
  },
  {
    icon: Workflow,
    title: 'Regras de negócio',
    description: 'Um motor próprio consome os eventos e decide: tempo de permanência por zona, parada de linha, conformidade de EPI — sempre vinculado à identidade certa.',
  },
  {
    icon: Wifi,
    title: 'IoT e alertas',
    description: 'Um barramento de mensagens conecta todos os serviços; os alertas chegam no WhatsApp e num painel, com histórico mantido à parte.',
  },
  {
    icon: Database,
    title: 'Infraestrutura',
    description: 'Tudo roda em containers sobre uma GPU dedicada, com um armazenamento próprio reservado só para a gravação de vídeo dos últimos 30 dias.',
  },
  {
    icon: KeyRound,
    title: 'Conformidade',
    description: 'Dado biométrico é tratado como sensível: só um identificador criptografado circula entre os sistemas — nunca o nome ou o vídeo bruto de ninguém.',
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

      {/* ══ EXEMPLO ILUSTRATIVO ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Exemplo ilustrativo"
            title="Assim o sistema enxergaria o chão de fábrica."
            description="Imagens reais das câmeras da fábrica, com uma simulação de como as detecções apareceriam. Este é um exemplo ilustrativo de funcionamento — não uma captura ao vivo do sistema em operação."
          />
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Card 1 — Produção / vergalhão */}
            <Reveal>
              <figure>
                <div className="relative rounded-2xl overflow-hidden border border-hairline h-64 sm:h-72">
                  <img
                    src="/images/visao-fabrica/producao-vergalhao.jpg"
                    alt="Câmera da linha de produção de vergalhão, com simulação de detecção de colaboradores"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded">
                      Exemplo ilustrativo
                    </span>

                    {/* Pessoa 1 */}
                    <div
                      className="absolute border-2 border-brand-orange bg-brand-orange/10 rounded"
                      style={{ left: '16%', top: '14%', width: '6%', height: '22%' }}
                    >
                      <span className="absolute left-0 top-full mt-0.5 whitespace-nowrap bg-brand-orange text-white text-[10px] px-1.5 py-0.5 rounded">
                        Colaborador · EPI ok
                      </span>
                    </div>

                    {/* Pessoa 2 */}
                    <div
                      className="absolute border-2 border-brand-orange bg-brand-orange/10 rounded"
                      style={{ left: '88%', top: '24%', width: '5%', height: '20%' }}
                    >
                      <span className="absolute right-0 top-full mt-0.5 whitespace-nowrap bg-brand-orange text-white text-[10px] px-1.5 py-0.5 rounded">
                        Colaborador · EPI ok
                      </span>
                    </div>

                    <span className="absolute left-3 bottom-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded">
                      Zona: Produção
                    </span>
                  </div>
                </div>
                <figcaption className="text-sm text-brand-gray-medium mt-3">
                  Linha de produção — vergalhão
                </figcaption>
              </figure>
            </Reveal>

            {/* Card 2 — Pátio de materiais */}
            <Reveal delay={70}>
              <figure>
                <div className="relative rounded-2xl overflow-hidden border border-hairline h-64 sm:h-72">
                  <img
                    src="/images/visao-fabrica/patio-materiais.jpg"
                    alt="Câmera do pátio de materiais, sem movimentação de pessoas no momento"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded">
                      Exemplo ilustrativo
                    </span>

                    <span className="absolute left-3 bottom-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded">
                      Zona: Pátio · sem movimentação
                    </span>
                  </div>
                </div>
                <figcaption className="text-sm text-brand-gray-medium mt-3">
                  Pátio de materiais — acesso
                </figcaption>
              </figure>
            </Reveal>

            {/* Card 3 — Armazém / perfis */}
            <Reveal delay={140}>
              <figure>
                <div className="relative rounded-2xl overflow-hidden border border-hairline h-64 sm:h-72">
                  <img
                    src="/images/visao-fabrica/armazem-perfis.jpg"
                    alt="Câmera do armazém de perfis e treliças, com simulação de detecção de colaboradores"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded">
                      Exemplo ilustrativo
                    </span>

                    {/* Pessoa 1 */}
                    <div
                      className="absolute border-2 border-brand-orange bg-brand-orange/10 rounded"
                      style={{ left: '15%', top: '10%', width: '6%', height: '16%' }}
                    >
                      <span className="absolute left-0 top-full mt-0.5 whitespace-nowrap bg-brand-orange text-white text-[10px] px-1.5 py-0.5 rounded">
                        Colaborador · EPI ok
                      </span>
                    </div>

                    {/* Pessoa 2 */}
                    <div
                      className="absolute border-2 border-brand-orange bg-brand-orange/10 rounded"
                      style={{ left: '56%', top: '48%', width: '8%', height: '20%' }}
                    >
                      <span className="absolute left-0 top-full mt-0.5 whitespace-nowrap bg-brand-orange text-white text-[10px] px-1.5 py-0.5 rounded">
                        Colaborador · EPI ok
                      </span>
                    </div>

                    <span className="absolute left-3 bottom-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded">
                      Zona: Armazém
                    </span>
                  </div>
                </div>
                <figcaption className="text-sm text-brand-gray-medium mt-3">
                  Armazém — perfis e treliças
                </figcaption>
              </figure>
            </Reveal>
          </div>
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

      {/* ══ STACK TÉCNICA ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Para quem quer entender tecnicamente"
            title="A stack por trás dessa camada de visão."
            description="Sete domínios, cada um com uma responsabilidade clara — do sensor até o alerta."
          />
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {stackTecnica.map((item, index) => {
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
