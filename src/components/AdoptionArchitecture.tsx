import { motion } from "framer-motion";

const fnBlocks = [
  { name: "Onboard", sub: "Add institutions" },
  { name: "Register", sub: "Pick any model" },
  { name: "Discover", sub: "Browse models" },
  { name: "Allocate", sub: "Fairly across all" },
  { name: "Authenticate", sub: "Verify every request" },
  { name: "Prioritise", sub: "Mission-critical first" },
  { name: "Route", sub: "To the chosen model" },
  { name: "Monitor", sub: "Track health" },
  { name: "Meter", sub: "By intensity of use" },
];

const institutions = [
  { name: "Institution X", apps: ["App a", "App b"] },
  { name: "Institution Y", apps: ["App c"] },
];

function Pulse({ d, delay, r = 4 }: { d: string; delay: number; r?: number }) {
  return (
    <circle r={r} fill="#0041A5">
      <animateMotion dur="4s" repeatCount="indefinite" begin={`${delay}s`} path={d} />
      <animate
        attributeName="opacity"
        values="0;1;1;0"
        keyTimes="0;0.08;0.32;0.4"
        dur="4s"
        repeatCount="indefinite"
        begin={`${delay}s`}
      />
    </circle>
  );
}

export function AdoptionArchitecture() {
  return (
    <div className="relative rounded-2xl border border-border bg-[#F2F7FB] p-6 sm:p-10">
      <div className="grid gap-8 sm:grid-cols-2">
        {institutions.map((inst, i) => (
          <motion.div
            key={inst.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="rounded-xl border border-[#0079C1]/45 bg-[#0079C1]/[0.08] p-5"
          >
            <p className="text-center text-sm font-bold text-[#1A1A1A]">{inst.name}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {inst.apps.map((a) => (
                <span
                  key={a}
                  className="rounded-md border border-border bg-white px-4 py-2 font-mono text-xs font-semibold text-[#6B7280]"
                >
                  {a}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="h-12 w-full">
        <path
          d="M100 0 C100 34 200 26 200 58"
          fill="none"
          className="stroke-[#6B7280]/30"
          strokeWidth={1.25}
        />
        <path
          d="M300 0 C300 34 200 26 200 58"
          fill="none"
          className="stroke-[#6B7280]/30"
          strokeWidth={1.25}
        />
        <Pulse d="M100 0 C100 34 200 26 200 58" delay={0} />
        <Pulse d="M300 0 C300 34 200 26 200 58" delay={0.5} />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border-2 border-[#0041A5] bg-[#0041A5]/[0.14] p-5 sm:p-6"
      >
        <p className="text-center font-mono text-sm font-extrabold tracking-[0.18em] text-[#1A1A1A]">
          AI SWITCH
        </p>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {fnBlocks.map((f, i) => (
            <motion.span
              key={f.name}
              initial={{ opacity: 0.2, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.09 }}
              className="block rounded-md bg-[#0041A5] px-3 py-2.5 text-center text-white"
            >
              <span className="block text-[12px] font-bold">{f.name}</span>
              <span className="block text-[10px] leading-tight text-white/80">{f.sub}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>

      <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="h-12 w-full">
        <path d="M200 2 L200 58" className="stroke-[#6B7280]/35" strokeWidth={1.25} />
        <path
          d="M194 10 L200 2 L206 10"
          fill="none"
          className="stroke-[#6B7280]/35"
          strokeWidth={1.25}
        />
        <path
          d="M194 50 L200 58 L206 50"
          fill="none"
          className="stroke-[#6B7280]/35"
          strokeWidth={1.25}
        />
        <Pulse d="M200 2 L200 58" delay={1.1} r={3.5} />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-md rounded-t-xl rounded-b-[999px] border border-[#0079C1]/45 bg-[#0079C1]/[0.1] px-8 pb-7 pt-5"
      >
        <p className="text-center text-sm font-bold">Sovereign LLMs</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {["LLM", "LLM", "LLM"].map((l, i) => (
            <span
              key={i}
              className="inline-flex size-14 items-center justify-center rounded-full bg-[#1A1A1A] font-mono text-[11px] font-bold text-white"
            >
              {l}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default AdoptionArchitecture;
