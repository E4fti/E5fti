import { ExternalLink } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

const LinkButton = ({ href, title, description, icon: Icon }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full border-gradient overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:glow-gradient"
    >
      <div className="relative flex items-center gap-4 px-5 py-4 bg-card rounded-lg">
        {/* Left icon */}
        {Icon && (
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 border border-border group-hover:border-primary/30 transition-colors duration-300">
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground group-hover:text-glow transition-all duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground truncate">
              {description}
            </p>
          )}
        </div>
        
        {/* Arrow icon */}
        <ExternalLink className="flex-shrink-0 w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </a>
  );
};

export default LinkButton;
