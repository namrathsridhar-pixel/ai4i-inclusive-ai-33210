import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface VideoHeroBannerProps {
  videoSources: {
    webm?: string;
    mp4: string;
  };
  posterImage?: string;
  isDocked?: boolean;
}

export const VideoHeroBanner = ({ videoSources, posterImage, isDocked = false }: VideoHeroBannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play the loop when docked
    if (isDocked) {
      video.play().catch(err => console.log("Video play prevented:", err));
    }
  }, [isDocked]);

  return (
    <motion.div
      initial={isDocked ? { scale: 0.8, opacity: 0 } : { opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 0.9, 0.35, 1],
      }}
      className="absolute inset-y-0 right-0 w-2/5 pointer-events-none select-none overflow-hidden rounded-lg"
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-right-top brightness-105 contrast-110"
        muted
        loop
        playsInline
        preload="auto"
        poster={posterImage}
        aria-hidden="true"
      >
        {videoSources.webm && (
          <source src={videoSources.webm} type="video/webm" />
        )}
        <source src={videoSources.mp4} type="video/mp4" />
      </video>

      {/* Gradient overlay to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a1628]/60" aria-hidden="true" />
      
      {/* Subtle glow effect */}
      <motion.div 
        className="absolute inset-0 blur-3xl opacity-0"
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(ellipse at 65% 50%, rgba(96, 165, 250, 0.3), transparent 60%)',
        }}
      />
    </motion.div>
  );
};
