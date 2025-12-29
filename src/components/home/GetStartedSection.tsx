import { motion } from "framer-motion";
import { Download, Code, Users, ArrowRight, Github, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Path {
  icon: React.ReactNode;
  title: string;
  persona: string;
  description: string;
  cta: string;
  link: string;
}

const paths: Path[] = [
  {
    icon: <Download size={24} />,
    title: "Deploy",
    persona: "For Organizations",
    description: "Run the full stack on your infrastructure with complete sovereignty.",
    cta: "View on GitHub",
    link: "https://github.com/COSS-India",
  },
  {
    icon: <Code size={24} />,
    title: "Integrate",
    persona: "For Developers",
    description: "Use APIs and SDKs to add Language AI to your applications.",
    cta: "Read Docs",
    link: "https://github.com/COSS-India/ai4i-core",
  },
  {
    icon: <Users size={24} />,
    title: "Contribute",
    persona: "For Communities",
    description: "Join data campaigns or contribute code to build inclusive AI.",
    cta: "Get Involved",
    link: "https://github.com/COSS-India/ai4i-contribute",
  },
];

const GetStartedSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30" id="get-started">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get Started
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Choose your path to Language AI adoption
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {paths.map((path, i) => (
            <motion.a
              key={path.title}
              href={path.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all group block"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4">
                {path.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{path.title}</h3>
              <p className="text-primary text-sm font-medium mb-2">{path.persona}</p>
              <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
              <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                {path.cta} <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Community Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/COSS-India" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Star on GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/COSS-India/ai4i-core/discussions" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-4 w-4" /> Join Discussion
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
