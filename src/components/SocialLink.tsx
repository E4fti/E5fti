import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-muted/50 border border-border transition-all duration-300 hover:border-primary/50 hover:bg-muted hover:glow-cyan hover:scale-110"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
      
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-card border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </a>
  );
};

export default SocialLink;
