import { Fragment } from "react";
import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Level = ({
  title,
  sub,
  accent,
  glow,
}: {
  title: string;
  sub?: string;
  accent: boolean;
  glow?: boolean;
}) => (
  <div className="relative">
    {glow && (
      <div className="animate-pulse-glow absolute inset-0 rounded-xl bg-brand-blue/20" />
    )}
    <div
      className={`relative rounded-xl border px-4 py-4 text-center ${
        accent
          ? "border-[#0041A5] bg-[#F2F7FB]"
          : "border-[#CBD5E1] bg-white"
      }`}
    >
      <p
        className={`font-heading text-[12.5px] font-bold ${
          accent ? "text-[#0041A5]" : "text-[#64748B]"
        }`}
      >
        {title}
      </p>
      {sub && (
        <p className={`mt-1 text-[10.5px] ${accent ? "text-[#0079C1]" : "text-[#94A3B8]"}`}>
          {sub}
        </p>
      )}
    </div>
  </div>
);

const Drop = ({ accent }: { accent: boolean }) => (
  <div className="flex justify-center py-1.5" aria-hidden="true">
    <div
      className="h-5 w-0 border-l-2 border-dotted"
      style={{ borderColor: accent ? "#0079C1" : "#CBD5E1" }}
    />
  </div>
);

const left = [
  { title: "Power Generation" },
  { title: "Transmission Grid", sub: "meter · control" },
  { title: "Homes · Factories" },
];

const right = [
  { title: "Sovereign Compute" },
  { title: "AI4I Orchestrate", sub: "auth · route · meter" },
  { title: "Applications" },
];

const ConceptSection = () => {
  return (
    <div>
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
          <span className="font-semibold text-brand-ink">AI Switch</span> applies the same
          principle to language AI — a governed access layer that lets institutions draw on shared
          compute and models, metered and accountable, instead of each building their own from
          scratch.
        </p>
      </motion.div>

      <motion.div
        {...fade(0.15)}
        className="mt-10 rounded-2xl border border-border bg-[#FAFAFA] p-6 md:p-10"
        aria-hidden="true"
      >
        <div className="mx-auto grid max-w-[640px] grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8">
          {/* headers */}
          <p className="mb-4 text-center font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
            Power Grid
          </p>
          <div />
          <p className="mb-4 text-center font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#0079C1]">
            Language AI
          </p>

          {[0, 1, 2].map((i) => (
            <Fragment key={i}>
              <div>
                <Level title={left[i].title} sub={left[i].sub} accent={false} />
                {i < 2 && <Drop accent={false} />}
              </div>
              <div className="flex items-start justify-center pt-4">
                <span className="text-[15px] font-bold text-[#94A3B8]">&#8801;</span>
              </div>
              <div>
                <Level
                  title={right[i].title}
                  sub={right[i].sub}
                  accent
                  glow={i === 1}
                />
                {i < 2 && <Drop accent />}
              </div>
            </Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ConceptSection;
