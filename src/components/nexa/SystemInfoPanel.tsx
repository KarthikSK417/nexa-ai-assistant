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
    <div className="flex items-center gap-3">
      <Icon className="w-4 h-4 text-primary/70" />
      <div className="flex-1">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-primary/60 font-mono uppercase">{label}</span>
          <span className="text-primary font-mono">{Math.round(value)}%</span>
        </div>
        <div className="h-1.5 bg-nexa-dark rounded-full overflow-hidden border border-primary/20">
          <div 
            className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full transition-all duration-500 nexa-glow"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="nexa-panel p-4 w-56">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse nexa-glow" />
        <span className="text-xs text-primary/70 font-display tracking-widest uppercase">
          System Status
        </span>
      </div>

      {/* Status indicator */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-primary/20">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-50" />
          </div>
          <span className="text-sm font-display text-primary tracking-wider">
            {stats.status}
          </span>
        </div>
        <Zap className="w-4 h-4 text-primary animate-pulse-glow" />
      </div>

      {/* Stats */}
      <div className="space-y-4">
        <StatBar value={stats.cpu} label="CPU Usage" icon={Cpu} />
        <StatBar value={stats.storage} label="Storage" icon={HardDrive} />
        <StatBar value={stats.power} label="Power" icon={Battery} />
      </div>

      {/* Network status */}
      <div className="mt-4 pt-3 border-t border-primary/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-primary" />
          <span className="text-xs text-primary/70 font-mono">Network</span>
        </div>
        <span className="text-xs text-green-400 font-mono uppercase">{stats.network}</span>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-12 h-12">
        <div className="absolute top-2 right-2 w-6 h-0.5 bg-primary/30" />
        <div className="absolute top-2 right-2 w-0.5 h-6 bg-primary/30" />
      </div>
    </div>
  );
};

export default SystemInfoPanel;
