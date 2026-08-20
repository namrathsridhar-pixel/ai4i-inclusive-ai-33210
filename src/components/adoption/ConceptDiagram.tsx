import { motion } from "framer-motion";

const levels = [
  { left: "Power Generation", right: "Sovereign Compute", rightSub: "" },
  { left: "Transmission Grid", leftSub: "meter · control", right: "AI4I Orchestrate", rightSub: "auth · route · meter" },
  { left: "Homes · Factories", right: "Applications", rightSub: "" },
] as const;

const ConceptDiagram = () => {
  return (
    <div className="rounded-[20px] bg-card p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-8">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 gap-y-4">
        <p className="text-center font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Power Grid
        </p>
        <span />
        <p className="text-center font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
          Language AI
        </p>

        {levels.map((lvl, i) => (
          <motion.div
            key={lvl.right}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.15, ease: "easeOut" }}
            className="contents"
          >
            <div className="rounded-xl border border-border bg-muted/40 px-3 py-4 text-center">
              <p className="font-heading text-[13px] font-semibold text-muted-foreground">
                {lvl.left}
              </p>
              {"leftSub" in lvl && lvl.leftSub ? (
                <p className="mt-0.5 text-[11px] text-muted-foreground/80">{lvl.leftSub}</p>
              ) : null}
            </div>

            <span aria-hidden="true" className="text-center text-base text-[#C8A24A]">
              ≡
            </span>

            <div
              className={`rounded-xl border px-3 py-4 text-center ${
                i === 1
                  ? "border-[#C8A24A]/60 bg-[#C8A24A]/10 shadow-[0_0_24px_-8px_rgba(200,162,74,0.6)]"
                  : "border-brand-cyan/40 bg-brand-cyan/5"
              }`}
            >
              <p className="font-heading text-[13px] font-bold text-brand-ink">{lvl.right}</p>
              {lvl.rightSub ? (
                <p className="mt-0.5 text-[11px] text-muted-foreground">{lvl.rightSub}</p>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ConceptDiagram;
