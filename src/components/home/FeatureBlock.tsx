import { motion } from "framer-motion";
import { ArrowRight, Play, Github, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface FeatureBlockProps {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
  animation: React.ReactNode;
  videoUrl?: string;
  githubUrl?: string;
  discussUrl?: string;
  reversed?: boolean;
  blockLink: string;
}

const FeatureBlock = ({
  title,
  description,
  bullets,
  icon,
  animation,
  videoUrl,
  githubUrl,
  discussUrl,
  reversed,
  blockLink,
}: FeatureBlockProps) => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
      >
        {/* Animation/Visual Side */}
        <div className="w-full lg:w-1/2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-xl p-8 md:p-12 shadow-medium border border-border/50 aspect-video flex items-center justify-center relative overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center scale-125 md:scale-150">
              {animation}
            </div>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-soft">
              {icon}
            </div>
            <h3 className="font-heading font-bold text-2xl">{title}</h3>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

          <ul className="space-y-2 mb-6">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {videoUrl && (
              <button
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Play size={14} /> Watch Demo
              </button>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {discussUrl && (
              <a
                href={discussUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                <MessageSquare size={14} /> Discuss
              </a>
            )}
          </div>

          <Link to={blockLink} className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:gap-3 transition-all text-sm">
            Learn more about {title} <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>

      {videoUrl && (
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black" aria-describedby={undefined}>
            <VisuallyHidden>
              <DialogTitle>{title} Demo Video</DialogTitle>
            </VisuallyHidden>
            <div className="aspect-video w-full">
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title={`${title} Demo`}
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

export default FeatureBlock;