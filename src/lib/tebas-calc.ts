// ─── Tebas — Motor de Cálculo NBR ────────────────────────────────────────────
// Pré-dimensionamento conforme:
//   NBR 6118:2023 — Projeto de estruturas de concreto armado
//   NBR 6120:2019 — Ações para o cálculo de estruturas de edificações
//   NBR 6122:2019 — Projeto e execução de fundações
//
// AVISO: resultados são estimativas de pré-dimensionamento para fase de
// anteprojeto. Não substituem projeto estrutural definitivo com ART.

import type {
  TebasInput,
  TebasResult,
  LajeResult,
  VigaResult,
  PilarResult,
  SapataResult,
  ClasseConcreto,
  TipoEdificacao,
  UsoLaje,
  AcoLinha,
  AcoBitola,
  AcoResult,
} from './tebas-types';

// ── Constantes ───────────────────────────────────────────────────────────────

const GAMMA_C = 1.4;   // coef. parcial do concreto (NBR 6118 Tab. 12.1)
const GAMMA_S = 1.15;  // coef. parcial do aço CA-50
const GAMMA_F = 1.4;   // coef. majoração de ações (ELU, comb. normal)
const FYK = 500;       // MPa — CA-50 (NBR 7480)
const ES = 210_000;    // MPa — módulo de elasticidade do aço

// Peso específico do concreto armado (kN/m³)
const GAMMA_CA = 25;

// ── Helpers ──────────────────────────────────────────────────────────────────

/** fck (MPa) a partir da classe */
function fck(concreto: ClasseConcreto): number {
  return { C20: 20, C25: 25, C30: 30 }[concreto];
}

/** fcd (MPa) = fck / γc */
function fcd(concreto: ClasseConcreto): number {
  return fck(concreto) / GAMMA_C;
}

/** fyd (MPa) = fyk / γs */
const FYD = FYK / GAMMA_S; // 434.78 MPa

/** Número de pavimentos de laje */
function nPavimentos(tipo: TipoEdificacao): number {
  return { terreo: 1, sobrado2: 2, sobrado3: 3 }[tipo];
}

/** Sobrecarga de utilização (kN/m²) — NBR 6120:2019 Tab. 1 */
function sobrecarga(uso: UsoLaje): number {
  return { cobertura: 1.0, piso_residencial: 1.5, garagem: 3.0 }[uso];
}

/** Arredondar para cima ao múltiplo de n */
function ceil_n(valor: number, n: number): number {
  return Math.ceil(valor / n) * n;
}

/** Espessura comercial de laje pré-moldada imediatamente superior ao mínimo */
function espessuraComercial(hMin: number): number {
  // Série: 12, 16, 20, 25, 30 cm (vigota + tavela/EPS mais comuns no Brasil)
  for (const h of [12, 16, 20, 25, 30]) {
    if (h >= hMin) return h;
  }
  return 30;
}

/**
 * Seleciona seção padronizada de pilar (largura × altura em cm).
 * Série prática brasileira — múltiplos de 5cm, mínimo 20cm (NBR 6118 §15.7.1).
 */
function secaoPilar(acMin_cm2: number): [number, number] {
  const padroes: [number, number][] = [
    [20, 20], [20, 25], [20, 30], [25, 30],
    [25, 35], [30, 30], [30, 40], [35, 40],
    [40, 40], [40, 50], [50, 50],
  ];
  return padroes.find(([a, b]) => a * b >= acMin_cm2) ?? [50, 50];
}

// ── 1. LAJE ──────────────────────────────────────────────────────────────────

function calcularLaje(input: TebasInput): LajeResult {
  const q = sobrecarga(input.usoLaje);

  // NBR 6118:2023 §13.2.4 — laje pré-moldada:
  // Espessura mínima h ≥ L/25 (simplesmente apoiada — mais conservador)
  // A NBR prescreve L/25 para sistema unidirecional apoiado em vigas.
  const hMin = Math.ceil((input.vao * 100) / 25); // cm
  const h = espessuraComercial(hMin);

  // Vigota: altura total menos o capeamento
  const capeamento = h <= 16 ? 3 : 4; // cm (mín. 3cm NBR 6118 §13.2.4.1)
  const hVigota = h - capeamento;

  return {
    tipo: 'Pré-moldada vigota + tavela cerâmica/EPS',
    espessura: h,
    descricao: `Vigota h=${hVigota} cm + tavela + capeamento ${capeamento} cm`,
    capeamento,
    malha: 'CA-60 φ4,2 c/15×15 cm (malha soldada — armadura de distribuição)',
    escoramento: `Escoras a cada 1,5 m. Desescora após cura: ≥ 21 dias e fck ≥ 25 MPa`,
    sobrecarga: q,
    hMinCalc: hMin,
    norma: [
      `NBR 6118:2023 §13.2.4 — h_min = L/25 = ${(input.vao * 100 / 25).toFixed(1)} cm`,
      `→ adotado ${h} cm (série comercial)`,
      `NBR 6120:2019 Tab. 1 — q = ${q} kN/m² (uso: ${input.usoLaje.replace('_', ' ')})`,
    ].join(' | '),
  };
}

// ── 2. VIGA ──────────────────────────────────────────────────────────────────

function calcularViga(input: TebasInput, laje: LajeResult): VigaResult {
  const fcdVal = fcd(input.concreto); // MPa
  const q = sobrecarga(input.usoLaje);

  // Vão de dimensionamento = maior vão livre da laje (já informado pelo usuário).
  // √(área) é usado apenas em calcularAco para estimar comprimento total de vigas na planta —
  // coisa diferente do vão de dimensionamento de uma seção individual.
  const LViga = input.vao; // m

  // Pré-dimensionamento (NBR 6118 §14.4 — prática de projeto):
  // h ≈ L/10 para viga de pórtico engastada; mínimo = h_laje + 5 cm
  const hMin = Math.max(
    ceil_n(Math.ceil((LViga / 10) * 100), 5),
    laje.espessura + 5
  );
  const h = hMin; // cm

  // Largura: bw ≈ h/2 para vãos residenciais (≤ 6 m), mínimo 14 cm.
  // Garante espaçamento mínimo entre barras φ16 em uma fila.
  const bw = Math.max(ceil_n(Math.ceil(h / 2), 5), 14); // cm

  // Altura útil d (cobrimento nominal 3,5 cm + estribo φ6,3 + barra φ16/2 ≈ 5 cm total)
  const d = (h - 5); // cm

  // ── Carregamento na viga ──
  // Modelo: viga de borda (cenário típico residencial) — recolhe laje de um só lado.
  // bTrib = L_laje / 2 (meia largura do painel de laje).
  // Obs: viga interna teria bTrib = L_laje (carga dobrada); o projetista
  //      deve verificar esse caso se houver vigas internas no projeto.
  const bTrib = input.vao / 2; // m — viga de borda (metade do vão de laje)

  // Carga permanente:
  //   peso próprio laje ~GAMMA_CA × h_laje/100 ≈ 25 × 0,16 = 4 kN/m²
  //   revestimento (contrapiso + cerâmica): 1,2 kN/m²
  //   alvenaria equivalente distribuída: 1,5 kN/m²  → total gk ≈ 6,7 kN/m²
  const gkLaje = GAMMA_CA * (laje.espessura / 100) + 1.2 + 1.5; // kN/m²
  const qkLaje = q; // kN/m²

  // Carga linear na viga (kN/m), incluindo peso próprio da viga
  const gkViga = GAMMA_CA * (bw / 100) * ((h - laje.espessura) / 100); // kN/m (nervura abaixo da laje)
  const wk = (gkLaje + qkLaje) * bTrib + gkViga; // kN/m
  const wd = GAMMA_F * wk; // kN/m (ELU)

  // Momento de cálculo — apoio simples (conservador para pré-dimensionamento)
  const Md = (wd * LViga * LViga) / 8; // kN.m

  // Armadura de tração (seção retangular, z ≈ 0,9d — válido para kMd < 0,259)
  // As = Md / (fyd × z) onde z = 0,9d
  const dMm = d * 10; // mm
  const MdNmm = Md * 1e6; // N.mm
  const asCalc = MdNmm / (FYD * 0.9 * dMm); // mm²
  const asCalcCm2 = asCalc / 100; // cm²

  // Armadura mínima: ρ_min = 0,26 × fctm/fyk (NBR 6118 Tab. 17.3)
  const fctm = 0.3 * Math.pow(fck(input.concreto), 2 / 3); // MPa
  const rhoMin = 0.26 * (fctm / FYK);
  const asMin = rhoMin * bw * d; // cm²

  const asAdot = Math.max(asCalcCm2, asMin);

  // ── Seleção de bitola CA-50 ──────────────────────────────────────────────────
  // Percorre do menor para o maior diâmetro e escolhe o primeiro que caiba
  // numa única fila dentro da largura útil da viga.
  // Critério de encaixe (NBR 6118 §18.3.2.2):
  //   espaçamento mínimo = max(d_barra, 25 mm)
  //   cobrimento + estribo φ6,3 ≈ 31,3 mm de cada lado
  const BITOLAS_CA50 = [10, 12.5, 16, 20, 25]; // mm
  const coverMm = 25 + 6.3; // ≈ 31,3 mm (cada face)
  const availWidthMm = bw * 10 - 2 * coverMm; // mm disponível para barras

  let selDiam = 16;
  let selN    = Math.ceil(asAdot / 2.011); // fallback φ16
  let selArea = selN * 2.011;

  for (const dia of BITOLAS_CA50) {
    const aBarCm2   = (Math.PI / 4) * (dia / 10) ** 2; // cm²/barra
    const nNeeded   = Math.ceil(asAdot / aBarCm2);
    const espcMin   = Math.max(dia, 25);                // mm entre faces
    const reqWidth  = nNeeded * dia + (nNeeded - 1) * espcMin; // mm
    if (reqWidth <= availWidthMm) {
      selDiam = dia;
      selN    = nNeeded;
      selArea = nNeeded * aBarCm2;
      break;
    }
  }

  const dStrBar = selDiam % 1 !== 0
    ? selDiam.toFixed(1).replace('.', ',')
    : String(selDiam);
  const armStr = `${selN}φ${dStrBar} mm (As = ${selArea.toFixed(2)} cm²)`;

  // Estribos: φ6,3 mm (A_w = 0,31 cm²) — espaçamento simplificado
  const sMaxEstribo = Math.min(0.6 * d, 30); // cm (NBR 6118 §18.3.3.2)
  const estribosStr = `φ6,3 c/${ceil_n(Math.floor(sMaxEstribo), 5)} cm nas extremidades · c/20 cm no centro`;

  return {
    largura: bw,
    altura: h,
    dUtil: d,
    armaduraTracao: armStr,
    armaduraMin: parseFloat(asMin.toFixed(2)),
    asCalculado: parseFloat(asCalcCm2.toFixed(2)),
    estribos: estribosStr,
    momentoCalculo: parseFloat(Md.toFixed(1)),
    vaoEstimado: parseFloat(LViga.toFixed(1)),
    nBarrasTracao: selN,
    diametroTracao: selDiam,
    norma: [
      `NBR 6118:2023 §14.4 — h ≥ L/10 = ${(LViga / 10 * 100).toFixed(0)} cm → adotado ${h} cm`,
      `Viga de borda: bTrib = L/2 = ${bTrib.toFixed(1)} m · Md = ${Md.toFixed(1)} kN.m`,
      `As_calc = ${asCalcCm2.toFixed(2)} cm² · As_min = ${asMin.toFixed(2)} cm² → ${armStr}`,
    ].join(' | '),
  };
}

// ── 3. PILAR ─────────────────────────────────────────────────────────────────

function calcularPilar(input: TebasInput, _viga: VigaResult): PilarResult {
  const fcdVal = fcd(input.concreto); // MPa
  const nPav = nPavimentos(input.tipo);
  const q = sobrecarga(input.usoLaje);

  // Área tributária por pilar:
  // Estimativa: grelha regular com espaçamento ≈ √área / 3
  // (3 vãos por direção = 4 pilares por frente para uma planta quadrada)
  //
  // LIMITE SUPERIOR: o espaçamento entre pilares NUNCA pode exceder o vão
  // declarado pelo usuário — se a laje vence 4 m, os pilares não podem
  // estar a 7 m de distância. Sem este limite, edificações grandes com vão
  // pequeno produzem nPilares artificialmente fixo em 9 (√A/3 sempre dá aTrib≈A/9).
  const espacamento = Math.max(
    Math.min(input.vao, Math.sqrt(input.area) / 3),
    3.0
  ); // m
  const aTrib = espacamento * espacamento; // m²

  // Carga permanente por pavimento (estimativa global kN/m²):
  //   Laje + viga + revestimentos: ≈ 6,0 kN/m²
  //   Alvenaria equivalente distribuída: ≈ 1,5 kN/m²
  //   Total gk = 7,5 kN/m²
  const gk = 7.5; // kN/m²

  // Carga axial característica (todos os pavimentos)
  const Nk = (gk + q) * aTrib * nPav; // kN

  // Carga de cálculo (ELU) com coeficiente simplificado
  const Nd = GAMMA_F * Nk; // kN

  // Área de concreto mínima — NBR 6118:2023 §17.6.3.3 (compressão com exc. mínima):
  // NRd = 0,80 × (αv2 × fcd × Ac + fyd × As)
  //
  //   αv2 = 1 − fck/250  (coeficiente de ductilidade — reduz resistência efetiva do concreto)
  //   0,80 = fator de redução por excentricidade mínima obrigatória (e_min = h/30 ≥ 2 cm)
  //
  // Assumindo ρ = 2% (taxa usual em edificações residenciais)
  const rho = 0.02;
  const alphav2 = 1 - fck(input.concreto) / 250; // ex: C25 → αv2 = 0,90
  // NRd = Ac × 0,80 × (αv2 × fcd + ρ × fyd)
  // Ac [cm²] = Nd [kN] × 10 / [0,80 × (αv2 × fcd + ρ × fyd)]
  // (conversão: 1 kN = 1000 N; 1 MPa × cm² = 100 N)
  const capacidade = 0.80 * (alphav2 * fcdVal + rho * FYD); // MPa
  const acMin = (Nd * 10) / capacidade; // cm²

  // Seção padronizada
  const [bPilar, hPilar] = secaoPilar(acMin);

  // Armadura adotada
  const asAdot = rho * bPilar * hPilar; // cm²
  // Série de barras: [Área cm², label, nBarras, diâmetro mm]
  let armStr: string;
  const barras: Array<[number, string, number, number]> = [
    [4.91,  '4φ12,5 mm', 4, 12.5],
    [8.04,  '4φ16 mm',   4, 16  ],
    [12.57, '4φ20 mm',   4, 20  ],
    [20.11, '4φ25 mm',   4, 25  ],
  ];
  const barra = barras.find(([as]) => as >= asAdot);
  if (barra) {
    armStr = `${barra[1]} (As = ${barra[0].toFixed(2)} cm²)`;
  } else {
    armStr = `${asAdot.toFixed(1)} cm² — verificar com projetista`;
  }

  // Verificação indicativa de esbeltez (NBR 6118:2023 §11.5)
  // le = 0,7 × h_pav (engastado-articulado, estimativa para edificação corrente)
  // i  = menorDim / √12  (raio de giração da seção retangular)
  const hPavEst = 3.0; // m — altura de piso estimada
  const le_mm   = 0.7 * hPavEst * 1000; // mm
  const i_mm    = (Math.min(bPilar, hPilar) * 10) / Math.sqrt(12); // mm
  const lambda   = parseFloat((le_mm / i_mm).toFixed(1));
  const avEsb    = lambda > 35
    ? `⚠ λ ≈ ${lambda} > 35 — pilar de esbeltez MÉDIA: verificar 2ª ordem com projetista`
    : `λ ≈ ${lambda} ≤ 35 — pilar curto (2ª ordem desprezível)`;

  return {
    largura: bPilar,
    altura: hPilar,
    armadura: armStr,
    asAdotado: parseFloat(asAdot.toFixed(2)),
    taxaArmadura: rho * 100,
    cargaCalculo: parseFloat(Nd.toFixed(0)),
    areaTributaria: parseFloat(aTrib.toFixed(1)),
    acMin: parseFloat(acMin.toFixed(1)),
    nBarrasLongitudinal: barra ? barra[2] : 4,
    diametroLongitudinal: barra ? barra[3] : 25,
    norma: [
      `NBR 6118:2023 §17.6.3.3 — Nd = ${Nd.toFixed(0)} kN · αv2 = ${alphav2.toFixed(2)}`,
      `A_trib = ${aTrib.toFixed(1)} m² · ${nPav} pav.`,
      `Ac_min = ${acMin.toFixed(1)} cm² → seção ${bPilar}×${hPilar} cm`,
      `Seção mínima 20 cm (NBR 6118 §15.7.1)`,
      avEsb,
    ].join(' | '),
  };
}

// ── 4. SAPATA ────────────────────────────────────────────────────────────────

function calcularSapata(input: TebasInput, pilar: PilarResult): SapataResult {
  const sptUsado = input.temSpt ? input.spt : 5;

  // Tensão admissível do solo (kN/m²) — método simplificado Décourt-Quaresma
  // σ_adm ≈ 13 × NSPT para solos finos (NBR 6122:2019 informativo)
  // Limitar a 300 kN/m² (evitar sub-estimativa em solos muito resistentes)
  const sigmaAdm = Math.min(13 * sptUsado, 300); // kN/m²

  // Carga de serviço no pilar (volta ao valor característico)
  const Nk = pilar.cargaCalculo / GAMMA_F; // kN

  // Área necessária da sapata
  const aNec = Nk / sigmaAdm; // m²

  // Dimensão da sapata (quadrada)
  const ladoCalc = Math.sqrt(aNec); // m
  // Mínimo: 0,30 m além de cada face do pilar
  const ladoMin = pilar.largura / 100 + 0.60; // m
  const lado = Math.max(
    Math.ceil(Math.max(ladoCalc, ladoMin) * 20) / 20,
    0.60
  ); // m — arredondado para 5 cm

  // Altura mínima da sapata (NBR 6118:2023 §22.6.1):
  // h ≥ d_estaca/2 (para bloco), mas para sapata isolada:
  // Regra prática: h ≥ (L_sapata - L_pilar) / 4 ≥ 20 cm
  const hMin = Math.max((lado - pilar.largura / 100) / 4, 0.20); // m
  const h = Math.ceil(hMin * 20) / 20; // arredondado para 5 cm

  return {
    lado,
    altura: h,
    armadura: `CA-50 φ10 c/15 cm (ambas as direções) — verificar com calculista`,
    sigmaAdm,
    areaNecess: parseFloat(aNec.toFixed(2)),
    sptUsado,
    norma: [
      `NBR 6122:2019 §8.3 — σ_adm = 13×NSPT = ${sigmaAdm} kN/m² (NSPT=${sptUsado})`,
      `Correlação válida para solos finos (argilas/siltes) — solos arenosos exigem laudo geotécnico específico`,
      `Área = ${aNec.toFixed(2)} m² → L = ${lado.toFixed(2)} m`,
      `h ≥ (L−b)/4 = ${h.toFixed(2)} m (biela rígida — NBR 6118 §22.6.1)`,
      input.temSpt ? '' : '⚠ SPT não informado — SPT=5 (conservador)',
    ].filter(Boolean).join(' | '),
  };
}

// ── 5. RESUMO DE AÇO (estimativa para projeção de custo) ─────────────────────

/**
 * Peso linear (kg/m) de vergalhão por diâmetro nominal d (mm).
 * Fórmula: ρ = (π/4 × d²) × γ_aço = (π/4 × d²) × 7,85×10⁻³ kg/mm²/m
 * Verificação: φ16 → π/4 × 256 × 7,85e-3 = 1,578 kg/m ✓ (tabela CA-50)
 */
function kgPorMetro(d: number): number {
  return (Math.PI / 4) * d * d * 7.85e-3; // kg/m
}

/**
 * Estima as quantidades de aço por elemento para orçamento preliminar.
 *
 * Modelo simplificado de grelha:
 *   - Total de vigas por pavimento ≈ 6 × √área (perímetro 4√A + ~2 vigas internas)
 *   - Nº de pilares ≈ área / areaTributária, mínimo 4
 *   - Altura de pavimento padrão: 3,0 m
 *
 * Tolerância esperada: ±30–40%. Destina-se exclusivamente a estudo de viabilidade.
 */
export function calcularAco(resultado: TebasResult): AcoResult {
  const { input, laje, viga, pilar, sapata } = resultado;
  const nPav = nPavimentos(input.tipo);

  // Número estimado de pilares (planta regular — grelha quadrada)
  //
  // O espaçamento entre pilares é √(areaTributaria). Para cobrir a edificação
  // precisamos de ceil(L/s) VÃOS em cada direção, logo (vãos+1) PILARES por lado.
  //
  // Fórmula correta: nPilares = (ceil(√(área/aTrib)) + 1)²
  //
  // ERRO histórico: round(área/aTrib) conta vãos², não pilares.
  // Exemplo: 500 m², aTrib=16 → round(31,25)=31 pilares, mas a grelha tem
  // ceil(5,59)=6 vãos → 7 pilares por lado → 49 pilares.
  // Com 31 pilares a distância real entre eles seria 22,4/5,57≈4,89 m > vão
  // declarado → parte da laje ficaria em balanço sem apoio.
  const nBays    = Math.ceil(Math.sqrt(input.area / pilar.areaTributaria));
  const nPilares = Math.max((nBays + 1) ** 2, 4);

  // Altura padrão de pavimento (piso-a-piso, inclui viga)
  const hPav = 3.0; // m

  // Comprimento total de vigas por pavimento: 6 × √A (perímetro + vigas internas)
  const L_vigas_pav = 6.0 * Math.sqrt(input.area); // m/pav
  const L_vigas_tot = L_vigas_pav * nPav;           // m total

  // ─── Laje — malha soldada CA-60 φ4,2 c/15×15 cm ────────────────────────────
  const dMalha = 4.2;    // mm
  const espc  = 0.15;    // m
  // Peso bidirecional por m²: 2 × (1/0,15) × kg/m = ~1,45 kg/m²
  const kgM2_laje       = 2 * (1 / espc) * kgPorMetro(dMalha);
  const areaLajeTot     = input.area * nPav;         // m²
  const comprLaje       = areaLajeTot * 2 / espc;    // m lineares
  const pesoLaje        = areaLajeTot * kgM2_laje * 1.10; // +10% emendas

  // ─── Viga — tração (bitola fixa φ16 CA-50) ──────────────────────────────────
  // Allow. ganchos: 0,8 m por extremidade → ratio = 1 + 1,6/vão
  const hookRatio       = 1 + 1.6 / viga.vaoEstimado;
  const comprTracao     = viga.nBarrasTracao * hookRatio * L_vigas_tot; // m lineares
  const pesoVigaTracao  = comprTracao * kgPorMetro(viga.diametroTracao);

  // ─── Viga — estribos φ6,3 CA-50 ─────────────────────────────────────────────
  // Perímetro do estribo = nervura abaixo da laje (h - espessura_laje) + bw + ganchos
  const hNerv_cm        = viga.altura - laje.espessura; // cm
  const perimEstrV_m    = 2 * (viga.largura + hNerv_cm) / 100 + 0.12; // m
  const sEstrV          = 0.18; // m — espaçamento médio (extremos ~15 cm, centro ~20 cm)
  const nEstrV          = L_vigas_tot / sEstrV;
  const comprEstrV      = nEstrV * perimEstrV_m;
  const pesoVigaEstr    = comprEstrV * kgPorMetro(6.3);

  // ─── Pilar — longitudinal ────────────────────────────────────────────────────
  // +15% para emendas e ancoragem nas fundações/lajes
  const comprLongPilar  = pilar.nBarrasLongitudinal * nPilares * nPav * hPav * 1.15;
  const pesoPilarLong   = comprLongPilar * kgPorMetro(pilar.diametroLongitudinal);

  // ─── Pilar — estribos φ6,3 CA-50 ────────────────────────────────────────────
  const perimEstrP_m    = 2 * (pilar.largura + pilar.altura) / 100 + 0.12; // m
  const sEstrP_m        = Math.min(pilar.largura, 20) / 100; // ≤ menor dim. seção, ≤ 20 cm
  const nEstrP          = nPilares * nPav * hPav / sEstrP_m;
  const comprEstrP      = nEstrP * perimEstrP_m;
  const pesoPilarEstr   = comprEstrP * kgPorMetro(6.3);

  // ─── Sapata — malha φ10 CA-50 c/15 cm ──────────────────────────────────────
  const dSap            = 10; // mm
  const kgM2_sap        = 2 * (1 / espc) * kgPorMetro(dSap); // ~8,23 kg/m²
  const areaUmaSap      = sapata.lado * sapata.lado; // m²
  const comprSap        = nPilares * areaUmaSap * 2 / espc; // m lineares
  const pesoSap         = nPilares * areaUmaSap * kgM2_sap * 1.10; // +10% emendas

  // ─── Helpers de formatação ───────────────────────────────────────────────────
  const arred = (n: number) => Math.round(n);
  const dStr  = (d: number) =>
    d % 1 !== 0 ? d.toFixed(1).replace('.', ',') : String(d);

  // ─── Montar linhas ───────────────────────────────────────────────────────────
  const linhas: AcoLinha[] = [
    {
      elemento:         `Laje (${nPav} pav.)`,
      bitola:           'φ4,2 CA-60',
      diametro:         4.2,
      comprimentoTotal: arred(comprLaje),
      pesoKg:           arred(pesoLaje),
      descricao:        `Tela Q-92 · ${areaLajeTot} m² · c/15×15 cm (+10%)`,
    },
    {
      elemento:         `Viga (${nPav} pav.)`,
      bitola:           `φ${dStr(viga.diametroTracao)} CA-50`,
      diametro:         viga.diametroTracao,
      comprimentoTotal: arred(comprTracao),
      pesoKg:           arred(pesoVigaTracao),
      descricao: `${viga.nBarrasTracao} barras/seção · ~${arred(L_vigas_pav)} m viga/pav.`,
    },
    {
      elemento:         `Viga (${nPav} pav.)`,
      bitola:           'φ6,3 CA-50',
      diametro:         6.3,
      comprimentoTotal: arred(comprEstrV),
      pesoKg:           arred(pesoVigaEstr),
      descricao:        `Estribos c/18 cm méd. · ${arred(nEstrV)} uni.`,
    },
    {
      elemento:         `Pilar (${nPav} pav.)`,
      bitola:           `φ${dStr(pilar.diametroLongitudinal)} CA-50`,
      diametro:         pilar.diametroLongitudinal,
      comprimentoTotal: arred(comprLongPilar),
      pesoKg:           arred(pesoPilarLong),
      descricao: `${pilar.nBarrasLongitudinal} barras/pilar · ${nPilares} pilares`,
    },
    {
      elemento:         `Pilar (${nPav} pav.)`,
      bitola:           'φ6,3 CA-50',
      diametro:         6.3,
      comprimentoTotal: arred(comprEstrP),
      pesoKg:           arred(pesoPilarEstr),
      descricao: `Estribos c/${arred(sEstrP_m * 100)} cm · ${arred(nEstrP)} uni.`,
    },
    {
      elemento:         'Sapata (fund.)',
      bitola:           'φ10 CA-50',
      diametro:         10,
      comprimentoTotal: arred(comprSap),
      pesoKg:           arred(pesoSap),
      descricao: `${nPilares} sap. ${sapata.lado.toFixed(2)}×${sapata.lado.toFixed(2)} m`,
    },
  ];

  // ─── Agrupar por bitola ──────────────────────────────────────────────────────
  const bitolaMap = new Map<string, { diametro: number; pesoKg: number }>();
  for (const l of linhas) {
    const cur = bitolaMap.get(l.bitola);
    if (cur) cur.pesoKg += l.pesoKg;
    else bitolaMap.set(l.bitola, { diametro: l.diametro, pesoKg: l.pesoKg });
  }

  const totalKg = linhas.reduce((s, l) => s + l.pesoKg, 0);

  const porBitola: AcoBitola[] = Array.from(bitolaMap.entries())
    .map(([bitola, v]) => ({
      bitola,
      diametro:   v.diametro,
      pesoKg:     v.pesoKg,
      percentual: Math.round((v.pesoKg / totalKg) * 100),
    }))
    .sort((a, b) => a.diametro - b.diametro);

  return { linhas, porBitola, totalKg, nPavimentos: nPav, nPilares };
}

// ── Motor principal ───────────────────────────────────────────────────────────

export function calcular(input: TebasInput): TebasResult {
  const laje = calcularLaje(input);
  const viga = calcularViga(input, laje);
  const pilar = calcularPilar(input, viga);
  const sapata = calcularSapata(input, pilar);

  return {
    input,
    laje,
    viga,
    pilar,
    sapata,
    geradoEm: new Date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
  };
}
