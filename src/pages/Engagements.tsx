import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import VoiceraInterestForm from "@/components/VoiceraInterestForm";

const Engagements = () => {
  const [voiceraOpen, setVoiceraOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#0f2847] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            Engagements
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get Engaged
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Express your interest in AI4Inclusion initiatives and upcoming offerings.
          </p>
        </motion.div>

        {/* VoicERA Interest Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => setVoiceraOpen(true)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c] p-8 md:p-10 cursor-pointer hover:border-white/20 transition-all duration-300 shadow-2xl"
          >
            {/* Subtle background motif */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="engNodes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="1" fill="white" />
                    <line x1="30" y1="30" x2="60" y2="0" stroke="white" strokeWidth="0.3" />
                    <line x1="30" y1="30" x2="0" y2="60" stroke="white" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#engNodes)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Be Part of the Future of Voice AI
                </h2>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  Register your interest to explore upcoming advancements in intelligent Voice AI.
                </p>
              </div>
              <div className="flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors group-hover:translate-x-1 duration-300" />
              </div>
            </div>
          </motion.div>

          {/* More coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/50 text-sm">
              More engagement opportunities coming soon...
            </p>
          </motion.div>
        </div>
      </div>

      {/* VoicERA Interest Dialog */}
      <Dialog open={voiceraOpen} onOpenChange={setVoiceraOpen}>
        <DialogContent className="max-w-lg p-0 bg-background overflow-auto max-h-[90vh]">
          <VisuallyHidden>
            <DialogTitle>Show Interest in VoicERA</DialogTitle>
            <DialogDescription>Register your interest in VoicERA</DialogDescription>
          </VisuallyHidden>
          <div className="p-1">
            <VoiceraInterestForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Engagements;
