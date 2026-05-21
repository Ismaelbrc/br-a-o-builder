import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useMemo, useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { TebasResult } from '@/lib/tebas-types';
import type { AcoResult } from '@/lib/tebas-types';

// ── Cores ─────────────────────────────────────────────────────────────────────
const C_CONCRETO  = '#8a9ba8';
const C_ACO       = '#F47A20';
const C_SAPATA    = '#6b7a87';
const C_FUNDO     = '#0D1B2A';

// ── Tipos helpers ─────────────────────────────────────────────────────────────
type V3 = [number, number, number];

// ── Layout da grelha de pilares ───────────────────────────────────────────────
function buildGrid(nPilares: number, spacing: number) {
  const cols = Math.round(Math.sqrt(nPilares));
  const rows = Math.ceil(nPilares / cols);
  const positions: V3[] = [];
  const ox = -((cols - 1) * spacing) / 2;
  const oz = -((rows - 1) * spacing) / 2;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (positions.length < nPilares) {
        positions.push([ox + c * spacing, 0, oz + r * spacing]);
      }
    }
  }
  return { positions, cols, rows };
}

// ── Camera helper ─────────────────────────────────────────────────────────────
function CameraSetup({ dist }: { dist: number }) {
  const { camera } = useThree();
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    camera.position.set(dist * 1.2, dist * 1.0, dist * 1.4);
    camera.lookAt(0, dist * 0.3, 0);
  }, [camera, dist]);
  return null;
}

// ── Sapata ────────────────────────────────────────────────────────────────────
function Sapata({ pos, lado, h, opacity }: {
  pos: V3; lado: number; h: number; opacity: number;
}) {
  return (
    <mesh position={[pos[0], -h / 2, pos[2]]}>
      <boxGeometry args={[lado, h, lado]} />
      <meshLambertMaterial color={C_SAPATA} transparent opacity={opacity} />
    </mesh>
  );
}

// ── Pilar (concreto) ──────────────────────────────────────────────────────────
function PilarConcreto({ pos, w, h_sec, nPav, hPav, sapH, opacity }: {
  pos: V3; w: number; h_sec: number; nPav: number;
  hPav: number; sapH: number; opacity: number;
}) {
  const totalH = nPav * hPav;
  const y = sapH + totalH / 2;
  return (
    <mesh position={[pos[0], y, pos[2]]}>
      <boxGeometry args={[w, totalH, h_sec]} />
      <meshLambertMaterial color={C_CONCRETO} transparent opacity={opacity} />
    </mesh>
  );
}

// ── Viga (concreto) ────────────────────────────────────────────────────────────
function VigaConcreto({ from, to, w, h, opacity }: {
  from: V3; to: V3; w: number; h: number; opacity: number;
}) {
  const dx = to[0] - from[0];
  const dz = to[2] - from[2];
  const len = Math.sqrt(dx * dx + dz * dz);
  if (len < 0.01) return null;
  const cx = (from[0] + to[0]) / 2;
  const cy = from[1];
  const cz = (from[2] + to[2]) / 2;
  const angle = Math.atan2(dx, dz);
  return (
    <mesh position={[cx, cy, cz]} rotation={[0, angle, 0]}>
      <boxGeometry args={[w, h, len]} />
      <meshLambertMaterial color={C_CONCRETO} transparent opacity={opacity} />
    </mesh>
  );
}

// ── Laje ──────────────────────────────────────────────────────────────────────
function Laje({ cols, rows, spacing, pilarW, y, h, opacity }: {
  cols: number; rows: number; spacing: number;
  pilarW: number; y: number; h: number; opacity: number;
}) {
  const W = (cols - 1) * spacing + pilarW;
  const D = (rows - 1) * spacing + pilarW;
  return (
    <mesh position={[0, y + h / 2, 0]}>
      <boxGeometry args={[W, h, D]} />
      <meshLambertMaterial color={C_CONCRETO} transparent opacity={Math.min(opacity, 0.45)} />
    </mesh>
  );
}

// ── Aço: barra longitudinal ───────────────────────────────────────────────────
function Barra({ from, to, r = 0.008 }: { from: V3; to: V3; r?: number }) {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const dz = to[2] - from[2];
  const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
  if (len < 0.001) return null;

  const mid: V3 = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2, (from[2] + to[2]) / 2];
  // Orient cylinder along the vector
  const dir = new THREE.Vector3(dx, dy, dz).normalize();
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);

  return (
    <mesh position={mid} quaternion={quaternion}>
      <cylinderGeometry args={[r, r, len, 6]} />
      <meshLambertMaterial color={C_ACO} />
    </mesh>
  );
}

// ── Aço: estribo retangular ───────────────────────────────────────────────────
function Estribo({ cx, y, cz, bw, h, r = 0.006 }: {
  cx: number; y: number; cz: number; bw: number; h: number; r?: number;
}) {
  const x0 = cx - bw / 2, x1 = cx + bw / 2;
  const z0 = cz - bw / 2, z1 = cz + bw / 2;
  const yb = y, yt = y + h;
  const segs: [V3, V3][] = [
    [[x0, yb, z0], [x1, yb, z0]],
    [[x1, yb, z0], [x1, yt, z0]],
    [[x1, yt, z0], [x0, yt, z0]],
    [[x0, yt, z0], [x0, yb, z0]],
    [[x0, yb, z1], [x1, yb, z1]],
    [[x1, yb, z1], [x1, yt, z1]],
    [[x1, yt, z1], [x0, yt, z1]],
    [[x0, yt, z1], [x0, yb, z1]],
    [[x0, yb, z0], [x0, yb, z1]],
    [[x1, yb, z0], [x1, yb, z1]],
    [[x0, yt, z0], [x0, yt, z1]],
    [[x1, yt, z0], [x1, yt, z1]],
  ];
  return (
    <>
      {segs.map(([a, b], i) => <Barra key={i} from={a} to={b} r={r} />)}
    </>
  );
}

// ── Aço do pilar ──────────────────────────────────────────────────────────────
function PilarAco({ pos, w, h_sec, nPav, hPav, sapH, nBarras }: {
  pos: V3; w: number; h_sec: number; nPav: number;
  hPav: number; sapH: number; nBarras: number;
}) {
  const totalH = nPav * hPav;
  const yBot = sapH - 0.05;
  const yTop = sapH + totalH + 0.05;
  const cover = 0.03;

  // Posições das barras longitudinais (4 cantos + eventuais intermediárias)
  const bw2 = w / 2 - cover;
  const bh2 = h_sec / 2 - cover;
  const barPositions: [number, number][] = [
    [-bw2, -bh2], [bw2, -bh2], [bw2, bh2], [-bw2, bh2],
  ];
  if (nBarras > 4) {
    barPositions.push([0, -bh2], [0, bh2]);
  }
  if (nBarras > 6) {
    barPositions.push([-bw2, 0], [bw2, 0]);
  }
  const usedBars = barPositions.slice(0, Math.min(nBarras, barPositions.length));

  // Estribos a cada 20cm
  const nHoops = Math.max(Math.floor(totalH / 0.20), 2);
  const hoops: number[] = [];
  for (let i = 0; i <= nHoops; i++) {
    hoops.push(sapH + (i / nHoops) * totalH);
  }

  return (
    <>
      {usedBars.map(([bx, bz], i) => (
        <Barra
          key={i}
          from={[pos[0] + bx, yBot, pos[2] + bz]}
          to={[pos[0] + bx, yTop, pos[2] + bz]}
          r={0.009}
        />
      ))}
      {hoops.map((hy, i) => (
        <Estribo
          key={i}
          cx={pos[0]} y={hy - 0.04} cz={pos[2]}
          bw={w - cover * 2} h={0.08}
          r={0.005}
        />
      ))}
    </>
  );
}

// ── Aço da viga ───────────────────────────────────────────────────────────────
function VigaAco({ from, to, vigaW, vigaH, nBarras, diam }: {
  from: V3; to: V3; vigaW: number; vigaH: number;
  nBarras: number; diam: number;
}) {
  const dx = to[0] - from[0];
  const dz = to[2] - from[2];
  const len = Math.sqrt(dx * dx + dz * dz);
  if (len < 0.05) return null;

  const ux = dx / len, uz = dz / len;
  const cover = 0.03;
  const yBar = from[1] - vigaH / 2 + cover + diam / 2000;

  // Barras de tração na parte inferior
  const barOffsets: number[] = [];
  const spacing_bar = (vigaW - 2 * cover) / Math.max(nBarras - 1, 1);
  for (let i = 0; i < nBarras; i++) {
    barOffsets.push(-vigaW / 2 + cover + i * spacing_bar);
  }
  if (nBarras === 1) barOffsets[0] = 0;

  // Estribos (U) a cada 18cm
  const nStirr = Math.max(Math.floor(len / 0.18), 2);
  const stirrPositions: number[] = [];
  for (let i = 0; i <= nStirr; i++) {
    stirrPositions.push(i / nStirr);
  }

  const perp: V3 = [-uz, 0, ux]; // vetor perpendicular no plano horizontal

  return (
    <>
      {barOffsets.map((off, bi) => {
        const ox = perp[0] * off, oz = perp[2] * off;
        const f: V3 = [from[0] + ox, yBar, from[2] + oz];
        const t: V3 = [to[0] + ox, yBar, to[2] + oz];
        return <Barra key={bi} from={f} to={t} r={diam / 2000} />;
      })}

      {stirrPositions.map((t_val, si) => {
        const mx = from[0] + dx * t_val;
        const mz = from[2] + dz * t_val;
        const ybot = from[1] - vigaH / 2 + cover;
        const ytop = from[1] + vigaH / 2 - cover;
        const hw = vigaW / 2 - cover;

        const corners: [V3, V3][] = [
          [[mx - perp[0] * hw, ybot, mz - perp[2] * hw], [mx + perp[0] * hw, ybot, mz + perp[2] * hw]],
          [[mx + perp[0] * hw, ybot, mz + perp[2] * hw], [mx + perp[0] * hw, ytop, mz + perp[2] * hw]],
          [[mx + perp[0] * hw, ytop, mz + perp[2] * hw], [mx - perp[0] * hw, ytop, mz - perp[2] * hw]],
          [[mx - perp[0] * hw, ytop, mz - perp[2] * hw], [mx - perp[0] * hw, ybot, mz - perp[2] * hw]],
        ];
        return (
          <group key={si}>
            {corners.map(([a, b], ci) => <Barra key={ci} from={a} to={b} r={0.005} />)}
          </group>
        );
      })}
    </>
  );
}

// ── Malha da laje ─────────────────────────────────────────────────────────────
function MalhaLaje({ cols, rows, spacing, pilarW, y, step = 0.3, r = 0.004 }: {
  cols: number; rows: number; spacing: number; pilarW: number; y: number;
  step?: number; r?: number;
}) {
  const W = (cols - 1) * spacing + pilarW;
  const D = (rows - 1) * spacing + pilarW;
  const bars: [V3, V3][] = [];
  const yBar = y + 0.04;

  for (let x = -W / 2; x <= W / 2; x += step) {
    bars.push([[x, yBar, -D / 2], [x, yBar, D / 2]]);
  }
  for (let z = -D / 2; z <= D / 2; z += step) {
    bars.push([[-W / 2, yBar, z], [W / 2, yBar, z]]);
  }
  return (
    <>
      {bars.map(([a, b], i) => <Barra key={i} from={a} to={b} r={r} />)}
    </>
  );
}

// ── Aço da sapata (malha bidirecional de tirantes) ────────────────────────────
function SapataAco({ pos, lado, sapH }: { pos: V3; lado: number; sapH: number }) {
  const half  = lado / 2 - 0.06;  // recuo de cobrimento
  const step  = 0.15;              // espaçamento 15 cm
  const yBot  = -sapH + 0.07;      // camada inferior (cobrimento 7 cm)
  const yTop  = -sapH + 0.12;      // camada superior (cruzada 5 cm acima)
  const bars: [V3, V3][] = [];

  // Camada inferior — barras no eixo X
  for (let z = -half; z <= half + 0.001; z += step) {
    bars.push([[pos[0] - half, yBot, pos[2] + z] as V3, [pos[0] + half, yBot, pos[2] + z] as V3]);
  }
  // Camada superior — barras no eixo Z (cruzada)
  for (let x = -half; x <= half + 0.001; x += step) {
    bars.push([[pos[0] + x, yTop, pos[2] - half] as V3, [pos[0] + x, yTop, pos[2] + half] as V3]);
  }

  return (
    <>
      {bars.map(([a, b], i) => <Barra key={i} from={a} to={b} r={0.007} />)}
    </>
  );
}

// ── Componente principal exportado ────────────────────────────────────────────
export function Tebas3D({ resultado, aco }: { resultado: TebasResult; aco: AcoResult }) {
  const [showConcrete, setShowConcrete] = useState(true);
  const [showSteel, setShowSteel]       = useState(false);

  const { pilar, viga, laje, sapata, input } = resultado;
  const nPav     = aco.nPavimentos;
  const nPilares = aco.nPilares;

  const pilarW   = pilar.largura  / 100; // cm → m
  const pilarHs  = pilar.altura   / 100;
  const vigaW    = viga.largura   / 100;
  const vigaH    = viga.altura    / 100;
  const lajeH    = laje.espessura / 100;
  const sapLado  = sapata.lado;          // já em m
  const sapH     = sapata.altura;        // já em m
  const hPav     = 3.0;                  // m piso-a-piso

  const spacing = Math.sqrt(pilar.areaTributaria);

  const { positions, cols, rows } = useMemo(
    () => buildGrid(nPilares, spacing),
    [nPilares, spacing],
  );

  const cOpacity = showConcrete ? 0.55 : 0.0;
  const dist     = spacing * Math.max(cols, rows);

  // Pares de pilares adjacentes para vigas
  const beamPairs = useMemo(() => {
    const pairs: [number, number][] = [];
    positions.forEach(([ax, , az], i) => {
      positions.forEach(([bx, , bz], j) => {
        if (j <= i) return;
        const samRow = Math.abs(az - bz) < 0.01 && Math.abs(bx - ax - spacing) < spacing * 0.05;
        const samCol = Math.abs(ax - bx) < 0.01 && Math.abs(bz - az - spacing) < spacing * 0.05;
        if (samRow || samCol) pairs.push([i, j]);
      });
    });
    return pairs;
  }, [positions, spacing]);

  return (
    <div style={{ position: 'relative', width: '100%', height: 480, borderRadius: 16, overflow: 'hidden' }}>
      {/* Botões de toggle */}
      <div style={{
        position: 'absolute', top: 12, left: 12, zIndex: 10,
        display: 'flex', gap: 8, flexWrap: 'wrap',
      }}>
        <button
          onClick={() => setShowConcrete(v => !v)}
          style={{
            padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            background: showConcrete ? '#8a9ba8' : 'rgba(138,155,168,0.2)',
            color: showConcrete ? '#0D1B2A' : '#8a9ba8',
            border: '1px solid #8a9ba8', cursor: 'pointer',
          }}
        >
          🏗 Concreto
        </button>
        <button
          onClick={() => setShowSteel(v => !v)}
          style={{
            padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
            background: showSteel ? '#F47A20' : 'rgba(244,122,32,0.15)',
            color: showSteel ? '#0D1B2A' : '#F47A20',
            border: '1px solid #F47A20', cursor: 'pointer',
          }}
        >
          ⚙ Aço
        </button>
      </div>

      {/* Legenda */}
      <div style={{
        position: 'absolute', bottom: 12, right: 12, zIndex: 10,
        fontSize: 11, color: 'rgba(241,245,249,0.45)', textAlign: 'right',
        lineHeight: 1.6,
      }}>
        <div>{nPilares} pilares · {pilar.largura}×{pilar.altura} cm</div>
        <div>Viga {viga.largura}×{viga.altura} cm · Laje {laje.espessura} cm</div>
        <div style={{ color: 'rgba(241,245,249,0.25)', marginTop: 2 }}>
          Arrastar para girar · Scroll para zoom
        </div>
      </div>

      <Canvas
        style={{ background: C_FUNDO }}
        gl={{ antialias: true }}
        shadows
      >
        <CameraSetup dist={dist} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[dist, dist * 2, dist]} intensity={0.9} castShadow />
        <directionalLight position={[-dist, dist, -dist * 0.5]} intensity={0.3} />
        <OrbitControls
          enableDamping
          dampingFactor={0.07}
          minPolarAngle={0.1}
          maxPolarAngle={Math.PI / 2 + 0.1}
        />

        {/* Plano de chão */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -sapH - 0.01, 0]}>
          <planeGeometry args={[dist * 3, dist * 3]} />
          <meshLambertMaterial color="#0a1520" />
        </mesh>

        {/* ── Sapatas ─────────────────────────────────────────────────── */}
        {positions.map((pos, i) => (
          <Sapata key={i} pos={pos} lado={sapLado} h={sapH} opacity={cOpacity} />
        ))}

        {/* ── Pilares (concreto) ──────────────────────────────────────── */}
        {positions.map((pos, i) => (
          <PilarConcreto
            key={i}
            pos={pos}
            w={pilarW} h_sec={pilarHs}
            nPav={nPav} hPav={hPav} sapH={sapH}
            opacity={cOpacity}
          />
        ))}

        {/* ── Vigas (concreto) ────────────────────────────────────────── */}
        {beamPairs.map(([i, j], bi) => (
          Array.from({ length: nPav }, (_, p) => {
            const y = sapH + (p + 1) * hPav - vigaH / 2;
            const [ax, , az] = positions[i];
            const [bx, , bz] = positions[j];
            // Recuar pelos cantos do pilar
            const dx = bx - ax, dz = bz - az;
            const len = Math.sqrt(dx * dx + dz * dz);
            const ux = dx / len, uz = dz / len;
            const slack = pilarW / 2;
            return (
              <VigaConcreto
                key={`${bi}-${p}`}
                from={[ax + ux * slack, y, az + uz * slack]}
                to={[bx - ux * slack, y, bz - uz * slack]}
                w={vigaW} h={vigaH}
                opacity={cOpacity}
              />
            );
          })
        ))}

        {/* ── Lajes ───────────────────────────────────────────────────── */}
        {Array.from({ length: nPav }, (_, p) => {
          const y = sapH + (p + 1) * hPav;
          return (
            <Laje
              key={p}
              cols={cols} rows={rows}
              spacing={spacing} pilarW={pilarW}
              y={y} h={lajeH}
              opacity={cOpacity}
            />
          );
        })}

        {/* ── Aço ─────────────────────────────────────────────────────── */}
        {showSteel && (
          <>
            {/* Aço das sapatas (malha bidirecional de tirantes) */}
            {positions.map((pos, i) => (
              <SapataAco key={i} pos={pos} lado={sapLado} sapH={sapH} />
            ))}

            {/* Aço do piso (laje de contrapiso no nível do terreno) */}
            <MalhaLaje
              cols={cols} rows={rows}
              spacing={spacing} pilarW={pilarW}
              y={0} step={0.20} r={0.005}
            />

            {/* Aço dos pilares */}
            {positions.map((pos, i) => (
              <PilarAco
                key={i}
                pos={pos}
                w={pilarW} h_sec={pilarHs}
                nPav={nPav} hPav={hPav} sapH={sapH}
                nBarras={pilar.nBarrasLongitudinal}
              />
            ))}

            {/* Aço das vigas */}
            {beamPairs.map(([i, j], bi) => (
              Array.from({ length: nPav }, (_, p) => {
                const y = sapH + (p + 1) * hPav - vigaH / 2;
                const [ax, , az] = positions[i];
                const [bx, , bz] = positions[j];
                const dx = bx - ax, dz = bz - az;
                const len = Math.sqrt(dx * dx + dz * dz);
                const ux = dx / len, uz = dz / len;
                const slack = pilarW / 2;
                return (
                  <VigaAco
                    key={`${bi}-${p}`}
                    from={[ax + ux * slack, y + vigaH / 2, az + uz * slack]}
                    to={[bx - ux * slack, y + vigaH / 2, bz - uz * slack]}
                    vigaW={vigaW} vigaH={vigaH}
                    nBarras={viga.nBarrasTracao}
                    diam={viga.diametroTracao}
                  />
                );
              })
            ))}

            {/* Malha da laje */}
            {Array.from({ length: nPav }, (_, p) => {
              const y = sapH + (p + 1) * hPav;
              return (
                <MalhaLaje
                  key={p}
                  cols={cols} rows={rows}
                  spacing={spacing} pilarW={pilarW}
                  y={y}
                />
              );
            })}
          </>
        )}
      </Canvas>
    </div>
  );
}
