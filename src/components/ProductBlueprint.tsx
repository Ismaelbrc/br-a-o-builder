// Blueprint line-art por produto — desenho técnico de engenharia (sem fotos).
// Único, marcante e leve (SVG vetorial, zero peso de imagem).
// Preenche o container pai (que deve ser position:relative + aspect + overflow-hidden).

const ORANGE = '#F2740F';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const dimText = (x: number, y: number, t: string, anchor: 'start' | 'middle' | 'end' = 'middle') => (
  <text x={x} y={y} fill="#FFFFFF" fillOpacity="0.5" fontFamily={MONO} fontSize="11" letterSpacing="1.5" textAnchor={anchor}>{t}</text>
);

export type BlueprintKey =
  | 'corte-e-dobra'
  | 'vergalhoes'
  | 'trelicas'
  | 'telas-e-malhas-pop'
  | 'colunas'
  | 'pregos-e-arames';

function art(id: BlueprintKey): React.ReactNode {
  switch (id) {
    case 'corte-e-dobra': // Vergalhão dobrado 90°
      return (
        <>
          <path d="M50 175 H180 Q210 175 210 145 V60" stroke={ORANGE} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          {[70, 95, 120, 145].map((x) => <line key={x} x1={x} y1="167" x2={x + 10} y2="183" stroke="#0a0f17" strokeWidth="2.5" />)}
          <path d="M180 145 A30 30 0 0 1 195 173" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.5" fill="none" />
          {dimText(150, 140, '90°')}
          <line x1="50" y1="205" x2="210" y2="205" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="50" y1="200" x2="50" y2="210" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
          <line x1="210" y1="200" x2="210" y2="210" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" />
          {dimText(130, 224, 'L = SOB MEDIDA')}
        </>
      );
    case 'vergalhoes': // Barra nervurada + seção transversal
      return (
        <>
          <rect x="45" y="105" width="225" height="34" rx="4" stroke={ORANGE} strokeWidth="3" fill="none" />
          {[70, 95, 120, 145, 170, 195, 220, 245].map((x) => <line key={x} x1={x} y1="105" x2={x + 12} y2="139" stroke={ORANGE} strokeWidth="2" strokeOpacity="0.7" />)}
          <circle cx="305" cy="122" r="20" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
          <circle cx="305" cy="122" r="3" fill={ORANGE} />
          {dimText(157, 170, 'CA-50 · CA-60')}
          {dimText(305, 165, 'Ø')}
        </>
      );
    case 'trelicas': // Treliça — banzo + diagonais
      return (
        <>
          <line x1="45" y1="85" x2="315" y2="85" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="45" y1="165" x2="315" y2="165" stroke="#FFFFFF" strokeWidth="3" />
          <path d="M45 165 L90 85 L135 165 L180 85 L225 165 L270 85 L315 165" stroke={ORANGE} strokeWidth="3" fill="none" strokeLinejoin="round" />
          {[[45,85],[90,85],[180,85],[270,85],[45,165],[135,165],[225,165],[315,165]].map((p,i) => <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill={ORANGE} />)}
          {dimText(180, 200, 'TR08 — TR30')}
        </>
      );
    case 'telas-e-malhas-pop': // Malha soldada
      return (
        <>
          {[60, 110, 160, 210, 260, 310].map((x) => <line key={'v'+x} x1={x} y1="55" x2={x} y2="185" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.85" />)}
          {[70, 110, 150, 190].map((y) => <line key={'h'+y} x1="40" y1={y} x2="330" y2={y} stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.85" />)}
          {[60,110,160,210,260,310].map((x) => [70,110,150,190].map((y) => <circle key={x+'-'+y} cx={x} cy={y} r="3.5" fill={ORANGE} />))}
          {dimText(185, 215, 'SOLDA EM TODO CRUZAMENTO')}
        </>
      );
    case 'colunas': // Armadura de coluna — barras + estribos
      return (
        <>
          {[95, 150, 210, 265].map((x) => <line key={x} x1={x} y1="45" x2={x} y2="195" stroke="#FFFFFF" strokeWidth="3" />)}
          {[70, 115, 160].map((y) => <rect key={y} x="82" y={y} width="196" height="22" rx="5" stroke={ORANGE} strokeWidth="3" fill="none" />)}
          {dimText(180, 222, 'ARMADO · AMARRADO')}
        </>
      );
    case 'pregos-e-arames': // Prego + rolo de arame
      return (
        <>
          <line x1="95" y1="55" x2="155" y2="55" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="125" y1="58" x2="125" y2="180" stroke={ORANGE} strokeWidth="6" strokeLinecap="round" />
          <path d="M122 180 L125 198 L128 180 Z" fill={ORANGE} />
          {[0,1,2,3,4].map((i) => <ellipse key={i} cx="245" cy={90 + i*22} rx="48" ry="13" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.85" fill="none" />)}
          <ellipse cx="245" cy="90" rx="48" ry="13" stroke={ORANGE} strokeWidth="2.5" fill="none" />
          {dimText(180, 222, 'RECOZIDO · GALVANIZADO')}
        </>
      );
  }
}

/**
 * ProductBlueprint — preenche o container pai (relative + aspect + overflow-hidden).
 * Use dentro de um wrapper com `group` para ativar a animação de hover.
 */
export default function ProductBlueprint({ id }: { id: BlueprintKey }) {
  return (
    <div className="absolute inset-0 bg-metal">
      <div className="absolute inset-0 bg-blueprint opacity-[0.14] transition-opacity duration-500 group-hover:opacity-[0.22]" aria-hidden="true" />
      <span className="absolute top-4 left-4 h-3 w-3 border-l-2 border-t-2 border-white/30" aria-hidden="true" />
      <span className="absolute bottom-4 right-4 h-3 w-3 border-r-2 border-b-2 border-white/30" aria-hidden="true" />
      <svg
        viewBox="0 0 360 240"
        className="relative w-full h-full p-6 transition-transform duration-500 group-hover:scale-[1.03]"
        fill="none"
        aria-hidden="true"
      >
        {art(id)}
      </svg>
    </div>
  );
}
