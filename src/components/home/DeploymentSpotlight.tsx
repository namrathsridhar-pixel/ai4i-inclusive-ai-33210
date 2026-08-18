import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Globe, Phone, Users } from "lucide-react";

type DeploymentStatus = "deployed" | "ready";

interface BlockStatus {
  name: string;
  icon: typeof Globe;
  status: DeploymentStatus;
  statusLabel: string;
  note: string;
}

const blocks: BlockStatus[] = [
  {
    name: "AI4I-Orchestrate",
    icon: Globe,
    status: "deployed",
    statusLabel: "Deployed",
    note: "Running as AI Switch",
  },
  {
    name: "AI4I-Observe",
    icon: BarChart3,
    status: "ready",
    statusLabel: "Ready to deploy",
    note: "Open source, deployable today",
  },
  {
    name: "AI4I-Contribute",
    icon: Users,
    status: "ready",
    statusLabel: "Ready to deploy",
    note: "Open source, deployable today",
  },
  {
    name: "AI4I-VoicERA",
    icon: Phone,
    status: "ready",
    statusLabel: "Ready to deploy",
    note: "Open source, deployable today",
  },
];

/**
 * Homepage deployment snapshot — shows the deployment status of every building
 * block so no single block is singled out, and links to the full Deployments page.
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
            Every building block is open source and deployable. Where an institution takes one into
            production, it becomes real infrastructure with its own name and operating model — as
            AI4I-Orchestrate has, deployed as AI Switch for governed AI access.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            const isDeployed = block.status === "deployed";
            return (
              <motion.div
                key={block.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className={`rounded-2xl border p-5 transition-shadow hover:shadow-lg ${
                  isDeployed
                    ? "border-brand-blue/30 bg-brand-mist"
                    : "border-border bg-card"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    isDeployed ? "bg-brand-blue text-white" : "border-2 border-brand-blue/40 text-brand-blue"
                  }`}
                >
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
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isDeployed ? "bg-brand-blue" : "bg-muted-foreground/50"
                    }`}
                  />
                  <span
                    className={`font-heading text-[11px] font-bold uppercase tracking-wider ${
                      isDeployed ? "text-brand-blue" : "text-muted-foreground"
                    }`}
                  >
                    {block.statusLabel}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">{block.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeploymentSpotlight;
