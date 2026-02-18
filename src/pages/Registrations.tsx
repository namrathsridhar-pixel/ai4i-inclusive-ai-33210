import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const Registrations = () => {
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
            Registrations
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Registrations
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Registration for past AI4Inclusion sessions and panel discussions.
          </p>
        </motion.div>

        {/* Registration Card - Concluded */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c] p-8 md:p-10 opacity-70 shadow-2xl"
          >
            {/* Subtle background motif */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="nodes" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="1" fill="white" />
                    <line x1="30" y1="30" x2="60" y2="0" stroke="white" strokeWidth="0.3" />
                    <line x1="30" y1="30" x2="0" y2="60" stroke="white" strokeWidth="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#nodes)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Mic className="w-7 h-7 text-white/50" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold tracking-widest text-white/50 uppercase bg-white/5 px-2.5 py-1 rounded-full">
                    India AI Impact Summit 2026
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest text-white/70 uppercase bg-white/10 px-2.5 py-1 rounded-full">
                    Concluded
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white/70 leading-tight">
                  Panel Discussion: A Billion Voices, One AI
                </h2>
                <p className="text-sm md:text-base text-white/40 leading-relaxed">
                  How Language Tech Transforms Nations — Panel Discussion at Room 16, Bharat Mandapam, New Delhi.
                </p>
                <div className="flex items-center gap-4 pt-1 text-xs text-white/50">
                   <span>📅 Feb 16, 2026 · 11:30 AM</span>
                   <span>📍 Room 16, Bharat Mandapam, New Delhi</span>
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
