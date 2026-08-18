import { motion } from "framer-motion";
import { Building2, Network, Zap } from "lucide-react";

const models = [
  "General-purpose LLMs",
  "Multilingual LLMs",
  "Domain-tuned LLMs",
  "Open-weight LLMs",
];

const nodeIn = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Arrow = ({ delay, dashed }: { delay: number; dashed?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, delay, ease: "easeOut" }}
    className="hidden flex-1 origin-left items-center md:flex"
    aria-hidden="true"
  >
    <span
      className={`h-px flex-1 ${dashed ? "border-t-2 border-dashed border-brand-cyan" : "bg-brand-cyan"}`}
    />
    <span className="-ml-px h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-brand-cyan" />
  </motion.div>
);

const AdoptionLineage = () => {
  return (
    <div className="rounded-[20px] bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-14">
      {/* Top row */}
      <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center">
        <motion.div {...nodeIn(0)} className="md:w-[24%]">
          <div className="flex h-[104px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-brand-blue bg-card px-4 text-center">
            <Network size={22} className="text-brand-blue" strokeWidth={2} />
            <span className="font-heading text-sm font-bold text-brand-ink">AI4I Orchestrate</span>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">Building block</p>
        </motion.div>

        <Arrow delay={0.15} dashed />

        <motion.div {...nodeIn(0.3)} className="md:w-[30%]">
          <div className="flex h-[136px] flex-col items-center justify-center gap-2 rounded-2xl bg-brand-blue px-4 text-center shadow-[0_10px_30px_-12px_rgba(0,65,165,0.6)]">
            <Zap size={26} className="text-white" strokeWidth={2} />
            <span className="font-heading text-lg font-bold text-white">AI Switch</span>
          </div>
          <p className="mx-auto mt-3 max-w-[220px] text-center text-xs text-muted-foreground">
            Control plane, on adopter infrastructure
          </p>
        </motion.div>

        <Arrow delay={0.45} />

        <motion.div {...nodeIn(0.6)} className="md:w-[24%]">
          <div className="flex h-[104px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-brand-cyan bg-card px-4 text-center">
            <Building2 size={22} className="text-brand-cyan" strokeWidth={2} />
            <span className="font-heading text-sm font-bold text-brand-ink">
              Onboarded institutions
            </span>
          </div>
          <p className="mx-auto mt-3 max-w-[220px] text-center text-xs text-muted-foreground">
            Citizen services, health, education, agriculture
          </p>
        </motion.div>
      </div>

      {/* Vertical connector from AI Switch */}
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.75, ease: "easeOut" }}
          className="h-10 w-px origin-top bg-brand-cyan"
          aria-hidden="true"
        />
        <motion.p
          {...nodeIn(0.85)}
          className="mt-4 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan"
        >
          Hosted models
        </motion.p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {models.map((m, i) => (
            <motion.span
              key={m}
              {...nodeIn(0.95 + i * 0.08)}
              className="rounded-full border border-border bg-brand-mist px-4 py-2 text-xs font-medium text-brand-ink"
            >
              {m}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.p
        {...nodeIn(1.3)}
        className="mx-auto mt-10 max-w-[620px] text-center leading-relaxed text-muted-foreground"
      >
        AI4I Orchestrate is the language AI orchestration engine within AI4I Core. Deployed as AI
        Switch, it runs inside the adopter's own environment and sits in the path of every request —
        verifying identity, checking entitlement, and metering cost, without reading what the
        application is doing.
      </motion.p>
    </div>
  );
};

export default AdoptionLineage;
