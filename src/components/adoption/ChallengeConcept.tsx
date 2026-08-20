import { motion } from "framer-motion";
import { Building2, Landmark, Puzzle } from "lucide-react";

const ChallengeConcept = () => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="grid md:grid-cols-2">
        {/* LEFT — The Challenge */}
        <div className="bg-[#FAFAFA] px-10 py-11">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
              The Problem
            </p>
            <h2 className="mt-3 font-heading text-[22px] font-bold text-[#1A1A1A]">
              The challenge
            </h2>
            <p className="mt-4 max-w-[420px] text-[13.5px] leading-[1.65] text-[#6B7280]">
              Every institution independently solves compute, model access, and metering — before
              writing a single line of application logic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-8"
            aria-hidden="true"
          >
            {/* Row 1 — Departments */}
            <div className="grid grid-cols-3 gap-2">
              {["Dept A", "Dept B", "Dept C"].map((label) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-lg border border-[#E2E8F0] bg-white px-2 py-3"
                >
                  <Building2 size={18} strokeWidth={1.75} className="text-[#64748B]" />
                  <span className="mt-1.5 text-[10px] text-[#64748B]">{label}</span>
                </div>
              ))}
            </div>

            {/* Row 2 — Connectors */}
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex justify-center py-1">
                  <div className="h-4 w-0 border-l-[1.5px] border-dashed border-[#CBD5E1]" />
                </div>
              ))}
            </div>

            {/* Row 3 — Warning strip */}
            <div className="rounded-lg border-[1.5px] border-dashed border-[#DC2626] bg-[#FEF2F2] px-4 py-2.5 text-center">
              <span className="text-[11px] font-semibold text-[#DC2626]">
                No shared governance layer
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — The Concept */}
        <div className="bg-[#0041A5] px-10 py-11">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-heading text-[11px] font-bold uppercase tracking-[2px] text-[#93C5FD]">
              The Analogy
            </p>
            <h2 className="mt-3 font-heading text-[22px] font-bold text-white">The concept</h2>

            <blockquote className="mt-6 border-l-2 border-[#93C5FD] pl-[18px] text-[15px] italic leading-[1.6] text-white">
              No factory builds its own power plant. It connects to shared infrastructure — metered
              and accountable.
            </blockquote>

            <p className="mt-6 text-[13.5px] leading-[1.65] text-[#BFDBFE]">
              AI4I Orchestrate applies the same principle: shared, reusable building blocks — not
              every institution building its own.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-8"
            aria-hidden="true"
          >
            {/* Row 1 — Institutions */}
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-lg bg-white/10 px-2 py-3"
                >
                  <Landmark size={18} strokeWidth={1.75} className="text-[#BFDBFE]" />
                </div>
              ))}
            </div>

            {/* Row 2 — Convergence arrow */}
            <div className="flex justify-center py-1">
              <svg
                width="60"
                height="16"
                viewBox="0 0 60 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 2 L30 14 L56 2"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Row 3 — Resolution card */}
            <div className="flex items-center justify-center gap-2 rounded-[10px] bg-white px-4 py-3">
              <Puzzle size={18} strokeWidth={1.75} className="text-[#0041A5]" />
              <span className="text-[10.5px] font-bold text-[#0041A5]">Shared building block</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeConcept;
