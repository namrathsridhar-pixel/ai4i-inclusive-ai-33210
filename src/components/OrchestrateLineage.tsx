import { motion } from "framer-motion";
import { Network, Zap } from "lucide-react";

/**
 * "From building block to running infrastructure"
 * Lineage visual: AI4I Orchestrate (foundational, outlined) -> AI Switch (deployed, filled).
 * Purely presentational, no CTAs or external links.
 */
const OrchestrateLineage = () => {
  return (
    <section className="px-4" style={{ background: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto overflow-hidden rounded-2xl"
        style={{
          maxWidth: "760px",
          background: "#F2F7FB",
          borderRadius: "16px",
          padding: "48px",
        }}
      >

      {/* Decorative node/line motif — top right */}
      <svg
        aria-hidden="true"
        width="180"
        height="140"
        viewBox="0 0 180 140"
        className="pointer-events-none absolute"
        style={{ top: 0, right: 0, opacity: 0.08 }}
      >
        <g stroke="#0041A5" strokeWidth="1" fill="none">
          <line x1="34" y1="30" x2="96" y2="18" />
          <line x1="96" y1="18" x2="146" y2="62" />
          <line x1="34" y1="30" x2="78" y2="96" />
          <line x1="78" y1="96" x2="146" y2="62" />
        </g>
        <g fill="#0041A5">
          <circle cx="34" cy="30" r="3" />
          <circle cx="96" cy="18" r="3" />
          <circle cx="146" cy="62" r="3" />
          <circle cx="78" cy="96" r="3" />
        </g>
      </svg>

      {/* Eyebrow */}
      <div
        className="font-heading"
        style={{
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "2px",
          color: "#0079C1",
          marginBottom: "12px",
        }}
      >
        DEPLOYMENT
      </div>

      {/* Heading */}
      <h3
        className="font-heading"
        style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#1A1A1A",
          lineHeight: 1.3,
          marginBottom: "20px",
        }}
      >
        From building block to deployed infrastructure
      </h3>

      {/* Lineage visual */}
      <div className="flex items-start" style={{ margin: "28px 0" }}>
        {/* Left node — Orchestrate */}
        <div className="flex flex-1 flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="flex items-center justify-center"
            style={{
              width: "56px",
              height: "56px",
              background: "#FFFFFF",
              border: "2px solid #0041A5",
              borderRadius: "12px",
            }}
          >
            <Network size={24} strokeWidth={2} color="#0041A5" />
          </motion.div>
          <div
            className="font-heading"
            style={{ fontSize: "14px", fontWeight: 700, color: "#1A1A1A", marginTop: "12px" }}
          >
            AI4I Orchestrate
          </div>
          <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "4px" }}>
            Language AI orchestration
          </div>
        </div>

        {/* Connector */}
        <div
          className="flex items-center justify-center"
          style={{ flex: "0 0 60px", height: "56px" }}
        >
          <svg width="60" height="12" viewBox="0 0 60 12" aria-hidden="true">
            <motion.line
              x1="0"
              y1="6"
              x2="48"
              y2="6"
              stroke="#0079C1"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              initial={{ strokeDashoffset: 48 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeInOut" }}
            />
            <motion.polygon
              points="48,1.5 58,6 48,10.5"
              fill="#0079C1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, delay: 0.9 }}
            />
          </svg>
        </div>

        {/* Right node — AI Switch */}
        <div className="flex flex-1 flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.95, ease: "easeOut" }}
            className="flex items-center justify-center"
            style={{
              width: "56px",
              height: "56px",
              background: "#0041A5",
              borderRadius: "12px",
            }}
          >
            <Zap size={24} strokeWidth={2} color="#FFFFFF" />
          </motion.div>
          <div
            className="font-heading"
            style={{ fontSize: "14px", fontWeight: 700, color: "#1A1A1A", marginTop: "12px" }}
          >
            AI Switch
          </div>
          <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "4px" }}>
            Governed AI access, run by the adopter
          </div>
        </div>
      </div>

      {/* Body */}
      <p
        style={{
          fontSize: "15px",
          color: "#374151",
          lineHeight: 1.7,
          maxWidth: "580px",
          marginTop: "24px",
        }}
      >
        AI4I Orchestrate is the language AI orchestration engine at the heart of AI4Inclusion's
        Core — the layer that governs how AI models are discovered, accessed, and consumed. It is
        deployed by an adopting organisation on its own infrastructure and operated there as AI
        Switch for the institutions onboarded onto it.
      </p>
      </motion.div>
    </section>
  );
};

export default OrchestrateLineage;
