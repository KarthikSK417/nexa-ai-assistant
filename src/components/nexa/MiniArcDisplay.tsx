const MiniArcDisplay = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer ring */}
      <div className="absolute inset-0 animate-rotate-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(180 100% 50% / 0.3)"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      {/* Inner ring */}
      <div className="absolute inset-3 animate-rotate-reverse-fast">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(180 100% 50% / 0.5)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center">
        <div className="text-lg font-display text-primary nexa-glow-text">{value}</div>
        <div className="text-[8px] text-primary/50 font-mono uppercase tracking-wider">{label}</div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-8 rounded-full bg-primary/10 blur-md animate-pulse-glow" />
    </div>
  );
};

export default MiniArcDisplay;
