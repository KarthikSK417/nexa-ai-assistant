import ArcReactor from './ArcReactor';
import DateTimePanel from './DateTimePanel';
import SystemInfoPanel from './SystemInfoPanel';
import QuickLinksPanel from './QuickLinksPanel';
import WeatherPanel from './WeatherPanel';
import CommunicationPanel from './CommunicationPanel';
import MiniArcDisplay from './MiniArcDisplay';

const NexaInterface = () => {
  return (
    <div className="fixed inset-0 bg-background nexa-grid-bg overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Header */}
      <header className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          <div className="w-16 h-0.5 bg-gradient-to-l from-primary/50 to-transparent" />
          <h1 className="text-2xl font-display text-primary tracking-[0.3em] nexa-glow-text">
            NEXA
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
        <p className="text-center text-[10px] text-primary/50 font-mono mt-1 tracking-widest">
          ADVANCED AI ASSISTANT INTERFACE
        </p>
      </header>

      {/* Main content grid */}
      <div className="relative h-full flex items-center justify-center">
        
        {/* Left column - stacked panels */}
        <div className="absolute left-6 top-24 bottom-16 flex flex-col justify-between">
          {/* Top left panels */}
          <div className="flex flex-col gap-3">
            <DateTimePanel />
            <SystemInfoPanel />
          </div>
          
          {/* Bottom left - Communication */}
          <div>
            <CommunicationPanel />
          </div>
          
          {/* Connecting line decoration */}
          <div className="absolute -right-6 top-1/3 w-6 flex items-center">
            <div className="w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
            <div className="w-2 h-2 rounded-full bg-primary/30 -ml-1" />
          </div>
        </div>

        {/* Center - Arc Reactor */}
        <div className="relative z-10">
          <ArcReactor />
          
          {/* Status indicators around reactor */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="text-[10px] text-primary/70 font-mono tracking-wider">
              SYSTEM ACTIVE
            </div>
          </div>
          
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
            <div className="text-[10px] text-primary/50 font-mono tracking-wider">
              ALL SYSTEMS NOMINAL
            </div>
          </div>
        </div>

        {/* Right column - stacked panels */}
        <div className="absolute right-6 top-24 bottom-16 flex flex-col justify-between">
          {/* Top right panels */}
          <div className="flex flex-col gap-3">
            <QuickLinksPanel />
            <WeatherPanel />
          </div>
          
          {/* Bottom right - Mini displays */}
          <div className="flex gap-3 justify-end">
            <MiniArcDisplay label="Memory" value="87%" />
            <MiniArcDisplay label="Tasks" value="12" />
          </div>
          
          {/* Connecting line decoration */}
          <div className="absolute -left-6 top-1/3 w-6 flex items-center">
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <div className="w-full h-0.5 bg-gradient-to-l from-primary/30 to-primary/10 -ml-1" />
          </div>
        </div>

        {/* Top corners - decorative elements */}
        <div className="absolute top-20 left-6">
          <div className="w-20 h-20">
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <path
                d="M 0 40 Q 0 0 40 0"
                fill="none"
                stroke="hsl(180 100% 50% / 0.3)"
                strokeWidth="2"
              />
              <circle cx="40" cy="0" r="3" fill="hsl(180 100% 50% / 0.5)" />
            </svg>
          </div>
        </div>

        <div className="absolute top-20 right-6">
          <div className="w-20 h-20">
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <path
                d="M 80 40 Q 80 0 40 0"
                fill="none"
                stroke="hsl(180 100% 50% / 0.3)"
                strokeWidth="2"
              />
              <circle cx="40" cy="0" r="3" fill="hsl(180 100% 50% / 0.5)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer status bar */}
      <footer className="absolute bottom-0 left-0 right-0 h-8 flex items-center justify-center gap-8 bg-nexa-dark/50 border-t border-primary/20">
        <span className="text-[9px] text-primary/50 font-mono">NEXA v2.0.1</span>
        <span className="text-[9px] text-primary/50 font-mono">|</span>
        <span className="text-[9px] text-green-400/70 font-mono">● CONNECTED</span>
        <span className="text-[9px] text-primary/50 font-mono">|</span>
        <span className="text-[9px] text-primary/50 font-mono">SECURE CHANNEL</span>
      </footer>
    </div>
  );
};

export default NexaInterface;
