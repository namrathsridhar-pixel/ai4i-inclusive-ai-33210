import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface IntroVideoProps {
  onComplete: () => void;
}

const IntroVideo = ({ onComplete }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEnding, setIsEnding] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().catch((err) => {
        console.error('Autoplay failed:', err);
      });
    };

    const handleError = () => {
      onComplete();
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.load();

    // Timeout fallback
    const timeout = setTimeout(() => {
      if (video.readyState < 3) {
        onComplete();
      }
    }, 8000);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  const handleVideoEnd = () => {
    setIsEnding(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  const handleSkip = () => {
    setIsEnding(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <>
      {!isEnding ? (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0a1628]"
          initial={{ opacity: 1 }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            src="/videos/intro-video.mp4"
          />
          
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 px-6 py-2 text-sm text-white/70 hover:text-white border border-white/30 hover:border-white/60 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
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
    </>
  );
};

export default IntroVideo;
