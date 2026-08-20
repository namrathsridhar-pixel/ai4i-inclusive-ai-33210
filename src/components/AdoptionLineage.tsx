import { motion } from "framer-motion";
import { Building2, Zap } from "lucide-react";

const models = [
  "Sovereign Models",
  "Open-Weight Models",
];

const AdoptionLineage = () => {
  return (
    <div className="rounded-[20px] bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-14">
      <div className="mx-auto flex max-w-[500px] flex-col items-center">
        {/* Top node: Onboarded Institutions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[280px]"
        >
          <div className="flex h-[104px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-brand-cyan bg-card px-4 text-center">
            <Building2 size={22} className="text-brand-cyan" strokeWidth={2} />
            <span className="font-heading text-sm font-bold text-brand-ink">
              Onboarded Institutions
            </span>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Citizen services, health, education, agriculture
          </p>
        </motion.div>

        {/* Arrow down */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
          className="my-3 flex h-12 w-4 origin-top flex-col items-center justify-center"
          aria-hidden="true"
        >
          <span className="w-0.5 flex-1 bg-brand-cyan" />
          <span className="-mt-1 h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-brand-cyan" />
        </motion.div>

        {/* Center node: AI Switch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[320px]"
        >
          <div className="animate-pulse-glow absolute inset-0 rounded-2xl bg-brand-blue/20" />
          <div className="relative flex h-[150px] flex-col items-center justify-center gap-2 rounded-2xl bg-brand-blue px-6 text-center shadow-[0_10px_30px_-12px_rgba(0,65,165,0.5)]">
            <Zap size={32} className="text-white" strokeWidth={2} />
            <span className="font-heading text-xl font-bold text-white">AI4I Orchestrate</span>
            <span className="text-sm text-white/80">Control plane, on adopter infrastructure</span>
          </div>

        </motion.div>

        {/* Arrow down */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
          className="my-3 flex h-12 w-4 origin-top flex-col items-center justify-center"
          aria-hidden="true"
        >
          <span className="w-0.5 flex-1 bg-brand-cyan" />
          <span className="-mt-1 h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-brand-cyan" />
        </motion.div>

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
        <span className="font-semibold text-brand-ink">AI4I Orchestrate</span> is AI4I Core's governed access layer — the same engine now running
        as <span className="font-bold text-brand-blue">AI Switch</span>. It verifies the identity of every request, checks what the
        requester is entitled to, and meters consumption of the models it routes to in real time,
        giving adopters complete visibility and control over how their AI infrastructure is used.

      </motion.p>
    </div>
  );
};

export default AdoptionLineage;
