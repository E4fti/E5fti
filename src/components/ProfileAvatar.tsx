import { useState } from 'react';
import { profileConfig } from '@/config/profileConfig';

interface ProfileAvatarProps {
  src: string;
  alt: string;
  status?: 'online' | 'offline' | 'away' | 'dnd';
}

const statusColors = {
  online: 'bg-green-500',
  offline: 'bg-muted-foreground',
  away: 'bg-yellow-500',
  dnd: 'bg-red-500',
};

const ProfileAvatar = ({ src, alt, status = 'online' }: ProfileAvatarProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Animated glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-pink animate-spin-slow opacity-60 blur-sm" />
      
      {/* Pulse ring */}
      <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-pink animate-pulse-ring" />
      
      {/* Avatar container */}
      <div className="relative w-28 h-28 rounded-full p-[3px] bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-pink">
        <div className="w-full h-full rounded-full bg-background p-[2px]">
          <img
            src={src}
            alt={alt}
            className={`w-full h-full rounded-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-[5px] rounded-full bg-muted animate-pulse" />
          )}
        </div>
      </div>
      
      {/* Status indicator */}
      <div className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-[3px] border-background ${statusColors[status]}`} />
    </div>
  );
};

export default ProfileAvatar;
