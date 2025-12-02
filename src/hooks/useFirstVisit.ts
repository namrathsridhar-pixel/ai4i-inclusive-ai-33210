import { useState, useEffect } from "react";

const INTRO_PLAYED_KEY = "ai4i_intro_played";

export const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if intro has been played
    const hasPlayed = localStorage.getItem(INTRO_PLAYED_KEY);
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Show intro only if it hasn't been played and user doesn't prefer reduced motion
    setIsFirstVisit(!hasPlayed && !prefersReducedMotion);
    setIsChecking(false);
  }, []);

  const markAsVisited = () => {
    localStorage.setItem(INTRO_PLAYED_KEY, "true");
    setIsFirstVisit(false);
  };

  return { isFirstVisit, isChecking, markAsVisited };
};
