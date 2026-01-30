import { motion } from "framer-motion";
import { Download, Code, Users, Clock, ArrowRight } from "lucide-react";

interface AdoptionPath {
  icon: React.ReactNode;
  title: string;
  persona: string;
  description: string;
  timeToValue: string;
  cta: string;
  link: string;
}

const paths: AdoptionPath[] = [
  {
    icon: <Download size={28} />,
    title: "Adopt",
    persona: "For Organizations",
    description: "Download and deploy the full AI4Inclusion stack on your own infrastructure with complete control and sovereignty.",
    timeToValue: "Up and running in < 1 day",
    cta: "Get Started",
    link: "https://github.com/COSS-India",
  },
  {
    icon: <Code size={28} />,
    title: "Integrate",
    persona: "For Developers",
    description: "Use our APIs and SDKs to integrate Language AI capabilities into your existing applications.",
    timeToValue: "First API call in < 1 week",
    cta: "View Docs",
    link: "https://github.com/COSS-India/ai4i-core/wiki",
  },
  {
    icon: <Users size={28} />,
    title: "Contribute",
    persona: "For Communities",
    description: "Join data collection campaigns or contribute code to help build inclusive language technologies.",
    timeToValue: "Start contributing today",
    cta: "Join Community",
    link: "https://github.com/COSS-India/ai4i-contribute",
  },
];

const QuickStart = () => {
  return (
    <section className="py-16 px-4" id="quick-start">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-xl p-6 shadow-medium hover:shadow-large transition-all border border-border/50 group block"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-primary-foreground mb-5 shadow-soft">
                {path.icon}
              </div>
              <h3 className="font-heading font-bold text-xl mb-1">{path.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{path.persona}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {path.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Clock size={12} />
                {path.timeToValue}
              </div>
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                {path.cta} <ArrowRight size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStart;