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

  // Vão estimado da viga principal ≈ √(área) — estimativa da maior dimensão
  const LViga = Math.sqrt(input.area); // m

  // Pré-dimensionamento (NBR 6118 §14.4 — prática de projeto):
  // h ≈ L/10 para viga de pórtico engastada; mínimo = h_laje + 5 cm
  const hMin = Math.max(
    ceil_n(Math.ceil((LViga / 10) * 100), 5),
    laje.espessura + 5
  );
  const h = hMin; // cm

  // Largura: bw ≈ h/3, mínimo 12 cm (NBR 6118 §17.3.1)
  const bw = Math.max(ceil_n(Math.ceil(h / 3), 5), 12); // cm

  // Altura útil d (cobrimento nominal 3,5 cm + estribo φ6,3 + barra φ16/2 ≈ 5 cm total)
  const d = (h - 5); // cm

  // ── Carregamento na viga ──
  // Largura tributária de laje: considera dois painéis de laje (um de cada lado)
  // bTrib ≈ vão da laje / 2 (cada painel apoia metade na viga)
  const bTrib = input.vao / 2; // m

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
  // Unidades: Md [kN.m] = Md × 10^3 [N.m] = Md × 10^6 [N.mm]
  //           fyd [MPa] = [N/mm²], d [mm] = d_cm × 10
  const dMm = d * 10; // mm
  const MdNmm = Md * 1e6; // N.mm
  const asCalc = MdNmm / (FYD * 0.9 * dMm); // mm²
  const asCalcCm2 = asCalc / 100; // cm²

  // Armadura mínima: ρ_min = 0,26 × fctm/fyk (NBR 6118 Tab. 17.3)
  // fctm = 0,3 × fck^(2/3) para C20-C50
  const fctm = 0.3 * Math.pow(fck(input.concreto), 2 / 3); // MPa
  const rhoMin = 0.26 * (fctm / FYK);
  const asMin = rhoMin * bw * d; // cm² (bw e d em cm)

  const asAdot = Math.max(asCalcCm2, asMin);

  // Seleção de barras CA-50 φ16 mm (área unitária = 2,01 cm²)
  const nBarras = Math.ceil(asAdot / 2.01);
  const asReal = nBarras * 2.01;
  const armStr = `${nBarras}φ16 mm (As = ${asReal.toFixed(2)} cm²)`;

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
    norma: [
      `NBR 6118:2023 §14.4 — h ≥ L/10 = ${(LViga / 10 * 100).toFixed(0)} cm → adotado ${h} cm`,
      `Md = ${Md.toFixed(1)} kN.m`,
      `As_calc = ${asCalcCm2.toFixed(2)} cm² · As_min = ${asMin.toFixed(2)} cm²`,
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
  const espacamento = Math.max(Math.sqrt(input.area) / 3, 3.0); // m
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

  // Área de concreto mínima (pilar curto, compressão centrada + exc. mínima):
  // NRd = 0,85 × fcd × Ac + fyd × As
  // Assumindo ρ = 2% (taxa usual em edificações residenciais)
  const rho = 0.02;
  // NRd = Ac × (0,85 × fcd + ρ × fyd)  [fcd, fyd em MPa]
  // Ac [cm²] = Nd [kN] × 10 / (0,85 × fcd + ρ × fyd)
  // (conversão: 1 kN = 1000 N; 1 MPa × cm² = 100 N → Nd_N = Nd_kN × 1000; fcd_Ncm2 = fcd_MPa × 100)
  // Ac = Nd×1000 / [(0,85×fcd + ρ×fyd)×100] = Nd×10 / (0,85×fcd + ρ×fyd)
  const capacidade = 0.85 * fcdVal + rho * FYD; // MPa
  const acMin = (Nd * 10) / capacidade; // cm²

  // Seção padronizada
  const [bPilar, hPilar] = secaoPilar(acMin);

  // Armadura adotada
  const asAdot = rho * bPilar * hPilar; // cm²
  // Série de barras: 4 barras φ12,5 = 4,91 cm² / 4φ16 = 8,04 / 4φ20 = 12,57
  let armStr: string;
  const barras: Array<[number, string]> = [
    [4.91, '4φ12,5 mm'],
    [8.04, '4φ16 mm'],
    [12.57, '4φ20 mm'],
    [20.11, '4φ25 mm'],
  ];
  const barra = barras.find(([as]) => as >= asAdot);
  if (barra) {
    armStr = `${barra[1]} (As = ${barra[0].toFixed(2)} cm²)`;
  } else {
    armStr = `${asAdot.toFixed(1)} cm² — verificar com projetista`;
  }

  return {
    largura: bPilar,
    altura: hPilar,
    armadura: armStr,
    asAdotado: parseFloat(asAdot.toFixed(2)),
    taxaArmadura: rho * 100,
    cargaCalculo: parseFloat(Nd.toFixed(0)),
    areaTributaria: parseFloat(aTrib.toFixed(1)),
    acMin: parseFloat(acMin.toFixed(1)),
    norma: [
      `NBR 6118:2023 §15 — Nd = ${Nd.toFixed(0)} kN`,
      `A_trib = ${aTrib.toFixed(1)} m² · ${nPav} pav.`,
      `Ac_min = ${acMin.toFixed(1)} cm² → seção ${bPilar}×${hPilar} cm`,
      `Seção mínima 20 cm (NBR 6118 §15.7.1)`,
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
      `Área = ${aNec.toFixed(2)} m² → L = ${lado.toFixed(2)} m`,
      `h = ${h.toFixed(2)} m`,
      input.temSpt ? '' : '⚠ SPT não informado — SPT=5 (conservador)',
    ].filter(Boolean).join(' | '),
  };
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
