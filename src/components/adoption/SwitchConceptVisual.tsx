import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const institutions = [
  { x: 58, label: "Institution A" },
  { x: 175, label: "Institution B" },
  { x: 292, label: "Institution C" },
];
const models = [
  { x: 62, label: "LLM 1" },
  { x: 175, label: "LLM 2" },
  { x: 288, label: "LLM 3" },
];

const BAND_TOP = 126;
const BAND_BOTTOM = 182;

export function SwitchConceptVisual() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 350 300"
      className="mx-auto w-full max-w-[350px]"
      role="img"
      aria-label="Institutions connecting through AI Switch to sovereign models"
    >
      {institutions.map((n, i) => {
        const d = `M ${n.x} 48 L ${n.x + (175 - n.x) * 0.55} 92 L 175 ${BAND_TOP - 4}`;
        return (
          <g key={n.label}>
            <motion.path
              d={d}
              fill="none"
              stroke="#0079C1"
              strokeOpacity={0.45}
              strokeWidth={1.25}
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            />
            {!reduce && (
              <circle r={2.6} fill="#0041A5">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                  path={d}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.06;0.28;0.34"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
              </circle>
            )}
          </g>
        );
      })}

      {institutions.map((n, i) => (
        <motion.g
          key={`box-${n.label}`}
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
        >
          <rect
            x={n.x - 52}
            y={24}
            width={104}
            height={26}
            rx={8}
            fill="rgba(0,121,193,0.12)"
            stroke="#0079C1"
            strokeOpacity={0.6}
            strokeWidth={1.2}
          />
          <text
            x={n.x}
            y={41}
            textAnchor="middle"
            fill="#1A1A1A"
            style={{ fontSize: 11, fontWeight: 600 }}
          >
            {n.label}
          </text>
        </motion.g>
      ))}

      <motion.g
        initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
        style={{ transformOrigin: "175px 154px" }}
      >
        <motion.rect
          x={22}
          y={BAND_TOP}
          width={306}
          height={BAND_BOTTOM - BAND_TOP}
          rx={12}
          fill="rgba(0,65,165,0.14)"
          stroke="#0041A5"
          strokeWidth={2}
          animate={reduce ? {} : { opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <text
          x={175}
          y={149}
          textAnchor="middle"
          fill="#1A1A1A"
          style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.08em" }}
        >
          AI SWITCH
        </text>
        <text
          x={175}
          y={168}
          textAnchor="middle"
          fill="#6B7280"
          style={{ fontSize: 10.5, letterSpacing: "0.06em" }}
        >
          Governed &middot; Metered &middot; Monitored
        </text>
      </motion.g>

      {models.map((n, i) => {
        const d = `M 175 ${BAND_BOTTOM + 4} L ${175 + (n.x - 175) * 0.55} 224 L ${n.x} 250`;
        return (
          <g key={`l-${n.label}`}>
            <motion.path
              d={d}
              fill="none"
              stroke="#0041A5"
              strokeOpacity={0.45}
              strokeWidth={1.25}
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: EASE }}
            />
            {!reduce && (
              <circle r={2.6} fill="#0041A5">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${1.4 + i * 0.5}s`}
                  path={d}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.06;0.28;0.34"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${1.4 + i * 0.5}s`}
                />
              </circle>
            )}
          </g>
        );
      })}

      {models.map((n, i) => (
        <motion.g
          key={`m-${n.label}`}
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.4 + i * 0.07, ease: EASE }}
        >
          <circle cx={n.x} cy={270} r={22} fill="#1A1A1A" />
          <text
            x={n.x}
            y={274}
            textAnchor="middle"
            fill="#FFFFFF"
            style={{ fontSize: 10.5, fontWeight: 700 }}
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

export default SwitchConceptVisual;
