import { useEffect, useState } from 'react';

const ArcReactor = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="relative w-80 h-80 lg:w-96 lg:h-96">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      
      {/* Outermost ring with segments */}
      <div className="absolute inset-0 animate-rotate-slow">
        <div className="absolute inset-2 rounded-full border border-primary/30" />
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-4 bg-primary/60 rounded-full"
            style={{
              left: '50%',
              top: '4px',
              transform: `translateX(-50%) rotate(${i * 15}deg)`,
              transformOrigin: '50% 180px',
            }}
          />
        ))}
      </div>

      {/* Second ring - rotating opposite */}
      <div className="absolute inset-6 animate-rotate-reverse-slow">
        <div className="absolute inset-0 rounded-full border-2 border-primary/40" />
        {[...Array(36)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-2 bg-primary/50"
            style={{
              left: '50%',
              top: '2px',
              transform: `translateX(-50%) rotate(${i * 10}deg)`,
              transformOrigin: '50% 142px',
            }}
          />
        ))}
      </div>

      {/* Third ring with dashed pattern */}
      <div className="absolute inset-12 animate-rotate-medium">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="hsl(180 100% 50% / 0.3)"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      {/* Inner ring with tick marks */}
      <div className="absolute inset-16 animate-rotate-reverse-fast">
        <div className="absolute inset-0 rounded-full border border-primary/50" />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-6 bg-gradient-to-b from-primary to-primary/30 rounded-full"
            style={{
              left: '50%',
              top: '0px',
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
              transformOrigin: '50% 96px',
            }}
          />
        ))}
      </div>

      {/* Central core ring */}
      <div className="absolute inset-24 animate-rotate-fast">
        <div className="absolute inset-0 rounded-full border-2 border-primary animate-breathing" />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-3 bg-primary rounded-full nexa-glow"
            style={{
              left: '50%',
              top: '2px',
              transform: `translateX(-50%) rotate(${i * 45}deg)`,
              transformOrigin: '50% 62px',
            }}
          />
        ))}
      </div>

      {/* Inner core */}
      <div className="absolute inset-32 rounded-full bg-gradient-radial from-primary/20 to-transparent animate-pulse-glow">
        <div className="absolute inset-2 rounded-full border border-primary/60 bg-nexa-dark/80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-primary font-display text-xs tracking-widest nexa-glow-text">
              NEXA
            </div>
            <div className="w-8 h-0.5 bg-primary/40 mx-auto my-1" />
            <div className="text-primary/70 font-mono text-[10px]">
              {formatTime(time)}
            </div>
          </div>
        </div>
      </div>

      {/* Glowing center dot */}
      <div className="absolute inset-[46%] rounded-full bg-primary/30 blur-sm animate-pulse" />
    </div>
  );
};

export default ArcReactor;
