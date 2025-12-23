import { MessageSquare, Phone, Video, Radio } from 'lucide-react';

const CommunicationPanel = () => {
  const comms = [
    { icon: MessageSquare, label: 'Messages', status: '3 new', active: true },
    { icon: Phone, label: 'Voice', status: 'Ready', active: false },
    { icon: Video, label: 'Video', status: 'Idle', active: false },
    { icon: Radio, label: 'Broadcast', status: 'Active', active: true },
  ];

  return (
    <div className="nexa-panel p-3 w-48">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse nexa-glow" />
        <span className="text-[10px] text-primary/70 font-display tracking-widest uppercase">
          Communication
        </span>
      </div>

      <div className="space-y-1.5">
        {comms.map((comm) => (
          <div
            key={comm.label}
            className="flex items-center justify-between p-1.5 rounded border border-primary/20 
                       bg-nexa-dark/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <comm.icon className="w-3 h-3 text-primary/70" />
                {comm.active && (
                  <div className="absolute -top-0.5 -right-0.5 w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                )}
              </div>
              <span className="text-[9px] text-primary/60 font-mono uppercase">{comm.label}</span>
            </div>
            <span className={`text-[8px] font-mono ${comm.active ? 'text-green-400' : 'text-primary/40'}`}>
              {comm.status}
            </span>
          </div>
        ))}
      </div>

      {/* Signal wave decoration */}
      <div className="absolute bottom-1.5 left-1.5 flex gap-0.5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 bg-primary/40 rounded-full animate-pulse"
            style={{
              height: `${6 + i * 3}px`,
              animationDelay: `${i * 100}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunicationPanel;
