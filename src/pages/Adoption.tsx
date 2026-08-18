import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  ClipboardList,
  Gauge,
  Globe,
  KeyRound,
  Phone,
  Search,
  Shuffle,
  Users,
  Wallet,
} from "lucide-react";

const OrchestrateLineage = lazy(() => import("@/components/OrchestrateLineage"));
const AISwitchFlow = lazy(() => import("@/components/AISwitchFlow"));

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

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Adoption = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent to-background px-4 pb-14 pt-28">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-brand-cyan">IN PRODUCTION</p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-ink md:text-5xl">
              Adoption
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A building block proves itself when an institution adopts it, renames it, and runs it as
              their own infrastructure. AI4I-Orchestrate has done exactly that — it is in production
              as AI Switch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured deployment — lineage visual */}
      <Suspense fallback={null}>
        <OrchestrateLineage />
      </Suspense>

      {/* How AI Switch sits in the stack */}
      <section className="bg-brand-mist px-4 py-20" id="ai-switch">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp}>
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-brand-cyan">
              THE DEPLOYMENT
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-ink md:text-4xl">
              One governed layer between applications and models
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              AI Switch sits in the path of every request: it knows who is asking, what they are
              entitled to, and what it costs — without reading what the application is doing.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-10">
            <Suspense fallback={null}>
              <AISwitchFlow />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Nine core functions */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
              What AI Switch does
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Nine core functions, from onboarding an institution to metering what it consumes.
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
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
                >
                  <span className="absolute right-5 top-5 font-heading text-xs font-bold text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-brand-ink">{fn.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fn.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Ecosystem */}
      <section className="px-4 py-20" id="ecosystem">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2 {...fadeUp} className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
            Collaborating for an inclusive digital future
          </motion.h2>
          <motion.p {...fadeUp} className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            AI4Inclusion brings together governments, research institutions, and technology
            organisations working toward a common goal: ensuring AI serves everyone, regardless of
            language or ability. Every deployment strengthens the shared Digital Public Good the
            next one builds on.
          </motion.p>
          <motion.div {...fadeUp} className="mt-8">
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
