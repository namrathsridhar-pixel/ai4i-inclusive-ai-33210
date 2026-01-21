import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface MediaItem {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const mediaItems: MediaItem[] = [
  {
    title: "AI4I Introduction",
    thumbnail: "https://img.youtube.com/vi/NE_NID6OyzI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/NE_NID6OyzI",
  },
  {
    title: "AI4I-Orchestrate Demo",
    thumbnail: "https://img.youtube.com/vi/5zLdk3-gvYU/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/5zLdk3-gvYU",
  },
  {
    title: "AI4I-Observe Demo",
    thumbnail: "https://img.youtube.com/vi/i7Tv5sLzic8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/i7Tv5sLzic8",
  },
];

const MediaStrip = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Watch Our Story
              <motion.span
                className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "140px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mediaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setActiveVideo(item.videoUrl)}
                className="bg-card rounded-xl overflow-hidden shadow-medium hover:shadow-large transition-all cursor-pointer group"
              >
                <div className="aspect-video relative bg-foreground/10 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-large group-hover:bg-primary transition-colors"
                    >
                      <Play size={24} className="text-primary-foreground ml-1" />
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
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black">
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
