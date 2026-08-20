import { motion } from "framer-motion";
import { Building2, Zap } from "lucide-react";

const models = ["Sovereign Models", "Open-Weight Models"];

const functionPills = [
  "Onboard",
  "Register",
  "Discover",
  "Allocate",
  "Authenticate",
  "Prioritise",
  "Route",
  "Monitor",
  "Meter",
];

const institutions = [
  { label: "Citizen services" },
  { label: "Health" },
  { label: "Education" },
];

const TOP_COLOR = "#93C5FD";
const BOTTOM_COLOR = "#0079C1";

const Arrow = ({ color, left }: { color: string; left: string }) => (
  <span
    className="absolute bottom-0 -translate-x-1/2"
    style={{
      left,
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: `7px solid ${color}`,
    }}
  />
);

const PulseDot = ({
  color,
  lefts,
  tops,
  delay,
  repeatDelay = 4,
}: {
  color: string;
  lefts: string[];
  tops: string[];
  delay: number;
  repeatDelay?: number;
}) => (
  <motion.span
    className="absolute z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
    style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
    initial={{ opacity: 0 }}
    animate={{
      left: lefts,
      top: tops,
      opacity: [0, 1, 1, 1, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay,
      ease: "linear",
      times: [0, 0.25, 0.5, 0.75, 1],
    }}
  />
);


const AdoptionLineage = () => {
  return (
    <div className="rounded-[20px] bg-card p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] md:p-14">
      <div className="relative mx-auto max-w-[520px]">
        {/* Top row: Institutions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-between"
        >
          {institutions.map((inst) => (
            <div
              key={inst.label}
              className="flex w-[130px] flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-brand-cyan bg-card py-3 text-center"
            >
              <Building2 size={20} className="text-brand-cyan" strokeWidth={2} />
              <span className="font-heading text-xs font-bold text-brand-ink">{inst.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Connector: institutions -> center node */}
        <div className="relative h-[70px] w-full">
          {["12.5%", "50%", "87.5%"].map((l) => (
            <span
              key={l}
              className="absolute top-0 h-[35px] w-[1.5px]"
              style={{ left: l, backgroundColor: TOP_COLOR }}
            />
          ))}
          <span
            className="absolute h-[1.5px]"
            style={{ top: 35, left: "12.5%", right: "12.5%", backgroundColor: TOP_COLOR }}
          />
          <span
            className="absolute w-[1.5px]"
            style={{ top: 35, height: 28, left: "50%", backgroundColor: TOP_COLOR }}
          />
          <Arrow color={TOP_COLOR} left="50%" />
          <PulseDot
            color="#0079C1"
            lefts={["12.5%", "12.5%", "31%", "50%", "50%"]}
            tops={["0px", "35px", "35px", "35px", "70px"]}
            delay={0}
          />
          <PulseDot
            color="#0079C1"
            lefts={["50%", "50%", "50%", "50%", "50%"]}
            tops={["0px", "35px", "35px", "35px", "70px"]}
            delay={2}
          />
          <PulseDot
            color="#0079C1"
            lefts={["87.5%", "87.5%", "69%", "50%", "50%"]}
            tops={["0px", "35px", "35px", "35px", "70px"]}
            delay={4}
          />
        </div>



        {/* Center node: AI4I Orchestrate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[340px]"
        >
          <div className="animate-pulse-glow absolute inset-0 rounded-2xl bg-brand-blue/20" />
          <div className="relative flex flex-col items-center justify-center gap-1 rounded-2xl bg-brand-blue px-6 py-6 text-center shadow-[0_10px_30px_-12px_rgba(0,65,165,0.5)]">
            <Zap size={26} className="text-white" strokeWidth={2} />
            <span className="font-heading text-xl font-bold text-white">AI Switch</span>

            <div className="mt-3 grid w-full grid-cols-3 gap-1.5">
              {functionPills.map((p) => (
                <span
                  key={p}
                  className="rounded-md bg-white/[0.15] px-1.5 py-1 text-[10px] leading-none text-white"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Connector: center node -> models */}
        <div className="relative h-[70px] w-full">
          <span
            className="absolute w-[1.5px]"
            style={{ top: 0, height: 35, left: "50%", backgroundColor: BOTTOM_COLOR }}
          />
          <span
            className="absolute h-[1.5px]"
            style={{ top: 35, left: "35%", right: "36%", backgroundColor: BOTTOM_COLOR }}
          />
          {["35%", "64%"].map((l) => (
            <span
              key={l}
              className="absolute w-[1.5px]"
              style={{ top: 35, height: 28, left: l, backgroundColor: BOTTOM_COLOR }}
            />
          ))}
          <Arrow color={BOTTOM_COLOR} left="35%" />
          <Arrow color={BOTTOM_COLOR} left="64%" />
          <PulseDot
            color="#0079C1"
            lefts={["50%", "50%", "42%", "35%", "35%"]}
            tops={["0px", "35px", "35px", "35px", "70px"]}
            delay={1}
          />
          <PulseDot
            color="#0079C1"
            lefts={["50%", "50%", "57%", "64%", "64%"]}
            tops={["0px", "35px", "35px", "35px", "70px"]}
            delay={4}
          />
        </div>

        {/* Bottom: Hosted Models */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
          className="w-full text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {models.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: 0.85 + i * 0.1, ease: "easeOut" }}
                className="rounded-full border border-border bg-brand-mist px-4 py-2 text-xs font-medium text-brand-ink"
              >
                {m}
              </motion.span>
            ))}
          </div>
          <p className="mt-4 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
            Hosted Models
          </p>
        </motion.div>

      </div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        className="mx-auto mt-10 max-w-[620px] text-left leading-relaxed text-muted-foreground"
      >
        <span className="font-semibold text-brand-ink">AI Switch</span> verifies the identity
        of every request, checks what the requester is entitled to, and meters consumption of the
        models it routes to in real time — giving adopters complete visibility and control over how
        their AI infrastructure is used.
      </motion.p>
    </div>
  );
};

export default AdoptionLineage;
