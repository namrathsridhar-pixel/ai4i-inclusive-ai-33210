import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe, Phone, Users } from "lucide-react";

const blocks = [
  {
    name: "AI4I-Orchestrate",
    icon: Globe,
    note: "Governed access between institutional applications and the models they consume.",
  },
  {
    name: "AI4I-Observe",
    icon: BarChart3,
    note: "Observability and feedback for systems already serving people.",
  },
  {
    name: "AI4I-Contribute",
    icon: Users,
    note: "Participatory data creation with the communities being served.",
  },
  {
    name: "AI4I-VoicERA",
    icon: Phone,
    note: "Sovereign voice interfaces for low-bandwidth, low-literacy access.",
  },
];

/**
 * Homepage deployment section — presents all four blocks with equal weight and
 * points to the Deployments page for the AI Switch story. No status hierarchy.
 */
const DeploymentSpotlight = () => {
  return (
    <section className="bg-background px-4 py-20" id="deployments-snapshot">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-heading text-xs font-bold tracking-[0.2em] text-brand-cyan">
            IN PRODUCTION
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight text-brand-ink md:text-4xl">
              From building blocks to deployed infrastructure
            </h2>
            <Link
              to="/deployments"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-brand-blue/30 px-4 py-2 font-heading text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 md:self-auto"
            >
              See deployments
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every building block is open source and built to be run by institutions as their own
            infrastructure. When one is taken into production it takes on a name and an operating
            model of its own — AI4I-Orchestrate runs as AI Switch for governed AI access.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-mist text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-heading text-sm font-bold text-brand-ink">
                  {block.name === "AI4I-VoicERA" ? (
                    <>
                      AI4I-<span className="font-gonzaga">VoicERA</span>
                    </>
                  ) : (
                    block.name
                  )}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{block.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeploymentSpotlight;
