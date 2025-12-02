import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX } from "lucide-react";

interface FullscreenIntroProps {
  onComplete: () => void;
  videoSources: {
    webm?: string;
    mp4: string;
  };
  posterImage?: string;
}

export const FullscreenIntro = ({ onComplete, videoSources, posterImage }: FullscreenIntroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt autoplay
    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay prevented:", error);
        // If autoplay fails, show play button or skip to completion
        handleComplete();
      }
    };

    playVideo();

    // Update progress
    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    // Handle video end
    const handleEnded = () => {
      handleComplete();
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handleComplete = () => {
    // Mark intro as played
    localStorage.setItem("ai4i_intro_played", "true");
    onComplete();
  };

  const handleSkip = () => {
    handleComplete();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        e.preventDefault();
        handleSkip();
      }
      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMute();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isMuted]);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#0a1628] flex items-center justify-center"
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          muted={isMuted}
          playsInline
          preload="auto"
          poster={posterImage}
          aria-label="AI4Inclusion Introduction Video"
        >
          {videoSources.webm && (
            <source src={videoSources.webm} type="video/webm" />
          )}
          <source src={videoSources.mp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Controls Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Skip Button - Top Right */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="absolute top-6 right-6 pointer-events-auto bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20"
            aria-label="Skip introduction"
          >
            Skip
            <X size={18} />
          </motion.button>

          {/* Mute Toggle - Top Left */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            onClick={toggleMute}
            className="absolute top-6 left-6 pointer-events-auto bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </motion.button>

          {/* Progress Bar - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Hint Text - Bottom Center */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm pointer-events-none"
          >
            Press ESC or SPACE to skip
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
