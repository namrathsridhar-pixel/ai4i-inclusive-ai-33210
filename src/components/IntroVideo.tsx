import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface IntroVideoProps {
  onComplete: () => void;
}

const IntroVideo = ({ onComplete }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEnding, setIsEnding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      setIsLoading(false);
      video.play().catch((err) => {
        console.error('Autoplay failed:', err);
      });
    };

    // Check if already ready
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
    }

    video.addEventListener('error', () => {
      setIsLoading(false);
      onComplete();
    }, { once: true });

    // Timeout fallback - skip after 10 seconds if video won't load
    const timeout = setTimeout(() => {
      if (isLoading) {
        onComplete();
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [onComplete, isLoading]);

  const handleVideoEnd = () => {
    setIsEnding(true);
    window.scrollTo(0, 0);
    setTimeout(() => onComplete(), 800);
  };

  const handleSkip = () => {
    setIsEnding(true);
    window.scrollTo(0, 0);
    setTimeout(() => onComplete(), 500);
  };

  return (
    <>
      {!isEnding ? (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0a1628]"
          initial={{ opacity: 1 }}
        >
          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
                <span className="text-white/50 text-sm">Loading...</span>
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            muted
            playsInline
            preload="auto"
            autoPlay
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
