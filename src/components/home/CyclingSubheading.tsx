import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play } from "lucide-react";

const translations = [
  { text: "A Future Where Language Is No Barrier", lang: "English", dir: "ltr" },
  { text: "ভাষাৰ কোনো বাধা নথকা ভৱিষ্যৎ", lang: "Assamese", dir: "ltr" },
  { text: "ভাষা যেখানে আর বাধা নয় এমন এক ভবিষ্যৎ", lang: "Bengali", dir: "ltr" },
  { text: "रोंगौथाव दं भाषा नङा बादि", lang: "Bodo", dir: "ltr" },
  { text: "इक ऐसा भविक्ख जित्थै भाशा कोई रोक नेईं", lang: "Dogri", dir: "ltr" },
  { text: "એક એવું ભવિષ્ય જ્યાં ભાષા કોઈ અવરોધ ન બને", lang: "Gujarati", dir: "ltr" },
  { text: "एक ऐसा भविष्य जहाँ भाषा कोई बाधा न हो", lang: "Hindi", dir: "ltr" },
  { text: "ಭಾಷೆ ಯಾವುದೇ ಅಡ್ಡಿಯಾಗದ ಭವಿಷ್ಯ", lang: "Kannada", dir: "ltr" },
  { text: "یہِ مستقبل یَتھ زَبان کانہٕ رُکاوٹ نہٕ بَنِ", lang: "Kashmiri", dir: "rtl" },
  { text: "एक असो भविश्य जंय भास आडो येना", lang: "Konkani", dir: "ltr" },
  { text: "एगो अइसन भविष्य जहाँ भाषा कोनो बाधा नै हो", lang: "Maithili", dir: "ltr" },
  { text: "ഭാഷ ഒരു തടസ്സമാകാത്ത ഒരു ഭാവി", lang: "Malayalam", dir: "ltr" },
  { text: "লোন অমা চাংফবদ ওইদবা তুংগী", lang: "Manipuri", dir: "ltr" },
  { text: "जिथे भाषा अडथळा ठरत नाही असे भविष्य", lang: "Marathi", dir: "ltr" },
  { text: "जहाँ भाषा कुनै बाधा हुँदैन यस्तो भविष्य", lang: "Nepali", dir: "ltr" },
  { text: "ଯେଉଁଠାରେ ଭାଷା ବାଧା ନୁହେଁ ସେମିତି ଭବିଷ୍ୟତ", lang: "Odia", dir: "ltr" },
  { text: "ਇੱਕ ਭਵਿੱਖ ਜਿੱਥੇ ਭਾਸ਼ਾ ਕੋਈ ਰੁਕਾਵਟ ਨਹੀਂ", lang: "Punjabi", dir: "ltr" },
  { text: "यत्र भाषा न अवरोधः भवति तादृशं भविष्यम्", lang: "Sanskrit", dir: "ltr" },
  { text: "ᱡᱟᱦᱟᱸ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱹᱫᱷᱟ ᱵᱟᱭ ᱠᱟᱱᱟ", lang: "Santali", dir: "ltr" },
  { text: "اهڙو مستقبل جتي ٻولي ڪا رڪاوٽ نه هجي", lang: "Sindhi", dir: "rtl" },
  { text: "மொழி தடையாக இல்லாத ஒரு எதிர்காலம்", lang: "Tamil", dir: "ltr" },
  { text: "భాష అడ్డంకి కాని భవిష్యత్తు", lang: "Telugu", dir: "ltr" },
  { text: "ایک ایسا مستقبل جہاں زبان کوئی رکاوٹ نہ ہو", lang: "Urdu", dir: "rtl" },
  { text: "Un futuro donde el idioma no sea una barrera", lang: "Spanish", dir: "ltr" },
  { text: "Un avenir où la langue n'est plus une barrière", lang: "French", dir: "ltr" },
  { text: "Eine Zukunft, in der Sprache keine Barriere ist", lang: "German", dir: "ltr" },
  { text: "语言不再成为障碍的未来", lang: "Chinese", dir: "ltr" },
  { text: "言語が障壁とならない未来", lang: "Japanese", dir: "ltr" },
  { text: "언어가 장벽이 되지 않는 미래", lang: "Korean", dir: "ltr" },
  { text: "مستقبل لا تكون فيه اللغة عائقًا", lang: "Arabic", dir: "rtl" },
  { text: "Будущее, где язык — не преграда", lang: "Russian", dir: "ltr" },
  { text: "Um futuro onde a língua não seja uma barreira", lang: "Portuguese", dir: "ltr" },
];

const DISPLAY_DURATION = 3500; // 3.5 seconds
const CROSSFADE_DURATION = 0.6; // 0.6 seconds

const CyclingSubheading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Cycle through translations
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % translations.length);
    }, DISPLAY_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const handlePauseToggle = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePauseToggle();
    }
  }, [handlePauseToggle]);

  // If reduced motion is preferred, show English only
  if (prefersReducedMotion) {
    return (
      <div className="text-center">
        <span className="text-3xl md:text-4xl xl:text-5xl text-blue-200/90 mt-2 block font-medium">
          A Future Where Language Is No Barrier
        </span>
        <span className="text-sm md:text-base text-blue-300/70 mt-2 block font-medium tracking-wide">
          English
        </span>
      </div>
    );
  }

  const current = translations[currentIndex];

  return (
    <div
      className="relative mt-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Accessible live region with fixed height to prevent layout shift */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="flex flex-col items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: CROSSFADE_DURATION, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="h-[4rem] md:h-[5rem] xl:h-[6rem] flex items-center justify-center w-full">
              <span
                dir={current.dir}
                className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-blue-200/90 block font-medium drop-shadow-[0_0_20px_rgba(147,197,253,0.3)] text-center"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                }}
              >
                {current.text}
              </span>
            </div>
            {/* Language label */}
            <span className="text-sm md:text-base text-blue-300/70 mt-2 font-medium tracking-wide">
              {current.lang}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pause/Play control */}
      <button
        onClick={handlePauseToggle}
        onKeyDown={handleKeyDown}
        aria-label={isPaused ? "Play translation cycling" : "Pause translation cycling"}
        className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        style={{ opacity: isPaused ? 1 : undefined }}
      >
        {isPaused ? (
          <Play size={14} className="text-blue-200/70" />
        ) : (
          <Pause size={14} className="text-blue-200/70" />
        )}
      </button>

      {/* Noscript fallback */}
      <noscript>
        <span className="text-3xl md:text-4xl xl:text-5xl text-blue-200/90 block font-medium">
          A Future Where Language Is No Barrier
        </span>
      </noscript>
    </div>
  );
};

export default CyclingSubheading;
