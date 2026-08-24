import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Building2,
  ClipboardList,
  Gauge,
  KeyRound,
  Search,
  Shuffle,
  Wallet,
} from "lucide-react";

const AdoptionArchitecture = lazy(() => import("@/components/AdoptionArchitecture"));

const functions = [
  { icon: Building2, title: "Onboard" },
  { icon: ClipboardList, title: "Register" },
  { icon: Search, title: "Discover" },
  { icon: Wallet, title: "Allocate" },
  { icon: KeyRound, title: "Authenticate" },
  { icon: Gauge, title: "Prioritise" },
  { icon: Shuffle, title: "Route" },
  { icon: Activity, title: "Monitor" },
  { icon: BarChart3, title: "Meter" },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

const OrchestrateDefinition = () => {
  return (
    <div>
      {/* Part A — Definition */}
      <motion.div {...fade(0)}>
        <p className="mb-3 font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
          The Definition
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
          What is AI Switch?
        </h2>
        <p className="mt-5 max-w-[680px] text-[16px] leading-[1.7] text-muted-foreground">
          AI Switch provides a single, governed layer for secure, measurable, and scalable
          consumption of open source and proprietary language AI models. It enables AI
          infrastructure to be consumed in a controlled and accountable manner while maintaining
          centralised governance, operational visibility, and consumption oversight across multiple
          institutions and applications.
        </p>
      </motion.div>

      {/* Part B — Functions */}
      <motion.div {...fade(0.1)} className="mt-[60px]">
        <p className="text-[15px] font-semibold text-brand-ink">
          Nine core functions. One governed layer.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
          {functions.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-3 py-4 text-center"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span className="font-heading text-[12px] font-bold text-brand-ink">{f.title}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Part C — Mechanics */}
      <motion.div {...fade(0.15)} className="mt-[60px]">
        <Suspense fallback={null}>
          <AdoptionArchitecture />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default OrchestrateDefinition;
