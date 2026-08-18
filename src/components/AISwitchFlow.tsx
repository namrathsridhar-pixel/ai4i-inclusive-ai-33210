import { motion, useReducedMotion } from "framer-motion";
import { Building2, Cpu, Shuffle } from "lucide-react";

const consumers = ["Citizen services", "Health", "Education", "Agriculture"];
const models = ["Language models", "Speech models", "Vision models", "Domain models"];

/**
 * Animated architecture visual for AI Switch:
 * institutional applications -> the governed control plane -> hosted models.
 * Pulses travel along the paths to show request flow.
 */
const AISwitchFlow = () => {
  const reduceMotion = useReducedMotion();

  const column = (
    items: string[],
    Icon: typeof Building2,
    label: string,
    align: "left" | "right",
  ) => (
    <div className="flex-1">
      <p
        className={`font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground ${
          align === "right" ? "md:text-right" : ""
        }`}
      >
        {label}
      </p>
      <div className="mt-4 space-y-2.5">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: align === "left" ? -14 : 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
            className={`flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 ${
              align === "right" ? "md:flex-row-reverse md:text-right" : ""
            }`}
          >
            <Icon size={15} className="shrink-0 text-brand-blue" strokeWidth={2} />
            <span className="text-sm text-brand-ink">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const connector = (direction: "in" | "out") => (
    <div className="relative hidden h-40 w-16 shrink-0 items-center justify-center md:flex lg:w-24">
      <svg viewBox="0 0 96 160" className="h-full w-full" aria-hidden="true">
        {[24, 60, 100, 136].map((y) => (
          <path
            key={y}
            d={
              direction === "in"
                ? `M0 ${y} C 40 ${y}, 56 80, 96 80`
                : `M0 80 C 40 80, 56 ${y}, 96 ${y}`
            }
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1.5"
          />
        ))}
        {!reduceMotion &&
          [24, 60, 100, 136].map((y, i) => (
            <circle key={`p-${y}`} r="3" className="fill-brand-cyan">
              <animateMotion
                dur="2.6s"
                begin={`${i * 0.45}s`}
                repeatCount="indefinite"
                path={
                  direction === "in"
                    ? `M0 ${y} C 40 ${y}, 56 80, 96 80`
                    : `M0 80 C 40 80, 56 ${y}, 96 ${y}`
                }
              />
            </circle>
          ))}
      </svg>
    </div>
  );

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
      <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-0">
        {column(consumers, Building2, "Onboarded institutions", "left")}
        {connector("in")}

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[220px] shrink-0 rounded-2xl bg-brand-navy p-6 text-center text-white"
        >
          {!reduceMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl border border-brand-cyan/50"
              animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.035, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <div className="relative">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
              <Shuffle size={20} strokeWidth={2} />
            </div>
            <p className="mt-4 font-heading text-lg font-bold">AI Switch</p>
            <p className="mt-1 text-xs leading-relaxed text-white/70">
              Governed control plane — identity, entitlement, routing, metering
            </p>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-cyan">
              Adopter infrastructure
            </p>
          </div>
        </motion.div>

        {connector("out")}
        {column(models, Cpu, "Hosted models", "right")}
      </div>
    </div>
  );
};

export default AISwitchFlow;
