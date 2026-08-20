import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Network, Zap } from "lucide-react";

/**
 * Homepage adoption band — one focused story (AI4I-Orchestrate adopted and run
 * as AI Switch) rather than a repeat of the building block cards above it.
 */
const AdoptionSpotlight = () => {
  return (
    <section className="bg-background px-4 py-20" id="adoption">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-border bg-brand-mist"
        >
          <div className="grid items-center gap-10 p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
            <div>
              <p className="font-heading text-xs font-bold tracking-[0.2em] text-brand-cyan">
                ADOPTION
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-brand-ink md:text-4xl">
                AI4I Orchestrate operates as AI Switch
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                AI4I Orchestrate is deployed and operated by an adopter on its own infrastructure, where it
                runs as AI Switch — the governed layer between the institutions onboarded onto it
                and the AI models they consume.
              </p>
              <Link
                to="/adoption"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 font-heading text-sm font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                View adoption details
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Lineage: building block -> adopted deployment */}
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex-1 rounded-2xl border border-brand-blue/25 bg-card p-5 text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border-2 border-brand-blue/40 text-brand-blue">
                  <Network size={20} strokeWidth={2} />
                </div>
                <p className="mt-3 font-heading text-sm font-bold text-brand-ink">AI4I Orchestrate</p>
                <p className="mt-1 text-xs text-muted-foreground">Open source building block</p>
              </motion.div>

              <div className="relative h-px w-8 shrink-0 sm:w-12">
                <div className="absolute inset-0 border-t border-dashed border-brand-blue/40" />
                <motion.span
                  aria-hidden="true"
                  className="absolute -top-[3px] h-1.5 w-1.5 rounded-full bg-brand-cyan"
                  animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                className="flex-1 rounded-2xl bg-brand-navy p-5 text-center text-white"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                  <Zap size={20} strokeWidth={2} />
                </div>
                <p className="mt-3 font-heading text-sm font-bold">AI Switch</p>
                <p className="mt-1 text-xs text-white/70">Running on adopter infrastructure</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdoptionSpotlight;
