import { motion } from "framer-motion";
import { Building2, Cpu, Layers } from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const DottedDrop = () => (
  <div className="flex justify-center py-2" aria-hidden="true">
    <div className="h-6 w-0 border-l-2 border-dotted border-[#CBD5E1]" />
  </div>
);

const LlmBox = ({ label }: { label: string }) => (
  <div className="rounded-xl border border-[#0041A5] bg-[#F2F7FB] px-4 py-4 text-center">
    <div className="flex items-center justify-center gap-2">
      <Cpu size={16} strokeWidth={1.75} className="text-[#0041A5]" />
      <span className="font-heading text-[12px] font-bold text-[#0041A5]">LLM</span>
    </div>
    <div className="mt-2 flex justify-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#0079C1]/60" />
      ))}
    </div>
    <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#64748B]">{label}</p>
  </div>
);

const ChallengeSection = () => {
  return (
    <div>
      <motion.div {...fade(0)} className="mx-auto max-w-[680px]">
        <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
          The Problem
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
          The challenge
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] leading-[1.7] text-muted-foreground">
          Every department, state, and institution that wants to deploy AI today must independently
          solve compute procurement, model selection, safety evaluation, API design, metering, and
          ongoing operations — before writing a single line of application logic. The result is
          duplication, fragmentation, higher entry barriers, and slower adoption.
        </p>
        <p className="mt-4 max-w-[680px] text-[16px] leading-[1.7]">
          <span className="font-semibold text-brand-ink">
            The gap is the absence of a common operational layer that enables centralised governance
            over AI consumption.
          </span>
        </p>
      </motion.div>

      <div
        className="mt-12 rounded-2xl border border-border bg-[#FAFAFA] p-6 md:p-10"
        aria-hidden="true"
      >
        <div className="mx-auto max-w-[560px]">
          {/* Departments */}
          <motion.div {...fade(0.05)} className="grid grid-cols-2 gap-6">
            {["Dept 1", "Dept 2"].map((d) => (
              <div
                key={d}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-[#0079C1] bg-white px-4 py-4"
              >
                <Building2 size={18} strokeWidth={1.75} className="text-[#0079C1]" />
                <span className="font-heading text-[12px] font-bold text-[#0079C1]">{d}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...fade(0.12)} className="grid grid-cols-2 gap-6">
            <DottedDrop />
            <DottedDrop />
          </motion.div>

          {/* AI Solutions */}
          <motion.div {...fade(0.18)} className="grid grid-cols-2 gap-6">
            {["AI Solution #1", "AI Solution #2"].map((s) => (
              <div
                key={s}
                className="rounded-xl border border-[#0079C1]/50 bg-white px-4 py-3 text-center"
              >
                <span className="text-[11.5px] font-semibold text-[#0079C1]">{s}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...fade(0.24)} className="grid grid-cols-2 gap-6">
            <DottedDrop />
            <DottedDrop />
          </motion.div>

          {/* Missing layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: [0.96, 1.03, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="rounded-xl border-2 border-dashed border-[#DC2626] bg-[#FEF2F2] px-5 py-4 text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <Layers size={16} strokeWidth={1.75} className="text-[#DC2626]" />
              <span className="font-heading text-[13px] font-bold text-[#DC2626]">
                Missing Layer
              </span>
            </div>
            <p className="mt-1 text-[11px] text-[#DC2626]">Routing, Metering, Monitoring</p>
          </motion.div>

          <motion.div {...fade(0.5)} className="grid grid-cols-2 gap-6">
            <DottedDrop />
            <DottedDrop />
          </motion.div>

          {/* LLM / GPU pools */}
          <motion.div {...fade(0.56)} className="grid grid-cols-2 gap-6">
            <LlmBox label="GPU Pool" />
            <LlmBox label="GPU Pool" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
