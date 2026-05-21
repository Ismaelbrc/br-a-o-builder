import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TebasLayout } from '@/components/tebas/TebasLayout';
import { calcular } from '@/lib/tebas-calc';
import type { TebasInput, TipoEdificacao, ClasseConcreto, UsoLaje } from '@/lib/tebas-types';
import { TEBAS_RESULT_KEY } from '@/lib/tebas-types';

// ── Paleta ────────────────────────────────────────────────────────────────────
const ORANGE = '#F47A20';
const SURFACE = '#132337';
const SURFACE_HOVER = '#1A2E45';
const BORDER = 'rgba(255,255,255,0.08)';
const BORDER_ACTIVE = `rgba(244,122,32,0.6)`;
const TEXT = '#F1F5F9';
const TEXT_DIM = 'rgba(241,245,249,0.55)';

// ── Estado inicial ─────────────────────────────────────────────────────────────
const INITIAL: TebasInput = {
  tipo: 'terreo',
  area: 80,
  vao: 4.0,
  concreto: 'C25',
  usoLaje: 'piso_residencial',
  temSpt: false,
  spt: 5,
};

const TOTAL_STEPS = 7;

// ── Componentes internos ──────────────────────────────────────────────────────

function ChoiceCard({
  label,
  sub,
  selected,
  onClick,
}: {
  label: string;
  sub?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left w-full p-4 rounded-xl transition-all"
      style={{
        background: selected ? 'rgba(244,122,32,0.12)' : SURFACE,
        border: `2px solid ${selected ? BORDER_ACTIVE : BORDER}`,
        color: TEXT,
        cursor: 'pointer',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
          style={{ borderColor: selected ? ORANGE : 'rgba(255,255,255,0.3)' }}
        >
          {selected && <div className="w-2.5 h-2.5 rounded-full" style={{ background: ORANGE }} />}
        </div>
        <div>
          <p className="font-medium text-sm">{label}</p>
          {sub && <p className="text-xs mt-0.5" style={{ color: TEXT_DIM }}>{sub}</p>}
        </div>
      </div>
    </button>
  );
}

function NumberInput({
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  unit: string;
}) {
  // Nº de casas decimais derivado do step: step < 1 → 1 decimal, caso contrário inteiro
  const decimals = step < 1 ? 1 : 0;
  const fmt = (n: number) => (decimals > 0 ? n.toFixed(decimals) : String(Math.round(n)));

  const [display, setDisplay] = useState(() => fmt(value));

  // Sincroniza display quando o valor muda pelos botões +/−
  useEffect(() => {
    setDisplay(fmt(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Confirma e normaliza o valor ao sair do campo
  const commit = (raw: string) => {
    const parsed = parseFloat(raw.replace(',', '.'));
    const committed = isNaN(parsed) ? value : Math.min(max, Math.max(min, parsed));
    onChange(committed);
    setDisplay(fmt(committed));
  };

  // Botões de incremento — arredondamento evita artefatos float (ex: 4.0 + 0.5 = 4.499...)
  const step_ = (dir: 1 | -1) => {
    const next = Math.round((value + dir * step) * 1e9) / 1e9;
    onChange(Math.min(max, Math.max(min, next)));
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-xl"
        style={{ background: SURFACE, border: `2px solid ${BORDER_ACTIVE}` }}
      >
        <input
          type="text"
          inputMode={decimals > 0 ? 'decimal' : 'numeric'}
          value={display}
          onChange={e => {
            setDisplay(e.target.value);
            // Atualiza em tempo real apenas quando já é um número válido no intervalo
            const v = parseFloat(e.target.value.replace(',', '.'));
            if (!isNaN(v) && v >= min && v <= max) onChange(v);
          }}
          onBlur={e => commit(e.target.value)}
          onFocus={e => e.target.select()}
          onKeyDown={e => { if (e.key === 'Enter') e.currentTarget.blur(); }}
          className="text-2xl font-bold w-24 bg-transparent border-none outline-none text-center"
          style={{ color: ORANGE }}
        />
        <span className="text-sm" style={{ color: TEXT_DIM }}>{unit}</span>
      </div>
      <div className="flex flex-col gap-1">
        <button
          type="button"
          onClick={() => step_(1)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold transition-colors"
          style={{ background: SURFACE, color: TEXT }}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => step_(-1)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold transition-colors"
          style={{ background: SURFACE, color: TEXT }}
        >
          −
        </button>
      </div>
    </div>
  );
}

// ── Processing screen ─────────────────────────────────────────────────────────

const processingTexts = [
  'Verificando vãos e sobrecargas (NBR 6120)…',
  'Calculando espessura de laje (NBR 6118 §13.2.4)…',
  'Pré-dimensionando vigas principais…',
  'Dimensionando seções dos pilares (NBR 6118 §15)…',
  'Calculando sapatas (NBR 6122 §8.3)…',
  'Gerando memória de cálculo…',
];

function ProcessingScreen({ onDone }: { onDone: () => void }) {
  const [textIdx, setTextIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const total = processingTexts.length;
    let i = 0;

    const interval = setInterval(() => {
      i++;
      setTextIdx(i % total);
      setProgress(Math.min((i / total) * 100, 95));
      if (i >= total) {
        clearInterval(interval);
        setTimeout(() => {
          setProgress(100);
          setTimeout(onDone, 400);
        }, 300);
      }
    }, 550);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-6">
      {/* Spinner */}
      <div
        className="w-16 h-16 rounded-full border-4 border-t-transparent animate-spin"
        style={{ borderColor: `${ORANGE} transparent ${ORANGE} ${ORANGE}` }}
      />

      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <p className="text-center font-medium" style={{ color: TEXT }}>
          {processingTexts[textIdx]}
        </p>

        {/* Progress bar */}
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: SURFACE }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: ORANGE }}
          />
        </div>
        <p className="text-xs" style={{ color: TEXT_DIM }}>{Math.round(progress)}%</p>
      </div>
    </div>
  );
}

// ── Review screen ─────────────────────────────────────────────────────────────

const TIPO_LABEL: Record<TipoEdificacao, string> = {
  terreo: 'Residencial térrea (1 pav.)',
  sobrado2: 'Sobrado 2 pavimentos',
  sobrado3: 'Sobrado 3 pavimentos',
};
const USO_LABEL: Record<UsoLaje, string> = {
  cobertura: 'Cobertura (sem tráfego)',
  piso_residencial: 'Piso residencial',
  garagem: 'Garagem — veículos leves',
};

function ReviewScreen({ data }: { data: TebasInput }) {
  const rows = [
    ['Tipo', TIPO_LABEL[data.tipo]],
    ['Área por pavimento', `${data.area} m²`],
    ['Maior vão livre', `${data.vao} m`],
    ['Classe de concreto', data.concreto],
    ['Uso da laje', USO_LABEL[data.usoLaje]],
    ['Solo / SPT', data.temSpt ? `NSPT = ${data.spt}` : 'Sem laudo — parâmetro conservador'],
  ];

  return (
    <div className="w-full max-w-sm">
      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
        {rows.map(([label, val], i) => (
          <div
            key={label}
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: i % 2 === 0 ? SURFACE : 'rgba(255,255,255,0.02)',
              borderBottom: i < rows.length - 1 ? `1px solid ${BORDER}` : undefined,
            }}
          >
            <span className="text-sm" style={{ color: TEXT_DIM }}>{label}</span>
            <span className="text-sm font-medium" style={{ color: TEXT }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Wizard principal ──────────────────────────────────────────────────────────

export default function TebasCalcular() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [data, setData] = useState<TebasInput>(INITIAL);
  const [visible, setVisible] = useState(true);

  // Animação de transição entre steps
  const goTo = useCallback((nextStep: number) => {
    setVisible(false);
    setTimeout(() => {
      setStep(nextStep);
      setVisible(true);
    }, 180);
  }, []);

  const next = () => {
    if (step < TOTAL_STEPS) goTo(step + 1);
    else handleCalcular();
  };

  const prev = () => {
    if (step > 1) goTo(step - 1);
  };

  const handleCalcular = () => {
    setProcessing(true);
  };

  const handleDone = useCallback(() => {
    const resultado = calcular(data);
    sessionStorage.setItem(TEBAS_RESULT_KEY, JSON.stringify(resultado));
    navigate('/tebas/resultado');
  }, [data, navigate]);

  const progress = (step / TOTAL_STEPS) * 100;

  if (processing) {
    return (
      <TebasLayout>
        <ProcessingScreen onDone={handleDone} />
      </TebasLayout>
    );
  }

  return (
    <TebasLayout>
      <div className="flex flex-col items-center min-h-[calc(100vh-120px)] px-6 py-8">
        {/* Progress */}
        <div className="w-full max-w-sm mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium" style={{ color: TEXT_DIM }}>
              Passo {step} de {TOTAL_STEPS}
            </span>
            <span className="text-xs" style={{ color: TEXT_DIM }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: SURFACE }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: ORANGE }}
            />
          </div>
        </div>

        {/* Step content */}
        <div
          className="flex-1 flex flex-col items-center w-full max-w-sm transition-all duration-180"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(10px)' }}
        >
          {/* ── Step 1: Tipo ── */}
          {step === 1 && (
            <StepWrapper
              question="Qual o tipo da edificação?"
              hint="Informe quantos pavimentos de laje terá a construção."
            >
              {(
                [
                  ['terreo', 'Residencial térrea', '1 pavimento + laje de cobertura'],
                  ['sobrado2', 'Sobrado — 2 pavimentos', 'Andar térreo + 1º andar + cobertura'],
                  ['sobrado3', 'Sobrado — 3 pavimentos', 'Até 3 andares + cobertura'],
                ] as [TipoEdificacao, string, string][]
              ).map(([id, label, sub]) => (
                <ChoiceCard
                  key={id}
                  label={label}
                  sub={sub}
                  selected={data.tipo === id}
                  onClick={() => setData(d => ({ ...d, tipo: id }))}
                />
              ))}
            </StepWrapper>
          )}

          {/* ── Step 2: Área ── */}
          {step === 2 && (
            <StepWrapper
              question="Qual a área por pavimento?"
              hint="Não precisa ser exata — uma estimativa já é suficiente."
            >
              <NumberInput
                value={data.area}
                min={30}
                max={500}
                step={5}
                unit="m²"
                onChange={v => setData(d => ({ ...d, area: v }))}
              />
              <p className="text-xs mt-2" style={{ color: TEXT_DIM }}>
                Intervalo: 30 m² (quitinete) até 500 m² (residência ampla)
              </p>
            </StepWrapper>
          )}

          {/* ── Step 3: Vão ── */}
          {step === 3 && (
            <StepWrapper
              question="Qual o maior vão livre da laje?"
              hint="Meça a maior dimensão do maior cômodo sem parede ou viga no meio."
            >
              <NumberInput
                value={data.vao}
                min={2.0}
                max={9.0}
                step={0.5}
                unit="m"
                onChange={v => setData(d => ({ ...d, vao: v }))}
              />
              <p className="text-xs mt-2" style={{ color: TEXT_DIM }}>
                Típico: sala de estar 4,0–5,5 m · dormitório 3,0–4,0 m
              </p>
            </StepWrapper>
          )}

          {/* ── Step 4: Concreto ── */}
          {step === 4 && (
            <StepWrapper
              question="Qual a classe de concreto que será usada?"
              hint="O fck define a resistência característica à compressão."
            >
              {(
                [
                  ['C20', 'C20 — fck = 20 MPa', 'Mínimo para concreto armado (NBR 6118)'],
                  ['C25', 'C25 — fck = 25 MPa', 'Padrão popular residencial ✓'],
                  ['C30', 'C30 — fck = 30 MPa', 'Padrão médio/alto — maior durabilidade'],
                ] as [ClasseConcreto, string, string][]
              ).map(([id, label, sub]) => (
                <ChoiceCard
                  key={id}
                  label={label}
                  sub={sub}
                  selected={data.concreto === id}
                  onClick={() => setData(d => ({ ...d, concreto: id }))}
                />
              ))}
            </StepWrapper>
          )}

          {/* ── Step 5: Uso laje ── */}
          {step === 5 && (
            <StepWrapper
              question="Como será usada a laje principal?"
              hint="Define a sobrecarga de utilização conforme NBR 6120:2019."
            >
              {(
                [
                  ['cobertura', 'Cobertura — sem tráfego', 'q = 1,0 kN/m² — acesso apenas para manutenção'],
                  ['piso_residencial', 'Piso residencial', 'q = 1,5 kN/m² — salas, quartos, cozinha'],
                  ['garagem', 'Garagem — veículos leves', 'q = 3,0 kN/m² — até 30 kN por eixo'],
                ] as [UsoLaje, string, string][]
              ).map(([id, label, sub]) => (
                <ChoiceCard
                  key={id}
                  label={label}
                  sub={sub}
                  selected={data.usoLaje === id}
                  onClick={() => setData(d => ({ ...d, usoLaje: id }))}
                />
              ))}
            </StepWrapper>
          )}

          {/* ── Step 6: Solo / SPT ── */}
          {step === 6 && (
            <StepWrapper
              question="Tem laudo de sondagem do terreno?"
              hint="O NSPT (Standard Penetration Test) define a tensão admissível do solo."
            >
              <div className="w-full flex flex-col gap-3">
                <ChoiceCard
                  label="Não tenho — usar parâmetro conservador"
                  sub="Tebas adota NSPT = 5 (solos fracos) para segurança"
                  selected={!data.temSpt}
                  onClick={() => setData(d => ({ ...d, temSpt: false }))}
                />
                <ChoiceCard
                  label="Tenho laudo de sondagem (SPT)"
                  sub="Informarei o NSPT médio até 3 metros de profundidade"
                  selected={data.temSpt}
                  onClick={() => setData(d => ({ ...d, temSpt: true }))}
                />
                {data.temSpt && (
                  <div className="mt-2 flex flex-col gap-2">
                    <p className="text-sm" style={{ color: TEXT_DIM }}>
                      NSPT médio (solos até ~3 m de profundidade):
                    </p>
                    <NumberInput
                      value={data.spt}
                      min={1}
                      max={60}
                      step={1}
                      unit="golpes"
                      onChange={v => setData(d => ({ ...d, spt: v }))}
                    />
                  </div>
                )}
              </div>
            </StepWrapper>
          )}

          {/* ── Step 7: Revisão ── */}
          {step === 7 && (
            <StepWrapper
              question="Tudo certo? Vou calcular agora."
              hint="Confira os dados inseridos antes de gerar o resultado."
            >
              <ReviewScreen data={data} />
            </StepWrapper>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between w-full max-w-sm mt-8 gap-3">
          <button
            type="button"
            onClick={prev}
            disabled={step === 1}
            className="px-5 py-3 rounded-xl text-sm font-medium transition-all"
            style={{
              background: step === 1 ? 'rgba(255,255,255,0.04)' : SURFACE,
              color: step === 1 ? 'rgba(241,245,249,0.2)' : TEXT_DIM,
              border: `1px solid ${BORDER}`,
              cursor: step === 1 ? 'not-allowed' : 'pointer',
            }}
          >
            ← Voltar
          </button>

          <button
            type="button"
            onClick={next}
            className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all"
            style={{ background: ORANGE, color: '#fff', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#d96a10')}
            onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}
          >
            {step < TOTAL_STEPS ? 'Próximo →' : '⚡ Calcular estrutura'}
          </button>
        </div>
      </div>
    </TebasLayout>
  );
}

// ── Wrapper de passo ──────────────────────────────────────────────────────────

function StepWrapper({
  question,
  hint,
  children,
}: {
  question: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold leading-snug" style={{ color: '#F1F5F9' }}>
          {question}
        </h2>
        {hint && (
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(241,245,249,0.5)' }}>
            {hint}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
