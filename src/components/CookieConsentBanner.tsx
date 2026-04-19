import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const STORAGE_KEY = "ai4i-cookie-consent";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Slight delay to avoid layout jank on first paint
        const t = window.setTimeout(() => setVisible(true), 600);
        return () => window.clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 sm:pb-6 sm:px-6 animate-fade-in"
    >
      <div className="mx-auto max-w-4xl rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <p className="text-sm text-foreground leading-relaxed flex-1">
          We use cookies including Google Analytics to understand how visitors use our site. By continuing to browse, you consent to our use of cookies. Read our{" "}
          <Link to="/privacy" className="text-primary underline hover:no-underline font-medium">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <Button onClick={dismiss} size="sm" className="whitespace-nowrap">
            Got it
          </Button>
          <button
            onClick={dismiss}
            aria-label="Dismiss cookie banner"
            className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
