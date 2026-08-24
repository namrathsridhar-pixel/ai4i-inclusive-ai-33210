import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Network, Settings2, Terminal, Zap } from "lucide-react";
import adopterGuide from "@/assets/adopter-admin-guide.html.asset.json";
import institutionGuide from "@/assets/institution-admin-guide.html.asset.json";

const ChallengeSection = lazy(() => import("@/components/adoption/ChallengeSection"));
const ConceptSection = lazy(() => import("@/components/adoption/ConceptSection"));
const OrchestrateDefinition = lazy(() => import("@/components/adoption/OrchestrateDefinition"));

const resources = [
  {
    icon: Terminal,
    step: "01",
    title: "Deploy",
    body: "Set up, configure, and run the AI Switch codebase.",
    cta: "View Setup Guide",
    href: "https://github.com/COSS-India/ai4i-core/blob/master/docs/SETUP_GUIDE.md",
  },
  {
    icon: Settings2,
    step: "02",
    title: "Configure",
    body: "Register models, configure services, and onboard your organisation.",
    cta: "View Adopter Admin Guide",
    href: adopterGuide.url,
  },
  {
    icon: Building2,
    step: "03",
    title: "Enable",
    body: "Bring institutions onboard and enable them to access AI services.",
    cta: "View Institution Admin Guide",
    href: institutionGuide.url,
  },
];


const MotionLink = motion(Link);

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
      <section className="relative overflow-hidden bg-background px-4 py-20 md:py-[80px]">
        {/* Subtle node/network background motif */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="adoptionHeroNodes"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="1" fill="#0041A5" />
                <line x1="30" y1="30" x2="60" y2="0" stroke="#0041A5" strokeWidth="0.3" />
                <line x1="30" y1="30" x2="0" y2="60" stroke="#0041A5" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#adoptionHeroNodes)" />
          </svg>
        </div>

        <div className="container relative mx-auto max-w-5xl">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-brand-cyan">
                Adoption
              </p>
              <h1 className="mt-4 max-w-[520px] font-heading text-4xl font-bold leading-[1.12] tracking-tight text-brand-ink md:text-[44px]">
                AI Switch — adopted from AI4I Orchestrate.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6"
            >
              <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3 sm:gap-4">
                <div className="flex flex-col items-center justify-center rounded-xl border border-brand-blue/25 bg-background px-4 py-6 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-brand-blue/40 text-brand-blue">
                    <Network size={20} strokeWidth={2} />
                  </div>
                  <p className="mt-3 font-heading text-sm font-bold text-brand-ink">
                    AI4I Orchestrate
                  </p>
                </div>

                <div className="relative flex w-8 items-center sm:w-10">
                  <div className="h-px w-full border-t border-dashed border-brand-blue/40" />
                  <motion.span
                    aria-hidden="true"
                    className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand-cyan"
                    animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <div className="flex flex-col items-center justify-center rounded-xl bg-brand-navy px-4 py-6 text-center text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                    <Zap size={20} strokeWidth={2} />
                  </div>
                  <p className="mt-3 font-heading text-sm font-bold">AI Switch</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

      </section>

      {/* Section 2 — The Challenge */}
      <section className="relative bg-brand-mist px-4 py-20" id="challenge">
        {/* Subtle node/network background motif */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="adoptionChallengeNodes"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="1" fill="#0041A5" />
                <line x1="30" y1="30" x2="60" y2="0" stroke="#0041A5" strokeWidth="0.3" />
                <line x1="30" y1="30" x2="0" y2="60" stroke="#0041A5" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#adoptionChallengeNodes)" />
          </svg>
        </div>

        <div className="container relative mx-auto max-w-5xl">
          <Suspense fallback={null}>
            <ChallengeSection />
          </Suspense>
        </div>
      </section>

      {/* Section 3 — The Concept */}
      <section className="bg-background px-4 py-20" id="concept">
        <div className="container mx-auto max-w-5xl">
          <Suspense fallback={null}>
            <ConceptSection />
          </Suspense>
        </div>
      </section>

      {/* Section 4 — What is AI4I Orchestrate */}
      <section className="bg-brand-mist px-4 py-20" id="what-is">
        <div className="container mx-auto max-w-5xl">
          <Suspense fallback={null}>
            <OrchestrateDefinition />
          </Suspense>
        </div>
      </section>

      {/* Section 7 — Ecosystem */}
      <section className="bg-background px-4 py-20" id="ecosystem">
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
            that a shared building block can move from open source to real-world deployment, ready
            for the next organisation to build on.
          </motion.p>

        </div>
      </section>

      {/* Section 8 — Resources for Adopters */}
      <section className="bg-brand-mist px-4 py-20" id="resources">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="font-heading text-3xl font-bold text-brand-ink md:text-4xl">
            Resources for Adopters
          </motion.h2>
          <motion.p {...fadeUp} className="mt-3 max-w-[640px] text-[16px] text-muted-foreground">
            Everything you need to deploy, configure, and run AI Switch.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.a
                  key={r.title}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                  className="group block rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,65,165,0.10)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <span className="font-mono text-[12px] font-bold text-brand-blue/40">
                      {r.step}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-[15px] font-bold text-brand-ink">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 font-heading text-[13px] font-bold text-brand-blue">
                    {r.cta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 9 — CTA */}
      <section className="bg-background px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center">
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
