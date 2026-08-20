import { motion } from "framer-motion";
import { Building2, Zap } from "lucide-react";

const models = ["Sovereign Models", "Open-Weight Models"];

const functionPills = [
  "Onboard",
  "Register",
  "Discover",
  "Allocate",
  "Authenticate",
  "Prioritise",
  "Route",
  "Monitor",
  "Meter",
];

const institutions = [
  { label: "Citizen services" },
  { label: "Health" },
  { label: "Education" },
];

const AdoptionLineage = () => {
  return (
    <div className="rounded-[20px] bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-14">
      <div className="relative mx-auto max-w-[520px]">
        {/* Connector lines — behind nodes */}
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 -z-10 h-full w-full"
          viewBox="0 0 500 400"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {/* Vertical lines from institutions to top horizontal bar */}
          <line x1="85" y1="60" x2="85" y2="100" stroke="#93C5FD" strokeWidth="1.5" />
          <line x1="250" y1="60" x2="250" y2="100" stroke="#93C5FD" strokeWidth="1.5" />
          <line x1="415" y1="60" x2="415" y2="100" stroke="#93C5FD" strokeWidth="1.5" />

          {/* Top horizontal bar */}
          <line x1="85" y1="100" x2="415" y2="100" stroke="#93C5FD" strokeWidth="1.5" />

          {/* Vertical line from top bar into AI4I Orchestrate box */}
          <line x1="250" y1="100" x2="250" y2="130" stroke="#93C5FD" strokeWidth="1.5" />

          {/* Vertical line from AI4I Orchestrate box to bottom bar */}
          <line x1="250" y1="270" x2="250" y2="300" stroke="#0079C1" strokeWidth="1.5" />

          {/* Bottom horizontal bar */}
          <line x1="180" y1="300" x2="320" y2="300" stroke="#0079C1" strokeWidth="1.5" />

          {/* Vertical lines from bottom bar to model pills */}
          <line x1="180" y1="300" x2="180" y2="330" stroke="#0079C1" strokeWidth="1.5" />
          <line x1="320" y1="300" x2="320" y2="330" stroke="#0079C1" strokeWidth="1.5" />
        </motion.svg>

        {/* Pulse dot — on top of nodes */}
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 z-20 h-full w-full"
          viewBox="0 0 500 400"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <circle r="4" fill="#C8A24A">
            <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="0s" repeatCount="indefinite" />
            <animateMotion
              dur="4s"
              begin="0s"
              repeatCount="indefinite"
              path="M85 60 L85 100 L250 100 L250 210 L250 300 L180 300 L180 330"
              keyPoints="0;0.624;0.624;1"
              keyTimes="0;0.42;0.52;1"
              calcMode="linear"
            />
          </circle>
        </motion.svg>

        {/* Top row: Institutions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-between"
        >
          {institutions.map((inst) => (
            <div
              key={inst.label}
              className="flex w-[130px] flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-brand-cyan bg-card py-3 text-center"
            >
              <Building2 size={20} className="text-brand-cyan" strokeWidth={2} />
              <span className="font-heading text-xs font-bold text-brand-ink">{inst.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Spacer: institutions down to center node */}
        <div className="h-[70px]" />

        {/* Center node: AI4I Orchestrate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[340px]"
        >
          <div className="animate-pulse-glow absolute inset-0 rounded-2xl bg-brand-blue/20" />
          <div className="relative flex flex-col items-center justify-center gap-1 rounded-2xl bg-brand-blue px-6 py-6 text-center shadow-[0_10px_30px_-12px_rgba(0,65,165,0.5)]">
            <Zap size={26} className="text-white" strokeWidth={2} />
            <span className="font-heading text-xl font-bold text-white">AI4I Orchestrate</span>
            <span className="text-[10px] text-white/60">also runs as AI Switch</span>

            <div className="mt-3 grid w-full grid-cols-3 gap-1.5">
              {functionPills.map((p) => (
                <span
                  key={p}
                  className="rounded-md bg-white/[0.15] px-1.5 py-1 text-[10px] leading-none text-white"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Spacer: center node down to models */}
        <div className="h-[70px]" />

        {/* Bottom: Hosted Models */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
          className="w-full text-center"
        >
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
            Hosted Models
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {models.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: 0.85 + i * 0.1, ease: "easeOut" }}
                className="rounded-full border border-border bg-brand-mist px-4 py-2 text-xs font-medium text-brand-ink"
              >
                {m}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        className="mx-auto mt-10 max-w-[620px] text-left leading-relaxed text-muted-foreground"
      >
        <span className="font-semibold text-brand-ink">AI4I Orchestrate</span> verifies the identity
        of every request, checks what the requester is entitled to, and meters consumption of the
        models it routes to in real time. It is also part of{" "}
        <span className="font-bold text-brand-blue">AI Switch</span>, giving adopters complete
        visibility and control over how their AI infrastructure is used.
      </motion.p>
    </div>
  );
};

export default AdoptionLineage;
