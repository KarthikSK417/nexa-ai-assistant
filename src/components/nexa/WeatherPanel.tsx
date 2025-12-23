import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';

const WeatherPanel = () => {
  const weather = {
    temp: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    wind: 12,
    location: 'System Location',
  };

  return (
    <div className="nexa-panel p-4 w-48">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse nexa-glow" />
        <span className="text-xs text-primary/70 font-display tracking-widest uppercase">
          Weather
        </span>
      </div>

      {/* Temperature display */}
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <div className="text-5xl font-display text-primary nexa-glow-text">
            {weather.temp}
          </div>
          <span className="absolute -top-1 -right-4 text-lg text-primary/70">°</span>
          <span className="absolute -top-0 -right-1 text-xs text-primary/50 font-mono">C</span>
        </div>
      </div>

      {/* Condition */}
      <div className="flex items-center justify-center gap-2 mb-4 pb-3 border-b border-primary/20">
        <Cloud className="w-5 h-5 text-primary/70" />
        <span className="text-xs text-primary/80 font-mono">{weather.condition}</span>
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="w-3 h-3 text-primary/60" />
            <span className="text-[10px] text-primary/50 font-mono uppercase">Humidity</span>
          </div>
          <span className="text-xs text-primary font-mono">{weather.humidity}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wind className="w-3 h-3 text-primary/60" />
            <span className="text-[10px] text-primary/50 font-mono uppercase">Wind</span>
          </div>
          <span className="text-xs text-primary font-mono">{weather.wind} km/h</span>
        </div>
      </div>

      {/* Decorative arc */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <circle
            cx="64"
            cy="64"
            r="40"
            fill="none"
            stroke="hsl(180 100% 50% / 0.2)"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
        </svg>
      </div>
    </div>
  );
};

export default WeatherPanel;
