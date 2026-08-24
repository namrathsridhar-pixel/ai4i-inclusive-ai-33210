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
  { icon: Building2, title: "Onboard", body: "Add institutions as tenants on the AI Grid." },
  { icon: ClipboardList, title: "Register", body: "Maintain the centralised registry of hosted LLMs, including model metadata, versions and deployment lifecycle information." },
  { icon: Search, title: "Discover", body: "Explore LLMs available for consumption by institutions." },
  { icon: Wallet, title: "Allocate", body: "Assign budget to authorised institutions based on policy-driven and approved entitlements." },
  { icon: KeyRound, title: "Authenticate", body: "Verify the identity of every institution at every API request. Enforce role-based access controls and validate the configured budget associated with the institution and its applications." },
  { icon: Gauge, title: "Prioritise", body: "Provide prioritised compute access for mission-critical applications for approved high-priority institutions." },
  { icon: Shuffle, title: "Route", body: "Direct each request to the model specified by the application." },
  { icon: Activity, title: "Monitor", body: "Track the health and performance of AI Switch by monitoring system health, latency, utilisation and performance through centralised operational dashboards. Contextless by design: infrastructure metrics only, never application content." },
  { icon: BarChart3, title: "Meter", body: "Attribute consumption — tokens and budget — by institution and application. Basis for billing, tiered subsidy schedules, and governance accountability." },
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
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {functions.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.05 + (i % 3) * 0.06, ease: "easeOut" }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span>
                  <span className="block font-heading text-[13px] font-bold text-brand-ink">
                    {f.title}
                  </span>
                  <span className="mt-1 block text-[13px] leading-relaxed text-muted-foreground">
                    {f.body}
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Part C — Mechanics */}
      <motion.div {...fade(0.15)}>
        <p className="mt-12 max-w-[680px] text-[16px] leading-[1.7]">
          <span className="font-semibold text-brand-ink">
            Together, those functions form a single path — from an institution's application,
            through the switch, to the model that answers it.
          </span>
        </p>
        <div className="mt-12">
          <Suspense fallback={null}>
            <AdoptionArchitecture />
          </Suspense>
        </div>
      </motion.div>

    </div>
  );
};

export default OrchestrateDefinition;
