import { motion } from "framer-motion";
import { Building2, Cpu, Zap } from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

const OrchestrateDefinition = () => {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[55fr_45fr]">
      <motion.div {...fade(0)}>
        <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
          The Definition
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
          What is AI4I Orchestrate?
        </h2>
        <p className="mt-5 max-w-[620px] text-[16px] leading-[1.7] text-muted-foreground">
          AI4I Orchestrate provides a single, governed layer for secure, measurable, and scalable
          consumption of open source and sovereign language AI models. It enables sovereign AI
          infrastructure to be consumed in a controlled and accountable manner while maintaining
          centralised governance, operational visibility, and consumption oversight across multiple
          institutions and applications.
        </p>
      </motion.div>

      <motion.div
        {...fade(0.15)}
        className="rounded-2xl border border-border bg-[#FAFAFA] p-6 md:p-8"
        aria-hidden="true"
      >
        <div className="mx-auto max-w-[300px]">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-lg border border-[#0079C1] bg-white py-3"
              >
                <Building2 size={16} strokeWidth={1.75} className="text-[#0079C1]" />
              </div>
            ))}
          </div>

          <div className="flex justify-center py-2">
            <div className="h-6 w-0 border-l-2 border-dotted border-[#CBD5E1]" />
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl bg-[#0041A5] px-4 py-4 text-center">
            <Zap size={18} strokeWidth={2} className="text-white" />
            <span className="font-heading text-[13px] font-bold text-white">AI4I Orchestrate</span>
          </div>

          <div className="flex justify-center py-2">
            <div className="h-6 w-0 border-l-2 border-dotted border-[#CBD5E1]" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-lg border border-[#0041A5] bg-[#F2F7FB] py-3"
              >
                <Cpu size={16} strokeWidth={1.75} className="text-[#0041A5]" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrchestrateDefinition;
