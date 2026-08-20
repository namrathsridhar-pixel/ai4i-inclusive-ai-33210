import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

const INK = "#0041A5";
const ACCENT = "#0079C1";

/** Simple conceptual diagram: institutions -> AI Switch band -> LLM circles */
const ConceptDiagram = () => {
  const instX = [60, 175, 290];
  const llmX = [60, 175, 290];
  return (
    <svg viewBox="0 0 350 300" width="100%" className="max-w-[350px]" role="presentation">
      {/* connectors: institutions -> band */}
      {instX.map((x) => (
        <path
          key={`t-${x}`}
          d={`M ${x} 60 C ${x} 90, 175 100, 175 120`}
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.5"
          opacity="0.6"
        />
      ))}
      {/* connectors: band -> llms */}
      {llmX.map((x) => (
        <path
          key={`b-${x}`}
          d={`M 175 178 C 175 200, ${x} 208, ${x} 236`}
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.5"
          opacity="0.6"
        />
      ))}

      {/* institutions */}
      {instX.map((x) => (
        <g key={`i-${x}`}>
          <rect
            x={x - 45}
            y={22}
            width="90"
            height="38"
            rx="9"
            fill="#FFFFFF"
            stroke={ACCENT}
            strokeWidth="1.5"
          />
          <text
            x={x}
            y={46}
            textAnchor="middle"
            fontSize="11"
            fill={INK}
            fontWeight="600"
          >
            Institution
          </text>
        </g>
      ))}

      {/* AI Switch band */}
      <g>
        <rect x="25" y="120" width="300" height="58" rx="12" fill={INK} />
        <text x="175" y="145" textAnchor="middle" fontSize="15" fill="#FFFFFF" fontWeight="700">
          AI SWITCH
        </text>
        <text x="175" y="164" textAnchor="middle" fontSize="10.5" fill="#CFE3F5">
          Governed · Metered · Monitored
        </text>
      </g>

      {/* LLM circles */}
      {llmX.map((x) => (
        <g key={`l-${x}`}>
          <circle cx={x} cy={262} r="26" fill={INK} />
          <text x={x} y={266} textAnchor="middle" fontSize="11" fill="#FFFFFF" fontWeight="700">
            LLM
          </text>
        </g>
      ))}

      {/* single looping pulse top -> bottom */}
      <motion.circle
        r="4"
        fill={ACCENT}
        initial={{ opacity: 0 }}
        animate={{
          cx: [175, 175, 175, 175],
          cy: [60, 120, 178, 236],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
      />
    </svg>
  );
};


const OrchestrateDefinition = () => {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[55fr_45fr]">
      <motion.div {...fade(0)}>
        <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
          The Definition
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
          What is AI Switch?
        </h2>
        <p className="mt-5 max-w-[620px] text-[16px] leading-[1.7] text-muted-foreground">
          AI Switch provides a single, governed layer for secure, measurable, and scalable
          consumption of open source and sovereign language AI models. It enables sovereign AI
          infrastructure to be consumed in a controlled and accountable manner while maintaining
          centralised governance, operational visibility, and consumption oversight across multiple
          institutions and applications.
        </p>
      </motion.div>

      <motion.div
        {...fade(0.15)}
        className="flex justify-center rounded-2xl border border-border bg-[#FAFAFA] p-6 md:p-8"
        aria-hidden="true"
      >
        <ConceptDiagram />
      </motion.div>
    </div>
  );
};

export default OrchestrateDefinition;
