import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, delay, ease: "easeOut" as const },
});

const Box = ({
  label,
  tone,
  sub,
}: {
  label: string;
  tone: "orange" | "blue";
  sub?: string;
}) => (
  <div
    className={`w-full rounded-xl border-2 bg-card px-4 py-3 text-center ${
      tone === "orange" ? "border-[#E08A2E]/70" : "border-brand-cyan/70"
    }`}
  >
    <p className="font-heading text-[13px] font-bold text-brand-ink">{label}</p>
    {sub ? <p className="mt-0.5 text-[11px] text-muted-foreground">{sub}</p> : null}
  </div>
);

const Connector = ({ delay }: { delay: number }) => (
  <motion.div
    {...fade(delay)}
    aria-hidden="true"
    className="my-2 flex h-8 w-4 flex-col items-center justify-center"
  >
    <span className="w-0.5 flex-1 bg-border" />
    <span className="-mt-1 h-0 w-0 border-x-[4px] border-t-[6px] border-x-transparent border-t-border" />
  </motion.div>
);

const Column = ({
  dept,
  solution,
  pool,
  base,
}: {
  dept: string;
  solution: string;
  pool: string;
  base: number;
}) => (
  <div className="flex flex-col items-center">
    <motion.div {...fade(base)} className="w-full max-w-[220px]">
      <Box label={dept} tone="orange" />
    </motion.div>
    <Connector delay={base + 0.1} />
    <motion.div {...fade(base + 0.2)} className="w-full max-w-[220px]">
      <Box label={solution} tone="blue" />
    </motion.div>
    <Connector delay={base + 0.3} />
    <motion.div
      {...fade(base + 0.4)}
      className="w-full max-w-[220px] rounded-xl border-2 border-[#E08A2E]/70 bg-[#E08A2E]/5 px-4 py-4 text-center"
    >
      <p className="font-heading text-[13px] font-bold text-brand-ink">{pool}</p>
      <p className="mt-0.5 text-[11px] text-muted-foreground">Procured independently</p>
    </motion.div>
  </div>
);

const ChallengeDiagram = () => {
  return (
    <div className="rounded-[20px] bg-card p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-10">
      <div className="grid items-start gap-8 md:grid-cols-[1fr_auto_1fr]">
        <Column dept="Department 1" solution="AI Solution #1" pool="LLM / GPU" base={0} />

        {/* Missing layer callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          className="flex items-center justify-center self-center"
        >
          <motion.div
            animate={{ boxShadow: ["0 0 0 0 rgba(200,60,60,0)", "0 0 0 10px rgba(200,60,60,0.08)", "0 0 0 0 rgba(200,60,60,0)"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="max-w-[220px] rounded-xl border-2 border-dashed border-[#C83C3C] bg-[#C83C3C]/5 px-5 py-5 text-center"
          >
            <p className="font-heading text-sm font-bold text-[#C83C3C]">Missing Layer</p>
            <p className="mt-1 text-[11px] text-[#C83C3C]/80">
              (Routing, Metering, Monitoring)
            </p>
          </motion.div>
        </motion.div>

        <Column dept="Department 2" solution="AI Solution #2" pool="LLM / GPU Pool" base={0.25} />
      </div>
    </div>
  );
};

export default ChallengeDiagram;
