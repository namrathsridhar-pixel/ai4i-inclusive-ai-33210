import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardList,
  Code2,
  FlaskConical,
  Gauge,
  Globe,
  KeyRound,
  Landmark,
  Search,
  Shuffle,
  Wallet,
} from "lucide-react";

const AdoptionLineage = lazy(() => import("@/components/AdoptionLineage"));
const ChallengeConcept = lazy(() => import("@/components/adoption/ChallengeConcept"));

const groups = [
  {
    label: "Setup",
    tint: "bg-brand-cyan/10 text-brand-cyan",
    items: [
      { icon: Building2, title: "Onboard", body: "Add institutions as tenants on AI Switch" },
      { icon: ClipboardList, title: "Register", body: "Maintain the centralised registry of hosted models" },
      { icon: Search, title: "Discover", body: "Explore models available for consumption" },
    ],
  },
  {
    label: "Governance",
    tint: "bg-brand-blue/10 text-brand-blue",
    items: [
      { icon: Wallet, title: "Allocate", body: "Assign budget based on approved entitlements" },
      { icon: KeyRound, title: "Authenticate", body: "Verify identity and validate budget on every request" },
      { icon: Gauge, title: "Prioritise", body: "Provide priority compute access for critical institutions" },
    ],
  },
  {
    label: "Operations",
    tint: "bg-brand-navy/10 text-brand-navy",
    items: [
      { icon: Shuffle, title: "Route", body: "Direct each request to the specified model" },
      { icon: Activity, title: "Monitor", body: "Track system health — contextless, infrastructure only" },
      { icon: BarChart3, title: "Meter", body: "Attribute token and budget consumption by institution" },
    ],
  },
];

const pillars = [
  { icon: Landmark, label: "Governments" },
  { icon: FlaskConical, label: "Research Institutions" },
  { icon: Code2, label: "Technology Organisations" },
  { icon: Globe, label: "Civil Society" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Adoption = () => {
  return (
    <div className="min-h-screen">
      {/* Section 1 — Hero */}
      <section className="bg-background px-4 pb-[60px] pt-[100px]">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl font-bold leading-tight text-brand-ink md:text-5xl">
              AI4I Orchestrate
            </h1>
            <p className="mt-6 max-w-[660px] text-[17px] leading-[1.7] text-muted-foreground">
              <span className="font-semibold text-brand-ink">AI4I Orchestrate</span> is the governed
              access layer within AI4I Core. It is also the core engine within{" "}
              <span className="font-bold text-brand-blue">AI Switch</span>, adopted for governed AI
              access at institutional scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Challenge & Concept */}
      <section className="bg-brand-mist px-4 py-20" id="challenge">
        <div className="container mx-auto max-w-5xl">
          <Suspense fallback={null}>
            <ChallengeConcept />
          </Suspense>
        </div>
      </section>

      {/* Section 4 — What AI4I Orchestrate does */}
      <section className="bg-brand-mist px-4 py-20" id="functions">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-2xl font-bold text-brand-ink md:text-3xl">
              What AI4I Orchestrate does
            </h2>
            <p className="mt-2 max-w-[620px] text-[15px] text-muted-foreground">
              Nine functions, in three groups
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {groups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: gi * 0.12, ease: "easeOut" }}
                className="rounded-2xl bg-card p-6"
              >
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
                  {group.label}
                </p>
                <div className="mt-4 space-y-4">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${group.tint}`}
                        >
                          <Icon size={15} strokeWidth={2} />
                        </span>
                        <div>
                          <h3 className="font-heading text-[13px] font-bold text-brand-ink">
                            {item.title}
                          </h3>
                          <p className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — How it works */}
      <section className="bg-background px-4 py-20" id="how-it-works">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
            How it works
          </motion.h2>
          <motion.div {...fadeUp} className="mt-8">
            <Suspense fallback={null}>
              <AdoptionLineage />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Section 6 — Ecosystem */}
      <section className="bg-brand-mist px-4 py-20" id="ecosystem">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeUp} className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
            Collaborating for an inclusive digital future
          </motion.h2>
          <motion.p
            {...fadeUp}
            className="mt-5 max-w-[640px] text-[17px] leading-[1.7] text-muted-foreground"
          >
            AI4Inclusion brings together governments, research institutions, and technology
            organisations working toward a common goal: ensuring AI serves everyone, regardless of
            language or ability. Every adoption strengthens the shared Digital Public Good the next
            one builds on.
          </motion.p>
          <motion.p
            {...fadeUp}
            className="mt-4 max-w-[640px] text-[17px] leading-[1.7] text-muted-foreground"
          >
            <span className="font-semibold text-brand-ink">AI4I Orchestrate</span>'s adoption as{" "}
            <span className="font-bold text-brand-blue">AI Switch</span> is one such example — proof
            that a shared building block can operate at institutional scale, ready for the next
            organisation to build on.
          </motion.p>

          <motion.div
            {...fadeUp}
            className="mt-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-6"
          >
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="flex w-[120px] flex-col items-center gap-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-muted-foreground shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="text-xs leading-snug text-muted-foreground">{p.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div {...fadeUp} className="mt-10 text-center">
            <Link
              to="/get-in-touch"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-heading text-sm font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              Get in Touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Adoption;
