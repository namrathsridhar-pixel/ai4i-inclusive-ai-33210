import { motion } from "framer-motion";
import { PowerGridVisual } from "@/components/PowerGridVisual";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const ConceptSection = () => {
  return (
    <section className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,420px)]">
      <motion.div {...fade(0)}>
        <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
          The Analogy
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
          The concept
        </h2>

        <blockquote className="relative mt-7 max-w-[680px] pl-9 text-[19px] italic leading-[1.6] text-brand-ink">
          <span className="absolute left-0 top-[-6px] font-heading text-[44px] leading-none text-[#0041A5]">
            &ldquo;
          </span>
          No factory builds its own power plant to run its machines. It connects to the grid and
          draws what it needs — metered and accountable.
          <span className="ml-1 font-heading text-[28px] leading-none text-[#0041A5]">
            &rdquo;
          </span>
        </blockquote>

        <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-muted-foreground">
          Before the grid existed, only the largest and most resourced institutions could access
          electricity. With the emergence of sovereign power grids, electricity became the substrate
          of the entire economy.
        </p>
        <p className="mt-4 max-w-[680px] text-[16px] leading-[1.7] text-muted-foreground">
          <span className="font-semibold text-brand-ink">AI Switch</span> is the same layer for the
          AI grid — a governed access layer that lets institutions draw on shared sovereign compute
          and models, metered and accountable, instead of each building their own from scratch.
        </p>
      </motion.div>

      <motion.div {...fade(0.15)}>
        <PowerGridVisual />
      </motion.div>
    </section>
  );
};

export default ConceptSection;
