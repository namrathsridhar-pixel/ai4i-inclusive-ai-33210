import { motion, useReducedMotion } from "framer-motion";

function PowerPlantIcon() {
  return (
    <g aria-hidden="true">
      {[30, 46].map((x, i) => (
        <motion.circle key={x} cx={x} r={3} className="fill-[#6B7280]"
          initial={{ cy: 20, opacity: 0 }}
          animate={{ cy: [20, 3], opacity: [0, 0.35, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: i * 1.6, ease: "easeOut" }} />
      ))}
      <rect x={26} y={20} width={9} height={22} rx={1.5} className="fill-[#6B7280]/70" />
      <rect x={42} y={16} width={9} height={26} rx={1.5} className="fill-[#6B7280]/70" />
      <path d="M14 42 h68 v10 H14 z" className="fill-[#6B7280]/45" />
      <rect x={56} y={28} width={26} height={14} rx={2} className="fill-[#6B7280]/55" />
      {[60, 66, 72, 78].map((x) => (<rect key={x} x={x} y={32} width={3} height={4} className="fill-white" />))}
    </g>
  );
}

function PylonIcon() {
  return (
    <g className="stroke-[#6B7280]/75" strokeWidth={1.3} fill="none" strokeLinecap="round">
      {[22, 74].map((cx) => (
        <g key={cx}>
          <path d={`M${cx - 11} 52 L${cx} 10 L${cx + 11} 52`} />
          <path d={`M${cx - 8} 40 L${cx + 8} 40`} />
          <path d={`M${cx - 5} 28 L${cx + 5} 28`} />
          <path d={`M${cx - 8} 40 L${cx + 5} 28 M${cx + 8} 40 L${cx - 5} 28`} />
          <path d={`M${cx - 5} 28 L${cx + 3} 18 M${cx + 5} 28 L${cx - 3} 18`} />
          <path d={`M${cx - 13} 22 L${cx + 13} 22`} />
          <path d={`M${cx - 10} 14 L${cx + 10} 14`} />
        </g>
      ))}
      <path d="M22 14 Q48 24 74 14" />
      <path d="M9 22 Q48 33 87 22" />
      <path d="M35 22 Q48 30 61 22" />
    </g>
  );
}

function ConsumersIcon() {
  return (
    <g aria-hidden="true">
      <g className="fill-[#6B7280]/55">
        <path d="M8 34 L20 24 L32 34 V50 H8 z" />
        <rect x={36} y={30} width={6} height={20} />
        <path d="M42 50 V34 l9 6 V34 l9 6 V50 z" />
        <rect x={64} y={18} width={24} height={32} rx={1.5} />
      </g>
      <g className="fill-white">
        <rect x={17} y={38} width={6} height={12} />
        {[68, 76, 84].map((x) => [23, 31, 39].map((y) => <rect key={`${x}-${y}`} x={x} y={y} width={4} height={5} />))}
      </g>
    </g>
  );
}

function ServerRackIcon() {
  return (
    <g aria-hidden="true">
      {[6, 22, 38].map((y, row) => (
        <g key={y}>
          <rect x={18} y={y} width={60} height={12} rx={2.5} className="fill-[#0079C1]/15 stroke-[#0079C1]/60" strokeWidth={1.1} />
          {[26, 32, 38].map((x, i) => (
            <motion.circle key={x} cx={x} cy={y + 6} r={1.7} className="fill-[#0041A5]"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: row * 0.35 + i * 0.25, ease: "easeInOut" }} />
          ))}
          {[52, 58, 64, 70].map((x) => (<rect key={x} x={x} y={y + 4} width={4} height={4} rx={1} className="fill-[#0079C1]/45" />))}
        </g>
      ))}
    </g>
  );
}

function SwitchgearIcon() {
  return (
    <g aria-hidden="true">
      <g className="stroke-[#0041A5]/55" strokeWidth={1.2} fill="none">
        <path d="M14 12 H82" />
        <path d="M14 46 H82" />
        <path d="M26 12 V20 M48 12 V18 M70 12 V20" />
        <path d="M26 38 V46 M70 38 V46" />
      </g>
      <motion.rect x={30} y={18} width={36} height={22} rx={6} className="fill-[#0041A5]/15 stroke-[#0041A5]" strokeWidth={1.6}
        animate={{ opacity: [0.85, 1, 0.85] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <path d="M50 21 L43 31 h5 l-2 8 8-11 h-5 z" className="fill-[#0041A5]" />
      {[14, 82].map((x) => (<circle key={x} cx={x} cy={12} r={2} className="fill-[#0041A5]/70" />))}
      {[14, 82].map((x) => (<circle key={`b${x}`} cx={x} cy={46} r={2} className="fill-[#0041A5]/70" />))}
    </g>
  );
}

function AppsIcon() {
  return (
    <g aria-hidden="true">
      <g className="stroke-[#0079C1]" strokeWidth={1.3} fill="none">
        <rect x={10} y={10} width={18} height={34} rx={4} />
        <line x1={16} y1={40} x2={22} y2={40} />
        <path d="M38 14 h20 a4 4 0 0 1 4 4 v12 a4 4 0 0 1 -4 4 h-10 l-7 6 v-6 h-3 a4 4 0 0 1 -4 -4 v-12 a4 4 0 0 1 4 -4 z" />
        <rect x={70} y={12} width={18} height={30} rx={3} />
        <path d="M75 10 h8 v5 h-8 z" />
        <line x1={74} y1={24} x2={84} y2={24} />
        <line x1={74} y1={31} x2={81} y2={31} />
      </g>
      <g className="fill-[#0079C1]/70">
        <circle cx={44} cy={24} r={1.6} /><circle cx={50} cy={24} r={1.6} /><circle cx={56} cy={24} r={1.6} />
      </g>
    </g>
  );
}

const W = 560;
const ROW_H = 116;
const ROWS: [number, number, number] = [46, 196, 346];
const COL = { left: 148, right: 412 };
const BOX_W = 216;

type Tone = "grey" | "teal" | "gold";
const toneStyles: Record<Tone, { fill: string; stroke: string; width: number }> = {
  grey: { fill: "rgba(107,114,128,0.08)", stroke: "#E5E7EB", width: 1 },
  teal: { fill: "rgba(0,121,193,0.08)", stroke: "rgba(0,121,193,0.45)", width: 1.2 },
  gold: { fill: "rgba(0,65,165,0.10)", stroke: "#0041A5", width: 2 },
};

function Station({ cx, y, tone, label, sub, children, delay }: { cx: number; y: number; tone: Tone; label: string; sub?: string; children: React.ReactNode; delay: number; }) {
  const s = toneStyles[tone];
  return (
    <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
      <rect x={cx - BOX_W / 2} y={y} width={BOX_W} height={ROW_H} rx={14} fill={s.fill} stroke={s.stroke} strokeWidth={s.width} />
      {tone === "gold" ? (
        <motion.rect x={cx - BOX_W / 2} y={y} width={BOX_W} height={ROW_H} rx={14} fill="none" stroke="#0041A5" strokeWidth={2}
          animate={{ opacity: [0, 0.55, 0], scale: [1, 1.015, 1] }} style={{ transformOrigin: `${cx}px ${y + ROW_H / 2}px` }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
      ) : null}
      <g transform={`translate(${cx - 48}, ${y + 12})`}>{children}</g>
      <text x={cx} y={y + 88} textAnchor="middle" fill="#1A1A1A" style={{ fontSize: 13, fontWeight: 700 }}>{label}</text>
      {sub ? (<text x={cx} y={y + 104} textAnchor="middle" fill="#6B7280" style={{ fontSize: 11, letterSpacing: "0.04em" }}>{sub}</text>) : null}
    </motion.g>
  );
}

function Feeder({ cx, from, to, tone, delay }: { cx: number; from: number; to: number; tone: "grey" | "gold"; delay: number; }) {
  const reduce = useReducedMotion();
  const color = tone === "gold" ? "#0041A5" : "#6B7280";
  const op = tone === "gold" ? 0.55 : 0.32;
  return (
    <g>
      <line x1={cx} y1={from} x2={cx} y2={to} stroke={color} strokeOpacity={op * 0.5} strokeWidth={2} />
      <line x1={cx} y1={from} x2={cx} y2={to} stroke={color} strokeOpacity={op} strokeWidth={2} strokeDasharray="5 7" strokeLinecap="round">
        {!reduce && (<animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.4s" repeatCount="indefinite" />)}
      </line>
      {[from, to].map((y) => (<circle key={y} cx={cx} cy={y} r={3} fill={color} fillOpacity={op + 0.2} />))}
      {!reduce && (
        <motion.circle cx={cx} r={4} fill={color} initial={{ cy: from, opacity: 0 }}
          animate={{ cy: [from, to], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.2, delay, ease: "easeInOut" }}
          style={{ filter: tone === "gold" ? "drop-shadow(0 0 6px #0041A5)" : "none" }} />
      )}
    </g>
  );
}

function Equivalence({ y }: { y: number }) {
  return (
    <g aria-hidden="true">
      <line x1={COL.left + BOX_W / 2 + 8} y1={y} x2={COL.right - BOX_W / 2 - 8} y2={y} stroke="#6B7280" strokeOpacity={0.22} strokeWidth={1} strokeDasharray="2 5" />
      <circle cx={W / 2} cy={y} r={11} fill="#FFFFFF" />
      <text x={W / 2} y={y + 5} textAnchor="middle" fill="#6B7280" style={{ fontSize: 14, opacity: 0.7 }}>&#8801;</text>
    </g>
  );
}

export function PowerGridVisual() {
  const bottom = ROWS[2] + ROW_H + 16;
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <svg viewBox={`0 0 ${W} ${bottom}`} className="h-auto w-full overflow-visible" role="img"
        aria-label="Power grid layers compared with AI Switch: generation to transmission to consumption, and compute to AI Switch to applications.">
        <text x={COL.left} y={22} textAnchor="middle" fill="#6B7280" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", fontFamily: "monospace" }}>POWER GRID</text>
        <text x={COL.right} y={22} textAnchor="middle" fill="#0079C1" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", fontFamily: "monospace" }}>AI GRID</text>

        <Feeder cx={COL.left} from={ROWS[0] + ROW_H} to={ROWS[1]} tone="grey" delay={0.2} />
        <Feeder cx={COL.left} from={ROWS[1] + ROW_H} to={ROWS[2]} tone="grey" delay={0.7} />
        <Feeder cx={COL.right} from={ROWS[0] + ROW_H} to={ROWS[1]} tone="gold" delay={0.5} />
        <Feeder cx={COL.right} from={ROWS[1] + ROW_H} to={ROWS[2]} tone="gold" delay={1.0} />

        {ROWS.map((y) => (<Equivalence key={y} y={y + ROW_H / 2} />))}

        <Station cx={COL.left} y={ROWS[0]} tone="grey" label="Power Generation" delay={0}><PowerPlantIcon /></Station>
        <Station cx={COL.right} y={ROWS[0]} tone="teal" label="Sovereign Compute" delay={0.25}><ServerRackIcon /></Station>

        <Station cx={COL.left} y={ROWS[1]} tone="grey" label="Transmission Grid" sub="meter &middot; control" delay={0.1}><PylonIcon /></Station>
        <Station cx={COL.right} y={ROWS[1]} tone="gold" label="AI Switch" sub="auth &middot; route &middot; meter" delay={0.35}><SwitchgearIcon /></Station>

        <Station cx={COL.left} y={ROWS[2]} tone="grey" label="Homes &middot; Factories" delay={0.2}><ConsumersIcon /></Station>
        <Station cx={COL.right} y={ROWS[2]} tone="teal" label="Applications" delay={0.45}><AppsIcon /></Station>
      </svg>
    </div>
  );
}
