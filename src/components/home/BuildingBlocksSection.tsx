import { motion } from "framer-motion";
import { Globe, BarChart3, Users, ArrowRight, Play, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Block {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  videoUrl?: string;
  githubUrl: string;
  learnMorePath: string;
}

const blocks: Block[] = [
  {
    id: "orchestrate",
    title: "AI4I-Orchestrate",
    tagline: "The Runtime Engine",
    description: "Unified API layer that routes inference to the best-fit models based on language, cost, and policy. Single surface for all Language AI capabilities.",
    icon: <Globe size={24} />,
    color: "from-primary to-secondary",
    videoUrl: "https://www.youtube.com/embed/5zLdk3-gvYU",
    githubUrl: "https://github.com/COSS-India/ai4i-core",
    learnMorePath: "/building-blocks#ai4i-core",
  },
  {
    id: "observe",
    title: "AI4I-Observe",
    tagline: "Monitoring & Analytics",
    description: "Real-time telemetry, quality drift detection, and governance dashboards. Actionable insights for production Language AI systems.",
    icon: <BarChart3 size={24} />,
    color: "from-cyan-500 to-blue-600",
    videoUrl: "https://www.youtube.com/embed/i7Tv5sLzic8",
    githubUrl: "https://github.com/COSS-India/observe",
    learnMorePath: "/building-blocks#observe",
  },
  {
    id: "contribute",
    title: "AI4I-Contribute",
    tagline: "Data Collection",
    description: "Large-scale, participatory dataset creation across regions and dialects. Mobile-friendly collection with built-in validation workflows.",
    icon: <Users size={24} />,
    color: "from-green-500 to-emerald-600",
    videoUrl: "https://www.youtube.com/embed/_0KqImO7GMs",
    githubUrl: "https://github.com/COSS-India/ai4i-contribute",
    learnMorePath: "/building-blocks#contribute",
  },
];

const BuildingBlocksSection = () => {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <>
      <section className="py-24 px-4 bg-background" id="building-blocks">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Building Blocks
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Modular, open-source components for the complete Language AI lifecycle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {blocks.map((block, i) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-medium transition-all group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${block.color} flex items-center justify-center text-white mb-5`}>
                  {block.icon}
                </div>
                
                <h3 className="font-heading font-bold text-xl mb-1">{block.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{block.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {block.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  {block.videoUrl && (
                    <button
                      onClick={() => setActiveVideo({ url: block.videoUrl!, title: block.title })}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-muted text-foreground rounded-md text-xs font-medium hover:bg-muted/80 transition-colors"
                    >
                      <Play size={12} /> Demo
                    </button>
                  )}
                  <a
                    href={block.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-muted text-foreground rounded-md text-xs font-medium hover:bg-muted/80 transition-colors"
                  >
                    <Github size={12} /> GitHub
                  </a>
                </div>

                <Link 
                  to={block.learnMorePath}
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {activeVideo && (
        <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black" aria-describedby={undefined}>
            <VisuallyHidden>
              <DialogTitle>{activeVideo.title} Demo</DialogTitle>
            </VisuallyHidden>
            <div className="aspect-video w-full">
              <iframe
                src={`${activeVideo.url}?autoplay=1`}
                title={`${activeVideo.title} Demo`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default BuildingBlocksSection;
