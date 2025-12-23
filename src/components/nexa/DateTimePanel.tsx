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
    <div className="nexa-panel p-4 w-56 animate-flicker">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse nexa-glow" />
        <span className="text-xs text-primary/70 font-display tracking-widest uppercase">
          System Time
        </span>
      </div>

      {/* Date display */}
      <div className="flex items-baseline gap-3 mb-4">
        <div className="relative">
          <div className="text-5xl font-display text-primary nexa-glow-text">
            {date}
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-transparent" />
        </div>
        <div className="text-right">
          <div className="text-sm text-primary/80 font-display lowercase">
            {month}
          </div>
          <div className="text-xs text-primary/50 font-mono">
            {year}
          </div>
        </div>
      </div>

      {/* Day */}
      <div className="mb-4 pb-3 border-b border-primary/20">
        <div className="text-lg text-primary/90 font-display tracking-wide lowercase nexa-glow-text">
          {day}
        </div>
      </div>

      {/* Time display */}
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-display text-primary nexa-glow-text">{hours}</span>
          <span className="text-primary animate-pulse">:</span>
          <span className="text-2xl font-display text-primary nexa-glow-text">{minutes}</span>
          <span className="text-primary animate-pulse">:</span>
          <span className="text-lg font-display text-primary/70">{seconds}</span>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-8 h-8">
        <div className="absolute bottom-2 right-2 w-4 h-0.5 bg-primary/40" />
        <div className="absolute bottom-2 right-2 w-0.5 h-4 bg-primary/40" />
      </div>
    </div>
  );
};

export default DateTimePanel;
