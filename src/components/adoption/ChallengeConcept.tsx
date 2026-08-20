import { motion } from "framer-motion";

const scattered = [
  { text: "Dept A — own build", angle: -4, style: "left-[2%] top-[6px]" },
  { text: "Dept B — own build", angle: 3, style: "left-[26%] top-[52px]" },
  { text: "Dept C — own build", angle: -2, style: "left-[6%] top-[92px]" },
];

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
              The Challenge
            </p>
            <h2 className="mt-3 font-heading text-[22px] font-bold text-[#1A1A1A]">
              The challenge
            </h2>
            <p className="mt-4 max-w-[420px] text-[13.5px] leading-[1.65] text-[#6B7280]">
              Every institution independently solves compute, model access, and metering — before
              writing a single line of application logic.
            </p>
          </motion.div>

          <div className="relative mt-8 h-[150px]" aria-hidden="true">
            {scattered.map((card, i) => (
              <motion.div
                key={card.text}
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: card.angle }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={`absolute rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 text-[11px] text-[#64748B] shadow-[0_1px_4px_rgba(0,0,0,0.06)] ${card.style}`}
              >
                {card.text}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: 2 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="absolute right-[2%] top-[24px] rounded-lg border-[1.5px] border-dashed border-[#DC2626] bg-[#FEF2F2] px-4 py-2.5 text-[10.5px] font-semibold text-[#DC2626]"
            >
              no shared layer
            </motion.div>
          </div>
        </div>

        {/* RIGHT — The Concept */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="bg-[#0041A5] px-10 py-11"
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
      </div>
    </div>
  );
};

export default ChallengeConcept;
