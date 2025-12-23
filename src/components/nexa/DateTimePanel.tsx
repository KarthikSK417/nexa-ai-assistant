import { useEffect, useState } from 'react';

const DateTimePanel = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const day = dateTime.toLocaleDateString('en-US', { weekday: 'long' });
  const month = dateTime.toLocaleDateString('en-US', { month: 'long' });
  const date = dateTime.getDate();
  const year = dateTime.getFullYear();
  
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const seconds = dateTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="nexa-panel p-3 w-48 animate-flicker">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse nexa-glow" />
        <span className="text-[10px] text-primary/70 font-display tracking-widest uppercase">
          System Time
        </span>
      </div>

      {/* Date display */}
      <div className="flex items-baseline gap-2 mb-2">
        <div className="relative">
          <div className="text-3xl font-display text-primary nexa-glow-text">
            {date}
          </div>
          <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-transparent" />
        </div>
        <div className="text-right">
          <div className="text-xs text-primary/80 font-display lowercase">
            {month}
          </div>
          <div className="text-[10px] text-primary/50 font-mono">
            {year}
          </div>
        </div>
      </div>

      {/* Day */}
      <div className="mb-2 pb-2 border-b border-primary/20">
        <div className="text-sm text-primary/90 font-display tracking-wide lowercase nexa-glow-text">
          {day}
        </div>
      </div>

      {/* Time display */}
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-0.5">
          <span className="text-xl font-display text-primary nexa-glow-text">{hours}</span>
          <span className="text-primary animate-pulse text-sm">:</span>
          <span className="text-xl font-display text-primary nexa-glow-text">{minutes}</span>
          <span className="text-primary animate-pulse text-sm">:</span>
          <span className="text-sm font-display text-primary/70">{seconds}</span>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-6 h-6">
        <div className="absolute bottom-1.5 right-1.5 w-3 h-0.5 bg-primary/40" />
        <div className="absolute bottom-1.5 right-1.5 w-0.5 h-3 bg-primary/40" />
      </div>
    </div>
  );
};

export default DateTimePanel;
