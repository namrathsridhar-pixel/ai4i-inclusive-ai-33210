interface SectionDividerProps {
  variant?: "wave" | "fade" | "angle";
  from?: string;
  to?: string;
  flip?: boolean;
}

const SectionDivider = ({
  variant = "wave",
  from = "transparent",
  to = "transparent",
  flip = false,
}: SectionDividerProps) => {
  if (variant === "fade") {
    return (
      <div
        className="h-24 w-full"
        style={{
          background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
        }}
      />
    );
  }

  if (variant === "angle") {
    return (
      <div className="relative h-16 w-full overflow-hidden" style={{ background: to }}>
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute w-full ${flip ? "rotate-180" : ""}`}
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <path d="M0 0L1440 64H0V0Z" fill={from} />
        </svg>
      </div>
    );
  }

  // Wave variant
  return (
    <div className="relative w-full overflow-hidden" style={{ background: to, height: "80px" }}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute w-full ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
        style={{ height: "100%" }}
      >
        <path
          d="M0 0L48 8C96 16 192 32 288 37.3C384 43 480 37 576 34.7C672 32 768 32 864 37.3C960 43 1056 53 1152 53.3C1248 53 1344 43 1392 37.3L1440 32V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V0Z"
          fill={from}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
