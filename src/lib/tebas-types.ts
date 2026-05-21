// ─── Tebas — Tipos ───────────────────────────────────────────────────────────

export type TipoEdificacao = 'terreo' | 'sobrado2' | 'sobrado3';
export type ClasseConcreto = 'C20' | 'C25' | 'C30';
export type UsoLaje = 'cobertura' | 'piso_residencial' | 'garagem';

export interface TebasInput {
  tipo: TipoEdificacao;
  area: number;        // m² por pavimento
  vao: number;         // m — maior vão livre da laje
  concreto: ClasseConcreto;
  usoLaje: UsoLaje;
  temSpt: boolean;
  spt: number;         // NSPT médio (usado se temSpt = true)
}

export interface LajeResult {
  tipo: string;
  espessura: number;   // cm
  descricao: string;
  capeamento: number;  // cm
  malha: string;
  escoramento: string;
  sobrecarga: number;  // kN/m²
  hMinCalc: number;    // cm — resultado de L/25
  norma: string;
}

export interface VigaResult {
  largura: number;       // cm (bw)
  altura: number;        // cm (h)
  dUtil: number;         // cm (d)
  armaduraTracao: string;
  armaduraMin: number;   // cm²
  asCalculado: number;   // cm²
  estribos: string;
  momentoCalculo: number;  // kN.m
  vaoEstimado: number;   // m
  norma: string;
}

export interface PilarResult {
  largura: number;       // cm
  altura: number;        // cm
  armadura: string;
  asAdotado: number;     // cm²
  taxaArmadura: number;  // %
  cargaCalculo: number;  // kN
  areaTributaria: number; // m²
  acMin: number;         // cm²
  norma: string;
}

export interface SapataResult {
  lado: number;          // m (sapata quadrada)
  altura: number;        // m
  armadura: string;
  sigmaAdm: number;      // kN/m²
  areaNecess: number;    // m²
  sptUsado: number;
  norma: string;
}

export interface TebasResult {
  input: TebasInput;
  laje: LajeResult;
  viga: VigaResult;
  pilar: PilarResult;
  sapata: SapataResult;
  geradoEm: string;
}

// sessionStorage key
export const TEBAS_RESULT_KEY = 'tebas_resultado';
