import { useEffect, useState } from 'react';
import { Cpu, HardDrive, Wifi, Battery, Zap } from 'lucide-react';

const SystemInfoPanel = () => {
  const [stats, setStats] = useState({
    cpu: 34,
    storage: 67,
    power: 100,
    network: 'Connected',
    status: 'ONLINE',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        cpu: Math.min(100, Math.max(20, prev.cpu + (Math.random() - 0.5) * 10)),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const StatBar = ({ value, label, icon: Icon }: { value: number; label: string; icon: React.ElementType }) => (
    <div className="flex items-center gap-2">
      <Icon className="w-3 h-3 text-primary/70" />
      <div className="flex-1">
        <div className="flex justify-between text-[10px] mb-0.5">
          <span className="text-primary/60 font-mono uppercase">{label}</span>
          <span className="text-primary font-mono">{Math.round(value)}%</span>
        </div>
        <div className="h-1 bg-nexa-dark rounded-full overflow-hidden border border-primary/20">
          <div 
            className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full transition-all duration-500 nexa-glow"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="nexa-panel p-3 w-48">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse nexa-glow" />
        <span className="text-[10px] text-primary/70 font-display tracking-widest uppercase">
          System Status
        </span>
      </div>

      {/* Status indicator */}
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-primary/20">
        <div className="flex items-center gap-1.5">
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-50" />
          </div>
          <span className="text-xs font-display text-primary tracking-wider">
            {stats.status}
          </span>
        </div>
        <Zap className="w-3 h-3 text-primary animate-pulse-glow" />
      </div>

      {/* Stats */}
      <div className="space-y-2">
        <StatBar value={stats.cpu} label="CPU" icon={Cpu} />
        <StatBar value={stats.storage} label="Storage" icon={HardDrive} />
        <StatBar value={stats.power} label="Power" icon={Battery} />
      </div>

      {/* Network status */}
      <div className="mt-2 pt-2 border-t border-primary/20 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Wifi className="w-3 h-3 text-primary" />
          <span className="text-[10px] text-primary/70 font-mono">Network</span>
        </div>
        <span className="text-[10px] text-green-400 font-mono uppercase">{stats.network}</span>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-8 h-8">
        <div className="absolute top-1.5 right-1.5 w-4 h-0.5 bg-primary/30" />
        <div className="absolute top-1.5 right-1.5 w-0.5 h-4 bg-primary/30" />
      </div>
    </div>
  );
};

export default SystemInfoPanel;
