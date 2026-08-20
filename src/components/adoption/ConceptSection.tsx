import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Factory, TowerControl, Home, Server, Zap, MessageSquare } from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

type Node = {
  title: string;
  sub?: string;
  Icon: typeof Factory;
};

const left: Node[] = [
  { title: "Power Generation", Icon: Factory },
  { title: "Transmission Grid", sub: "meter · control", Icon: TowerControl },
  { title: "Homes · Factories", Icon: Home },
];

const right: Node[] = [
  { title: "Sovereign Compute", Icon: Server },
  { title: "AI Switch", sub: "auth · route · meter", Icon: Zap },
  { title: "Applications", Icon: MessageSquare },
];

const Card = ({
  node,
  variant,
}: {
  node: Node;
  variant: "muted" | "accent" | "highlight";
}) => {
  const styles = {
    muted: "border-[#E2E8F0] bg-[#F6F8FA]",
    accent: "border-[#0079C1]/35 bg-[#F2F7FB]",
    highlight: "border-[#0041A5] bg-white shadow-[0_0_0_3px_rgba(0,65,165,0.08)]",
  }[variant];

  const iconColor = {
    muted: "text-[#94A3B8]",
    accent: "text-[#0079C1]",
    highlight: "text-[#0041A5]",
  }[variant];

  const { Icon } = node;

  return (
    <div className={`rounded-xl border px-4 py-6 text-center ${styles}`}>
      <div className="flex justify-center">
        <Icon size={34} strokeWidth={1.4} className={iconColor} />
      </div>
      <p className="mt-4 font-heading text-[13px] font-bold text-[#1A1A1A]">{node.title}</p>
      {node.sub && <p className="mt-1 text-[11px] text-[#94A3B8]">{node.sub}</p>}
    </div>
  );
};

const Connector = ({ accent, delay }: { accent: boolean; delay: number }) => {
  const reduce = useReducedMotion();
  const color = accent ? "#0079C1" : "#94A3B8";
  return (
    <div className="relative flex h-9 justify-center" aria-hidden="true">
      <div className="h-full w-px" style={{ backgroundColor: accent ? "#BFDBFE" : "#E2E8F0" }} />
      {!reduce && (
        <motion.span
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, 28], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2, delay, ease: "easeInOut" }}
        />
      )}
      <span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: `6px solid ${accent ? "#BFDBFE" : "#E2E8F0"}`,
        }}
      />
    </div>
  );
};

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
          <span className="font-semibold text-brand-ink">AI Switch</span> is the same layer for the
          AI grid — a governed access layer that lets institutions draw on shared sovereign compute
          and models, metered and accountable, instead of each building their own from scratch.
        </p>
      </motion.div>

      <motion.div
        {...fade(0.15)}
        className="mt-10 rounded-2xl border border-border bg-[#FAFAFA] p-6 md:p-10"
        aria-hidden="true"
      >
        <div className="mx-auto grid max-w-[640px] grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-8">
          <p className="mb-5 text-center font-heading text-[11px] font-bold uppercase tracking-[3px] text-[#94A3B8]">
            Power Grid
          </p>
          <div />
          <p className="mb-5 text-center font-heading text-[11px] font-bold uppercase tracking-[3px] text-[#0079C1]">
            AI Grid
          </p>

          {[0, 1, 2].map((i) => (
            <Fragment key={i}>
              <div>
                <Card node={left[i]} variant="muted" />
                {i < 2 && <Connector accent={false} delay={i * 0.5} />}
              </div>
              <div className="flex items-start justify-center pt-14">
                <span className="text-[15px] font-bold text-[#CBD5E1]">&#8801;</span>
              </div>
              <div>
                <Card node={right[i]} variant={i === 1 ? "highlight" : "accent"} />
                {i < 2 && <Connector accent delay={0.25 + i * 0.5} />}
              </div>
            </Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ConceptSection;
