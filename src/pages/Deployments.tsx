import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardList,
  EyeOff,
  Feather,
  Gauge,
  Globe,
  KeyRound,
  Landmark,
  Minus,
  Phone,
  Scale,
  Search,
  Shuffle,
  Users,
  Wallet,
} from "lucide-react";

const OrchestrateLineage = lazy(() => import("@/components/OrchestrateLineage"));

const blocks = [
  {
    name: "AI4I-Orchestrate",
    icon: Globe,
    deployed: true,
    statusLabel: "Deployed",
    note: "In production as AI Switch, governing AI access for institutional applications.",
    anchor: "/building-blocks#ai4i-orchestrate",
  },
  {
    name: "AI4I-Observe",
    icon: BarChart3,
    deployed: false,
    statusLabel: "Ready to deploy",
    note: "Open source observability and feedback layer, available for institutional deployment.",
    anchor: "/building-blocks#observe",
  },
  {
    name: "AI4I-Contribute",
    icon: Users,
    deployed: false,
    statusLabel: "Ready to deploy",
    note: "Open source participatory data creation, available for institutional deployment.",
    anchor: "/building-blocks#contribute",
  },
  {
    name: "AI4I-VoicERA",
    icon: Phone,
    deployed: false,
    statusLabel: "Ready to deploy",
    note: "Open source sovereign voice platform, available for on-premises deployment.",
    anchor: "/building-blocks#voicera",
  },
];

const functions = [
  { icon: Building2, title: "Onboard", body: "Add institutions as tenants on the shared AI infrastructure." },
  { icon: ClipboardList, title: "Register", body: "Maintain a central registry of hosted models, including metadata, versions, and lifecycle state." },
  { icon: Search, title: "Discover", body: "Let institutions explore the models available to them for consumption." },
  { icon: Wallet, title: "Allocate", body: "Assign budgets to authorised institutions based on policy-driven entitlements." },
  { icon: KeyRound, title: "Authenticate", body: "Verify institutional identity on every request and enforce role-based access and budget checks." },
  { icon: Gauge, title: "Prioritise", body: "Provide prioritised compute access for mission-critical applications." },
  { icon: Shuffle, title: "Route", body: "Direct each request to the model the application has specified." },
  { icon: Activity, title: "Monitor", body: "Track system health, latency, and utilisation through centralised operational dashboards." },
  { icon: BarChart3, title: "Meter", body: "Attribute consumption — tokens and budget — by institution and application." },
];

const principles = [
  {
    icon: EyeOff,
    title: "Contextless",
    body: "It knows who is using what, under which entitlement, at what scale and cost — without inspecting application content.",
  },
  { icon: Feather, title: "Thin", body: "A control plane, not a processing layer. Near-zero added latency." },
  { icon: Scale, title: "Neutral", body: "Vendor-neutral and cloud-agnostic by design." },
  { icon: Landmark, title: "Sovereign", body: "Governed and built for deployment on sovereign infrastructure." },
];

const isNotList = [
  "Not a model hosting or serving platform — models are hosted and operated independently on the underlying infrastructure.",
  "Not a model selection or routing optimisation platform — applications choose the model, and requests are forwarded to that endpoint.",
  "Not an application guardrails platform — safety controls and domain validation remain with the consuming application.",
  "Not a billing or settlement system — it measures consumption and hands usage data downstream.",
  "Not a model evaluation platform — model quality remains with the respective model providers.",
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Deployments = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-background px-4 pb-14 pt-28">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-brand-cyan">IN PRODUCTION</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-ink md:text-5xl">
              Deployments
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              AI4Inclusion's building blocks are designed to be taken into production by institutions
              and run as their own infrastructure. This page tracks where that has happened, and what
              each deployment does.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deployment status board */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="font-heading text-2xl font-bold text-brand-ink md:text-3xl">
            Deployment status
          </motion.h2>
          <motion.p {...fadeUp} className="mt-3 max-w-2xl text-muted-foreground">
            Every block is open source and deployable today. Status reflects publicly confirmed
            production use.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {blocks.map((block, i) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={block.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  className={`rounded-2xl border p-6 ${
                    block.deployed ? "border-brand-blue/30 bg-brand-mist" : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        block.deployed
                          ? "bg-brand-blue text-white"
                          : "border-2 border-brand-blue/40 text-brand-blue"
                      }`}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider ${
                        block.deployed
                          ? "bg-brand-blue text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {block.statusLabel}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-brand-ink">
                    {block.name === "AI4I-VoicERA" ? (
                      <>
                        AI4I-<span className="font-gonzaga">VoicERA</span>
                      </>
                    ) : (
                      block.name
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.note}</p>
                  <Link
                    to={block.anchor}
                    className="group mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                  >
                    Learn more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured deployment — lineage visual */}
      <Suspense fallback={null}>
        <OrchestrateLineage />
      </Suspense>

      {/* What AI Switch does */}
      <section className="bg-brand-mist px-4 py-20" id="ai-switch">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp}>
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-brand-cyan">
              THE DEPLOYMENT
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-ink md:text-4xl">
              What AI Switch does
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Nine core functions. One governed layer between institutional applications and the
              models they consume.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {functions.map((fn, i) => {
              const Icon = fn.icon;
              return (
                <motion.div
                  key={fn.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: "easeOut" }}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <Icon size={22} strokeWidth={2} className="text-brand-blue" />
                  <h3 className="mt-4 font-heading text-base font-bold text-brand-ink">{fn.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fn.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design principles */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
            How it is built
          </motion.h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  className="rounded-2xl border-l-2 border-brand-cyan bg-card py-2 pl-5"
                >
                  <Icon size={20} strokeWidth={2} className="text-brand-cyan" />
                  <h3 className="mt-3 font-heading text-base font-bold text-brand-ink">{p.title}</h3>
                  <p className="mt-2 pr-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What it is not */}
      <section className="bg-brand-navy px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <motion.h2 {...fadeUp} className="font-heading text-3xl font-bold text-white md:text-4xl">
            What AI Switch is not
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 text-white/70">
            Scope discipline is what keeps a control plane thin. These responsibilities stay
            deliberately outside it.
          </motion.p>
          <ul className="mt-8 space-y-4">
            {isNotList.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                className="flex gap-3 text-white/80"
              >
                <Minus size={18} className="mt-1 shrink-0 text-brand-cyan" />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Deployments;
