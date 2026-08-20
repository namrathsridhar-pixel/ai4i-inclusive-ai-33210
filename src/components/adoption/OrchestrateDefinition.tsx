import { motion } from "framer-motion";
import SwitchConceptVisual from "./SwitchConceptVisual";

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
      >
        <SwitchConceptVisual />
      </motion.div>
    </div>
  );
};

export default OrchestrateDefinition;
