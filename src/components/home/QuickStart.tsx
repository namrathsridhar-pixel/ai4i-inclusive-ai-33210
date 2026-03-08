import { motion } from "framer-motion";
import { Download, Code, Users, ArrowRight } from "lucide-react";

interface AdoptionPath {
  icon: React.ReactNode;
  title: string;
  persona: string;
  description: string;
  cta: string;
  link: string;
  gradient: string;
}

const paths: AdoptionPath[] = [
  {
    icon: <Download size={28} />,
    title: "Adopt",
    persona: "For Organizations",
    description: "Download and deploy the full AI4Inclusion stack on your own infrastructure with complete control and sovereignty.",
    cta: "Get Started",
    link: "https://github.com/COSS-India",
    gradient: "from-primary to-secondary",
  },
  {
    icon: <Code size={28} />,
    title: "Integrate",
    persona: "For Developers",
    description: "Use our APIs and SDKs to integrate Language AI capabilities into your existing applications.",
    cta: "View Docs",
    link: "https://github.com/COSS-India/ai4i-core/wiki",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: <Users size={28} />,
    title: "Contribute",
    persona: "For Communities",
    description: "Join data collection campaigns or contribute code to help build inclusive language technologies.",
    cta: "Join Community",
    link: "https://github.com/COSS-India/ai4i-contribute",
    gradient: "from-emerald-500 to-green-600",
  },
];

const QuickStart = () => {
  return (
    <section className="py-20 px-4" id="quick-start">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get Started
            <motion.span
              className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose your path to Language AI adoption
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {paths.map((path, i) => (
            <motion.a
              key={path.title}
              href={path.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-card rounded-xl p-6 shadow-medium border border-border/50 group block overflow-hidden transition-all duration-300 hover:shadow-large hover:-translate-y-2"
            >
              {/* Gradient border glow on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${path.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 bg-gradient-to-br ${path.gradient} rounded-xl flex items-center justify-center text-white mb-5 shadow-soft group-hover:shadow-medium transition-shadow`}
                >
                  {path.icon}
                </motion.div>

                <h3 className="font-heading font-bold text-xl mb-1">{path.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{path.persona}</p>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {path.description}
                </p>

                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  {path.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
