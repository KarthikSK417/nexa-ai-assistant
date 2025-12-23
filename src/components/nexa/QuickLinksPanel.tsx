import { 
  FileText, 
  Music, 
  Video, 
  Image, 
  Download,
  Mail,
  Globe,
  Settings,
  Terminal,
  Folder
} from 'lucide-react';

const QuickLinksPanel = () => {
  const links = [
    { icon: FileText, label: 'Documents', color: 'text-primary' },
    { icon: Video, label: 'Videos', color: 'text-primary/90' },
    { icon: Music, label: 'Music', color: 'text-primary/80' },
    { icon: Image, label: 'Images', color: 'text-primary/70' },
    { icon: Download, label: 'Downloads', color: 'text-primary/90' },
    { icon: Mail, label: 'Mail', color: 'text-primary' },
    { icon: Globe, label: 'Browser', color: 'text-primary/80' },
    { icon: Terminal, label: 'Terminal', color: 'text-primary/70' },
    { icon: Folder, label: 'Files', color: 'text-primary/90' },
    { icon: Settings, label: 'Settings', color: 'text-primary/80' },
  ];

  return (
    <div className="nexa-panel p-4 w-56">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse nexa-glow" />
        <span className="text-xs text-primary/70 font-display tracking-widest uppercase">
          Quick Access
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {links.map((link, index) => (
          <button
            key={link.label}
            className="group flex items-center gap-2 p-2 rounded border border-primary/20 
                       bg-nexa-dark/50 hover:bg-primary/10 hover:border-primary/40 
                       transition-all duration-300 hover:nexa-glow"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <link.icon className={`w-4 h-4 ${link.color} group-hover:text-primary transition-colors`} />
            <span className="text-[10px] text-primary/60 font-mono uppercase group-hover:text-primary/90 transition-colors truncate">
              {link.label}
            </span>
          </button>
        ))}
      </div>

      {/* Connection lines decoration */}
      <div className="absolute -right-3 top-1/4 w-3 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
      <div className="absolute -right-3 top-1/2 w-3 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
      <div className="absolute -right-3 top-3/4 w-3 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
  );
};

export default QuickLinksPanel;
