import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroVideoProps {
  onComplete: () => void;
}

const IntroVideo = ({ onComplete }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEnding, setIsEnding] = useState(false);

  useEffect(() => {
    // Check if user has seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked, skip intro
        onComplete();
      });
    }
  }, [onComplete]);

  const handleVideoEnd = () => {
    setIsEnding(true);
    sessionStorage.setItem("hasSeenIntro", "true");
    // Allow transition animation to complete
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  const handleSkip = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setIsEnding(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isEnding ? (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0a1628]"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src="/videos/intro-video.mp4" type="video/mp4" />
          </video>
          
          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 px-6 py-2 text-sm text-white/70 hover:text-white border border-white/30 hover:border-white/60 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            Skip Intro
          </button>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0a1628] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
};

export default IntroVideo;
