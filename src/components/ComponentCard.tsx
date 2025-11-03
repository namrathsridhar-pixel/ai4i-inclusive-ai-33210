import { Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ComponentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  ctaLink: string;
  onVideoClick?: () => void;
}

const ComponentCard = ({ title, description, icon, ctaText, ctaLink, onVideoClick }: ComponentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      className="h-full"
    >
      <Card className="h-full shadow-medium hover:shadow-large transition-all duration-500 relative overflow-hidden group">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <CardHeader className="relative">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mb-4 text-accent-foreground shadow-soft"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          {onVideoClick && (
            <button
              onClick={onVideoClick}
              className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden group/video cursor-pointer shadow-soft"
              aria-label={`Play ${title} video`}
            >
              {/* Animated pulse ring */}
              <div className="absolute inset-0 animate-pulse-soft opacity-0 group-hover/video:opacity-100">
                <div className="absolute inset-2 border-2 border-primary/30 rounded-lg" />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/video:bg-black/40 transition-all duration-300">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Play className="text-primary-foreground ml-1" size={28} fill="currentColor" />
                </motion.div>
              </div>
            </button>
          )}
        </CardContent>
        
        <CardFooter>
          <a href={ctaLink} className="w-full">
            <Button className="w-full font-medium relative overflow-hidden group/btn">
              <span className="relative z-10">{ctaText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ComponentCard;
