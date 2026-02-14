import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface MediaItem {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const mediaItems: MediaItem[] = [
  {
    title: "AI4I Request Lifecycle",
    thumbnail: "https://img.youtube.com/vi/NE_NID6OyzI/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/NE_NID6OyzI",
  },
  {
    title: "AI4I-Orchestrate",
    thumbnail: "https://img.youtube.com/vi/jEuKOasl0ws/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/jEuKOasl0ws",
  },
  {
    title: "AI4I-Observe",
    thumbnail: "https://img.youtube.com/vi/i7Tv5sLzic8/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/i7Tv5sLzic8",
  },
  {
    title: "AI4I-Contribute",
    thumbnail: "https://img.youtube.com/vi/_0KqImO7GMs/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/_0KqImO7GMs",
  },
  {
    title: "AI4I-Agentic Orchestration",
    thumbnail: "https://img.youtube.com/vi/SO_niJdR5jo/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/SO_niJdR5jo",
  },
  {
    title: "AI4I-Smart Model Routing",
    thumbnail: "https://img.youtube.com/vi/V0yHBLzyyCI/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/V0yHBLzyyCI",
  },
  {
    title: "AI4I-Runtime Orchestration",
    thumbnail: "https://img.youtube.com/vi/R8Vssp0ciIQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/R8Vssp0ciIQ",
  },
  {
    title: "AI4I-Model Versioning & Shadow Evaluation",
    thumbnail: "https://img.youtube.com/vi/KXAJSwym6AE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/KXAJSwym6AE",
  },
  {
    title: "AI4I-Domain Aware PII Guardrails",
    thumbnail: "https://img.youtube.com/vi/taTLuFZ2v8k/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/taTLuFZ2v8k",
  },
  {
    title: "AI4I-Service Unbundling",
    thumbnail: "https://img.youtube.com/vi/v5BguKfhDqA/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/v5BguKfhDqA",
  },
];

const MediaStrip = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mediaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setActiveVideo(item.videoUrl)}
                className="bg-card rounded-xl overflow-hidden shadow-medium hover:shadow-large transition-all cursor-pointer group"
              >
                <div className="aspect-video relative bg-foreground/10 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center shadow-large group-hover:bg-primary transition-colors"
                    >
                      <Play size={22} className="text-primary-foreground ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black" aria-describedby={undefined}>
          <VisuallyHidden>
            <DialogTitle>Video Player</DialogTitle>
          </VisuallyHidden>
          <div className="aspect-video w-full">
            {activeVideo && (
              <iframe
                src={`${activeVideo}?autoplay=1`}
                title="Video Player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MediaStrip;
