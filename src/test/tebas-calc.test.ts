/**
 * Tebas — Suite de Auditoria NBR
 * ─────────────────────────────────────────────────────────────────────────────
 * Testa o motor de cálculo tebas-calc.ts contra os valores calculados
 * manualmente conforme NBR 6118:2023, NBR 6120:2019 e NBR 6122:2019.
 *
 * Tolerâncias:
 *   - Valores contínuos (Md, Nd, As...): ± 1% por arredondamentos internos
 *   - Valores discretos (seção, série de barras): igualdade exata
 *   - Invariantes estruturais: teste de sinal (>, >=, etc.)
 */

import { describe, it, expect } from 'vitest';
import { calcular, calcularAco } from '../lib/tebas-calc';
import type { TebasInput } from '../lib/tebas-types';

// ─── Casos de entrada representativos ───────────────────────────────────────

/** Caso base: casa térrea pequena (memoizado do backtest manual) */
const BASE: TebasInput = {
  tipo: 'terreo',
  area: 80,
  vao: 4,
  concreto: 'C25',
  usoLaje: 'piso_residencial',
  temSpt: true,
  spt: 5,
};

/** Sobrado 2 pavimentos, área média */
const SOBRADO2: TebasInput = {
  tipo: 'sobrado2',
  area: 120,
  vao: 4.5,
  concreto: 'C25',
  usoLaje: 'piso_residencial',
  temSpt: true,
  spt: 8,
};

/** Sobrado 3 pavimentos, área grande */
const SOBRADO3: TebasInput = {
  tipo: 'sobrado3',
  area: 200,
  vao: 5,
  concreto: 'C30',
  usoLaje: 'piso_residencial',
  temSpt: true,
  spt: 12,
};

/** Cobertura leve, vão curto */
const COBERTURA: TebasInput = {
  tipo: 'terreo',
  area: 60,
  vao: 3,
  concreto: 'C20',
  usoLaje: 'cobertura',
  temSpt: true,
  spt: 6,
};

/** Garagem com sobrecarga pesada */
const GARAGEM: TebasInput = {
  tipo: 'terreo',
  area: 40,
  vao: 5,
  concreto: 'C30',
  usoLaje: 'garagem',
  temSpt: true,
  spt: 10,
};

/** REGRESSÃO: edificação grande com vão pequeno — bug dos 9 pilares fixos */
const GRANDE_VAO_PEQUENO: TebasInput = {
  tipo: 'sobrado2',
  area: 500,
  vao: 4,
  concreto: 'C25',
  usoLaje: 'piso_residencial',
  temSpt: true,
  spt: 10,
};

/** SPT não informado — deve usar fallback conservador */
const SEM_SPT: TebasInput = {
  tipo: 'terreo',
  area: 80,
  vao: 4,
  concreto: 'C25',
  usoLaje: 'piso_residencial',
  temSpt: false,
  spt: 0,
};

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Verifica se `value` está dentro de `±tol%` do esperado */
function approx(value: number, expected: number, tolPct = 1.5): boolean {
  if (expected === 0) return Math.abs(value) < 0.01;
  return Math.abs(value - expected) / Math.abs(expected) < tolPct / 100;
}

// ════════════════════════════════════════════════════════════════════════════
// 1. LAJE
// ════════════════════════════════════════════════════════════════════════════

describe('calcularLaje', () => {

  it('espessura mínima = ceil(L/25) arredondada para cima (cm)', () => {
    // vão 4m → hMin = ceil(400/25) = 16 cm
    const r = calcular(BASE);
    expect(r.laje.hMinCalc).toBe(16);
    expect(r.laje.espessura).toBe(16);
  });

  it('série comercial — vão 3 m → h=12 cm', () => {
    // hMin = ceil(300/25) = 12 → espessuraComercial(12) = 12
    const r = calcular(COBERTURA);
    expect(r.laje.hMinCalc).toBe(12);
    expect(r.laje.espessura).toBe(12);
  });

  it('série comercial — vão 5 m → h=20 cm', () => {
    // hMin = ceil(500/25) = 20 → espessuraComercial(20) = 20
    const r = calcular(GARAGEM);
    expect(r.laje.hMinCalc).toBe(20);
    expect(r.laje.espessura).toBe(20);
  });

  it('série comercial — vão 4,5 m → h=20 cm', () => {
    // hMin = ceil(450/25) = 18 → espessuraComercial(18) = 20
    const r = calcular(SOBRADO2);
    expect(r.laje.hMinCalc).toBe(18);
    expect(r.laje.espessura).toBe(20);
  });

  it('capeamento 3 cm para h ≤ 16 cm', () => {
    const r = calcular(BASE); // h=16
    expect(r.laje.capeamento).toBe(3);
  });

  it('capeamento 4 cm para h > 16 cm', () => {
    const r = calcular(SOBRADO2); // h=20
    expect(r.laje.capeamento).toBe(4);
  });

  it('sobrecarga cobertura = 1,0 kN/m²', () => {
    const r = calcular(COBERTURA);
    expect(r.laje.sobrecarga).toBe(1.0);
  });

  it('sobrecarga piso residencial = 1,5 kN/m²', () => {
    const r = calcular(BASE);
    expect(r.laje.sobrecarga).toBe(1.5);
  });

  it('sobrecarga garagem = 3,0 kN/m²', () => {
    const r = calcular(GARAGEM);
    expect(r.laje.sobrecarga).toBe(3.0);
  });

  it('invariante: hMinCalc ≤ espessura', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      expect(r.laje.espessura).toBeGreaterThanOrEqual(r.laje.hMinCalc);
    }
  });

  it('invariante: espessura ∈ {12, 16, 20, 25, 30}', () => {
    const comerciais = [12, 16, 20, 25, 30];
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      expect(comerciais).toContain(r.laje.espessura);
    }
  });
});

// ════════════════════════════════════════════════════════════════════════════
// 2. VIGA
// ════════════════════════════════════════════════════════════════════════════

describe('calcularViga', () => {

  it('geometria: h ≥ L/10 × 100 (cm), múltiplo de 5', () => {
    const r = calcular(BASE); // vão=4 → h ≥ 40 cm
    expect(r.viga.altura).toBeGreaterThanOrEqual(40);
    expect(r.viga.altura % 5).toBe(0);
  });

  it('geometria: h ≥ espessura_laje + 5 cm', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      expect(r.viga.altura).toBeGreaterThanOrEqual(r.laje.espessura + 5);
    }
  });

  it('geometria: bw ≥ 14 cm, múltiplo de 5', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      expect(r.viga.largura).toBeGreaterThanOrEqual(14);
      expect(r.viga.largura % 5).toBe(0);
    }
  });

  it('geometria: d = h - 5 cm (cobrimento + estribo)', () => {
    const r = calcular(BASE);
    expect(r.viga.dUtil).toBe(r.viga.altura - 5);
  });

  it('caso base: h=40, bw=20, d=35 cm — NBR 6118 §14.4', () => {
    const r = calcular(BASE);
    expect(r.viga.altura).toBe(40);
    expect(r.viga.largura).toBe(20);
    expect(r.viga.dUtil).toBe(35);
  });

  it('caso base: Md ≈ 49,3 kN.m (±1,5%)', () => {
    // Calculado manualmente: wd=24,64 kN/m → Md = 24,64×16/8 = 49,28 kN.m
    const r = calcular(BASE);
    expect(approx(r.viga.momentoCalculo, 49.28)).toBe(true);
  });

  it('caso base: barras de tração = 3φ12,5 CA-50', () => {
    // asCalc ≈ 3,60 cm², φ10 não cabe na largura → φ12,5 com 3 barras cabe
    const r = calcular(BASE);
    expect(r.viga.nBarrasTracao).toBe(3);
    expect(r.viga.diametroTracao).toBe(12.5);
  });

  it('invariante: As_calc ≥ As_min', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      const asAdot = r.viga.nBarrasTracao * (Math.PI / 4) * (r.viga.diametroTracao / 10) ** 2;
      expect(asAdot).toBeGreaterThanOrEqual(r.viga.armaduraMin - 0.01);
    }
  });

  it('invariante: bitola de tração ∈ {10, 12.5, 16, 20, 25} mm', () => {
    const bitolas = [10, 12.5, 16, 20, 25];
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      expect(bitolas).toContain(r.viga.diametroTracao);
    }
  });

  it('viga mais pesada com garagem (q=3,0) que com cobertura (q=1,0)', () => {
    const rGar = calcular(GARAGEM);  // vão=5, q=3
    const rCob = calcular(COBERTURA); // vão=3, q=1
    // vão maior + sobrecarga maior → momento maior
    expect(rGar.viga.momentoCalculo).toBeGreaterThan(rCob.viga.momentoCalculo);
  });

  it('Md escala com quadrado do vão (mesmo tipo/concreto/área)', () => {
    // vão 3m vs vão 5m: Md deveria aumentar (wd também muda, mas Md~L²)
    const r3 = calcular({ ...BASE, vao: 3 });
    const r5 = calcular({ ...BASE, vao: 5 });
    expect(r5.viga.momentoCalculo).toBeGreaterThan(r3.viga.momentoCalculo);
  });
});

// ════════════════════════════════════════════════════════════════════════════
// 3. PILAR
// ════════════════════════════════════════════════════════════════════════════

describe('calcularPilar', () => {

  it('caso base: seção 20×20 cm, 4φ16 CA-50', () => {
    const r = calcular(BASE);
    expect(r.pilar.largura).toBe(20);
    expect(r.pilar.altura).toBe(20);
    expect(r.pilar.nBarrasLongitudinal).toBe(4);
    expect(r.pilar.diametroLongitudinal).toBe(16);
  });

  it('caso base: Nd ≈ 113,4 kN (±1,5%)', () => {
    // Nk = (7,5+1,5)×9,0×1 = 81 kN → Nd = 1,4×81 = 113,4 kN
    const r = calcular(BASE);
    expect(approx(r.pilar.cargaCalculo, 113.4)).toBe(true);
  });

  it('caso base: aTrib = 9,0 m² (espacamento capped a vão=4→ max(min(4,2.98),3)=3.0 m)', () => {
    const r = calcular(BASE);
    expect(r.pilar.areaTributaria).toBeCloseTo(9.0, 0);
  });

  it('Nd escala com nPavimentos', () => {
    const r1 = calcular({ ...BASE, tipo: 'terreo' });
    const r2 = calcular({ ...BASE, tipo: 'sobrado2' });
    const r3 = calcular({ ...BASE, tipo: 'sobrado3' });
    // Nd ∝ nPav (aTrib idêntica, gk idêntica)
    expect(approx(r2.pilar.cargaCalculo / r1.pilar.cargaCalculo, 2.0, 2)).toBe(true);
    expect(approx(r3.pilar.cargaCalculo / r1.pilar.cargaCalculo, 3.0, 2)).toBe(true);
  });

  it('Nd escala com aTrib (área maior → pilar mais carregado)', () => {
    const r80  = calcular({ ...BASE, area: 80  });
    const r200 = calcular({ ...BASE, area: 200, vao: 6 }); // vão maior permite aTrib maior
    // area maior → (possivelmente) aTrib maior → Nd maior
    expect(r200.pilar.cargaCalculo).toBeGreaterThan(r80.pilar.cargaCalculo);
  });

  it('seção mínima: largura e altura ≥ 20 cm (NBR 6118 §15.7.1)', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      expect(r.pilar.largura).toBeGreaterThanOrEqual(20);
      expect(r.pilar.altura).toBeGreaterThanOrEqual(20);
    }
  });

  it('taxa de armadura = 2,0% (fixo no modelo)', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3]) {
      const r = calcular(inp);
      expect(r.pilar.taxaArmadura).toBeCloseTo(2.0, 1);
    }
  });

  it('invariante: asAdotado ≥ 0.4% × Ac (armadura mínima NBR 6118)', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      const acSection = r.pilar.largura * r.pilar.altura; // cm²
      const asMin04 = 0.004 * acSection; // 0,4% de Ac
      expect(r.pilar.asAdotado).toBeGreaterThanOrEqual(asMin04 - 0.01);
    }
  });

  it('REGRESSÃO — espacamento ≤ vão declarado', () => {
    // Antes do fix, para qualquer área grande, spacing = sqrt(A)/3 >> vão
    // → aTrib = A/9 (fixo), nPilares = 9 sempre
    // Depois do fix: spacing ≤ vão
    const r = calcular(GRANDE_VAO_PEQUENO); // area=500, vão=4
    // spacing = max(min(4, sqrt(500)/3), 3.0) = max(min(4, 7.45), 3.0) = 4.0
    // aTrib = 16, nPilares = max(round(500/16), 4) = 31
    expect(r.pilar.areaTributaria).toBeCloseTo(16.0, 0);
  });

  it('REGRESSÃO — 500 m² com vão=4 m: grelha correta = 49 pilares (não 9 nem 31)', () => {
    const r = calcular(GRANDE_VAO_PEQUENO);
    const aco = calcularAco(r);
    // Grelha 7×7: spacing=4m, aTrib=16, nBays=6 → (6+1)²=49
    expect(aco.nPilares).toBe(49);
  });
});

// ════════════════════════════════════════════════════════════════════════════
// 4. SAPATA
// ════════════════════════════════════════════════════════════════════════════

describe('calcularSapata', () => {

  it('σ_adm = 13 × NSPT (kN/m²)', () => {
    // SPT=5 → σ_adm = 65 kN/m²
    const r = calcular(BASE);
    expect(r.sapata.sigmaAdm).toBe(65);
  });

  it('σ_adm limitado a 300 kN/m² (solos muito rígidos)', () => {
    // SPT=25 → 13×25=325 > 300 → deve retornar 300
    const r = calcular({ ...BASE, spt: 25 });
    expect(r.sapata.sigmaAdm).toBe(300);
  });

  it('fallback SPT=5 quando temSpt=false', () => {
    const rSemSpt = calcular(SEM_SPT);
    const rComSpt5 = calcular({ ...SEM_SPT, temSpt: true, spt: 5 });
    expect(rSemSpt.sapata.sptUsado).toBe(5);
    expect(rSemSpt.sapata.lado).toBeCloseTo(rComSpt5.sapata.lado, 2);
  });

  it('caso base: lado = 1,15 m, altura = 0,25 m', () => {
    // Calculado manualmente: Nk=81 kN, σ=65, aNec=1.246 m², ladoCalc=1.116 m
    // ladoMin=0.80 m → lado=ceil(1.116×20)/20=1.15 m
    // hMin=max((1.15-0.20)/4, 0.20)=0.2375 → h=ceil(0.2375×20)/20=0.25 m
    const r = calcular(BASE);
    expect(r.sapata.lado).toBeCloseTo(1.15, 2);
    expect(r.sapata.altura).toBeCloseTo(0.25, 2);
  });

  it('solo fraco (SPT=3) → sapata maior que solo forte (SPT=15)', () => {
    const rFraco  = calcular({ ...BASE, spt: 3 });
    const rForte  = calcular({ ...BASE, spt: 15 });
    expect(rFraco.sapata.lado).toBeGreaterThan(rForte.sapata.lado);
  });

  it('pilar mais carregado (sobrado3) → sapata maior', () => {
    const r1 = calcular({ ...BASE, tipo: 'terreo' });
    const r3 = calcular({ ...BASE, tipo: 'sobrado3' });
    expect(r3.sapata.lado).toBeGreaterThan(r1.sapata.lado);
  });

  it('lado mínimo = pilarLargura/100 + 0,60 m', () => {
    // Para o caso base: pilar 20cm → ladoMin = 0.20 + 0.60 = 0.80 m
    const r = calcular(BASE);
    const ladoMin = r.pilar.largura / 100 + 0.60;
    expect(r.sapata.lado).toBeGreaterThanOrEqual(ladoMin - 0.001);
  });

  it('invariante: area_adotada ≥ area_necessaria', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcular(inp);
      const aAdot = r.sapata.lado ** 2;
      expect(aAdot).toBeGreaterThanOrEqual(r.sapata.areaNecess - 0.001);
    }
  });
});

// ════════════════════════════════════════════════════════════════════════════
// 5. RESUMO DE AÇO
// ════════════════════════════════════════════════════════════════════════════

describe('calcularAco', () => {

  it('totalKg > 0 para todos os casos', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcularAco(calcular(inp));
      expect(r.totalKg).toBeGreaterThan(0);
    }
  });

  it('totalKg = soma das linhas (consistência interna)', () => {
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM]) {
      const r = calcularAco(calcular(inp));
      const soma = r.linhas.reduce((s, l) => s + l.pesoKg, 0);
      expect(Math.abs(r.totalKg - soma)).toBeLessThan(1); // diferença de arredondamento máx 1 kg
    }
  });

  it('totalKg % bitola = soma por bitola (consistência porBitola)', () => {
    const r = calcularAco(calcular(BASE));
    const somaB = r.porBitola.reduce((s, b) => s + b.pesoKg, 0);
    expect(Math.abs(r.totalKg - somaB)).toBeLessThan(1);
  });

  it('percentuais somam ~100%', () => {
    const r = calcularAco(calcular(BASE));
    const somaP = r.porBitola.reduce((s, b) => s + b.percentual, 0);
    expect(somaP).toBeGreaterThanOrEqual(95); // pode ter arredondamentos
    expect(somaP).toBeLessThanOrEqual(105);
  });

  it('nPilares = (ceil(sqrt(area/aTrib)) + 1)² — fórmula de grelha correta', () => {
    // Fórmula correta: conta pilares (vãos+1)², não vãos²
    const res = calcular(BASE);
    const aco = calcularAco(res);
    const nBays    = Math.ceil(Math.sqrt(BASE.area / res.pilar.areaTributaria));
    const expected = Math.max((nBays + 1) ** 2, 4);
    expect(aco.nPilares).toBe(expected);
  });

  it('nPilares: distância entre pilares ≤ vão declarado', () => {
    // A grelha não pode ter span > vão declarado — senão parte da laje fica em balanço
    for (const inp of [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM, GRANDE_VAO_PEQUENO]) {
      const res = calcular(inp);
      const aco = calcularAco(res);
      const pilarsPerSide = Math.round(Math.sqrt(aco.nPilares));
      const actualSpan = Math.sqrt(inp.area) / (pilarsPerSide - 1);
      expect(actualSpan).toBeLessThanOrEqual(inp.vao + 0.01); // tolerância mínima de arredondamento
    }
  });

  it('nPavimentos correto: sobrado2 → 2', () => {
    const r = calcularAco(calcular(SOBRADO2));
    expect(r.nPavimentos).toBe(2);
  });

  it('nPavimentos correto: sobrado3 → 3', () => {
    const r = calcularAco(calcular(SOBRADO3));
    expect(r.nPavimentos).toBe(3);
  });

  it('total de aço escala com área (2× area → mais aço)', () => {
    const r80  = calcularAco(calcular({ ...BASE, area: 80  }));
    const r160 = calcularAco(calcular({ ...BASE, area: 160 }));
    expect(r160.totalKg).toBeGreaterThan(r80.totalKg);
  });

  it('total de aço escala com nPavimentos', () => {
    const r1 = calcularAco(calcular({ ...BASE, tipo: 'terreo'  }));
    const r2 = calcularAco(calcular({ ...BASE, tipo: 'sobrado2'}));
    const r3 = calcularAco(calcular({ ...BASE, tipo: 'sobrado3'}));
    expect(r2.totalKg).toBeGreaterThan(r1.totalKg);
    expect(r3.totalKg).toBeGreaterThan(r2.totalKg);
  });

  it('caso base ≈ 1.012 kg total (±20% — tolerância de estimativa)', () => {
    // Backtest manual com fórmula correta de nPilares (16 pilares, grelha 4×4):
    // Laje: ~128 kg | Viga tração: ~217 kg | Viga estribo: ~73 kg
    // Pilar long: ~348 kg | Pilar estribo: ~54 kg | Sapata: ~192 kg → ~1.012 kg
    // (antes da correção: 9 pilares → ~754 kg — mas grelha deixava span de 4,47 m > vão=4 m)
    const r = calcularAco(calcular(BASE));
    expect(r.totalKg).toBeGreaterThan(1012 * 0.80);
    expect(r.totalKg).toBeLessThan(1012 * 1.20);
  });

  it('REGRESSÃO — 500 m² vão=4 m: nPilares ≈ 49 (grelha 7×7)', () => {
    // spacing=4m, aTrib=16, nBays=ceil(sqrt(500/16))=ceil(5.59)=6 → (6+1)²=49
    const r = calcularAco(calcular(GRANDE_VAO_PEQUENO));
    expect(r.nPilares).toBe(49);
  });

  it('6 linhas de aço geradas (laje, viga tração, viga estribo, pilar long, pilar estribo, sapata)', () => {
    const r = calcularAco(calcular(BASE));
    expect(r.linhas).toHaveLength(6);
  });

  it('todos os pesoKg das linhas > 0', () => {
    const r = calcularAco(calcular(BASE));
    for (const l of r.linhas) {
      expect(l.pesoKg).toBeGreaterThan(0);
    }
  });
});

// ════════════════════════════════════════════════════════════════════════════
// 6. INVARIANTES ESTRUTURAIS NBR
// ════════════════════════════════════════════════════════════════════════════

describe('invariantes NBR — todos os casos', () => {

  const TODOS = [BASE, SOBRADO2, SOBRADO3, COBERTURA, GARAGEM, GRANDE_VAO_PEQUENO, SEM_SPT];

  it('laje.espessura ≥ 12 cm (mínimo NBR 6118)', () => {
    for (const inp of TODOS) {
      expect(calcular(inp).laje.espessura).toBeGreaterThanOrEqual(12);
    }
  });

  it('viga.altura ≥ viga.largura (viga proporcional)', () => {
    for (const inp of TODOS) {
      const r = calcular(inp);
      expect(r.viga.altura).toBeGreaterThanOrEqual(r.viga.largura);
    }
  });

  it('pilar.Nd > 0 em todos os casos', () => {
    for (const inp of TODOS) {
      expect(calcular(inp).pilar.cargaCalculo).toBeGreaterThan(0);
    }
  });

  it('sapata.lado ≥ 0,60 m em todos os casos', () => {
    for (const inp of TODOS) {
      expect(calcular(inp).sapata.lado).toBeGreaterThanOrEqual(0.60);
    }
  });

  it('sapata.altura ≥ 0,20 m (espessura mínima prática)', () => {
    for (const inp of TODOS) {
      expect(calcular(inp).sapata.altura).toBeGreaterThanOrEqual(0.20);
    }
  });

  it('geradoEm é uma string não-vazia', () => {
    for (const inp of TODOS) {
      const r = calcular(inp);
      expect(r.geradoEm).toBeTruthy();
      expect(typeof r.geradoEm).toBe('string');
    }
  });

  it('input preservado no resultado (rastreabilidade)', () => {
    for (const inp of TODOS) {
      const r = calcular(inp);
      expect(r.input.area).toBe(inp.area);
      expect(r.input.vao).toBe(inp.vao);
      expect(r.input.tipo).toBe(inp.tipo);
    }
  });
});

// ════════════════════════════════════════════════════════════════════════════
// 7. CLASSES DE CONCRETO
// ════════════════════════════════════════════════════════════════════════════

describe('classes de concreto', () => {

  it('C30 > C25 > C20 em capacidade → pilares menores com melhor concreto', () => {
    const rC20 = calcular({ ...BASE, concreto: 'C20' });
    const rC25 = calcular({ ...BASE, concreto: 'C25' });
    const rC30 = calcular({ ...BASE, concreto: 'C30' });
    // Ac_min diminui com fck maior (mais resistente)
    expect(rC25.pilar.acMin).toBeLessThanOrEqual(rC20.pilar.acMin);
    expect(rC30.pilar.acMin).toBeLessThanOrEqual(rC25.pilar.acMin);
  });

  it('todos os concretos produzem resultados válidos', () => {
    for (const concreto of ['C20', 'C25', 'C30'] as const) {
      const r = calcular({ ...BASE, concreto });
      expect(r.pilar.cargaCalculo).toBeGreaterThan(0);
      expect(r.viga.momentoCalculo).toBeGreaterThan(0);
      expect(r.sapata.lado).toBeGreaterThan(0);
    }
  });
});
