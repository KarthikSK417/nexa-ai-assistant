import { MessageSquare, Phone, Video, Radio } from 'lucide-react';

const CommunicationPanel = () => {
  const comms = [
    { icon: MessageSquare, label: 'Messages', status: '3 new', active: true },
    { icon: Phone, label: 'Voice', status: 'Ready', active: false },
    { icon: Video, label: 'Video', status: 'Idle', active: false },
    { icon: Radio, label: 'Broadcast', status: 'Active', active: true },
  ];

  return (
    <div className="nexa-panel p-4 w-48">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse nexa-glow" />
        <span className="text-xs text-primary/70 font-display tracking-widest uppercase">
          Communication
        </span>
      </div>

      <div className="space-y-3">
        {comms.map((comm) => (
          <div
            key={comm.label}
            className="flex items-center justify-between p-2 rounded border border-primary/20 
                       bg-nexa-dark/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <comm.icon className="w-4 h-4 text-primary/70" />
                {comm.active && (
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                )}
              </div>
              <span className="text-[10px] text-primary/60 font-mono uppercase">{comm.label}</span>
            </div>
            <span className={`text-[9px] font-mono ${comm.active ? 'text-green-400' : 'text-primary/40'}`}>
              {comm.status}
            </span>
          </div>
        ))}
      </div>

      {/* Signal wave decoration */}
      <div className="absolute bottom-2 left-2 flex gap-0.5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 bg-primary/40 rounded-full animate-pulse"
            style={{
              height: `${8 + i * 4}px`,
              animationDelay: `${i * 100}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CommunicationPanel;
