import { motion } from "framer-motion";
import { Users, Globe, BarChart3, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Users size={28} />,
    title: "Contribute",
    subtitle: "Collect & Annotate",
    description: "Communities create high-quality language datasets across regions and dialects.",
    color: "from-emerald-500 to-green-600",
    glow: "emerald",
  },
  {
    icon: <Globe size={28} />,
    title: "Orchestrate",
    subtitle: "Route & Govern",
    description: "A unified runtime routes requests to the best-fit models with policy enforcement.",
    color: "from-primary to-secondary",
    glow: "blue",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Observe",
    subtitle: "Monitor & Evaluate",
    description: "Real-time telemetry detects quality drift and feeds evaluation pipelines.",
    color: "from-cyan-500 to-blue-500",
    glow: "cyan",
  },
  {
    icon: <RefreshCw size={28} />,
    title: "Improve",
    subtitle: "Retrain & Deploy",
    description: "Evidence-driven feedback loops continuously improve model quality across languages.",
    color: "from-violet-500 to-purple-600",
    glow: "violet",
  },
];

const HowItWorksPipeline = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How It Works
            <motion.span
              className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A continuous lifecycle that transforms community data into trusted AI services
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative">
          {/* Desktop: Horizontal pipeline */}
          <div className="hidden md:grid grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-400/40 via-primary/40 via-cyan-400/40 to-violet-400/40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                className="relative flex flex-col items-center text-center px-4"
              >
                {/* Step number */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-muted-foreground/60 tracking-widest uppercase">
                  Step {i + 1}
                </div>

                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-5 relative z-10`}
                >
                  {step.icon}
                </motion.div>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="absolute top-16 -right-2 z-10 text-muted-foreground/30">
                    <ArrowRight size={16} />
                  </div>
                )}

                <h3 className="font-heading font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-2">
                  {step.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical pipeline */}
          <div className="md:hidden space-y-8 relative">
            {/* Vertical line */}
            <div className="absolute top-8 bottom-8 left-7 w-px bg-gradient-to-b from-emerald-400/30 via-primary/30 via-cyan-400/30 to-violet-400/30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 relative"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg shrink-0 relative z-10`}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base">{step.title}</h3>
                  <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-1">
                    {step.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPipeline;
