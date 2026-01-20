import ProfileAvatar from './ProfileAvatar';
import SocialLink from './SocialLink';
import LinkButton from './LinkButton';
import DiscordStatus from './DiscordStatus';
import SpotifyWidget from './SpotifyWidget';
import { useTilt } from '@/hooks/useTilt';
import { profileConfig, SocialPlatform, LinkIcon } from '@/config/profileConfig';
import { 
  Github, Twitter, Instagram, Youtube, Music, Globe, 
  Gamepad2, Mail, Link, Code, Video, Camera, Heart,
  Twitch
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Discord icon as custom component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// TikTok icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Spotify icon
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// SoundCloud icon
const SoundCloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.052-.1-.101-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.21-1.308-.21-1.319c-.01-.057-.045-.094-.09-.094m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.104.106.104.061 0 .12-.044.12-.104l.24-2.458-.24-2.563c0-.06-.045-.104-.121-.104m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.24-2.544-.24-2.64c-.015-.075-.075-.135-.15-.135m.93-.209c-.09 0-.149.075-.165.149l-.176 2.67.192 2.53c.014.09.075.163.164.163.09 0 .164-.073.164-.163l.209-2.53-.209-2.67c0-.074-.074-.149-.164-.149m.944-.089c-.104 0-.179.09-.194.18l-.164 2.76.18 2.504c.014.104.089.194.193.194.104 0 .18-.09.194-.194l.195-2.504-.21-2.76c-.015-.09-.09-.18-.194-.18m.976-.149c-.12 0-.21.104-.226.209l-.149 2.775.164 2.49c.015.12.106.209.211.209.12 0 .21-.089.225-.209l.181-2.49-.181-2.775c-.015-.105-.105-.209-.21-.209m1.021-.149c-.135 0-.225.12-.24.24l-.135 2.805.149 2.47c.016.135.106.24.226.24.135 0 .24-.105.24-.24l.165-2.47-.165-2.805c0-.12-.104-.24-.24-.24m.99-.164c-.135 0-.255.12-.255.255l-.12 2.82.135 2.445c0 .149.12.27.255.27.12 0 .255-.121.255-.27l.15-2.445-.165-2.82c0-.135-.12-.255-.255-.255m1.035-.135c-.165 0-.285.135-.285.285l-.105 2.82.119 2.4c.016.165.136.3.286.3.165 0 .285-.135.3-.3l.135-2.4-.149-2.82c-.015-.15-.135-.285-.301-.285m1.08-.015c-.179 0-.314.149-.33.314l-.089 2.685.104 2.34c.016.18.151.33.33.33.166 0 .315-.15.315-.33l.12-2.34-.12-2.685c0-.165-.149-.314-.315-.314m1.095.195c-.195 0-.344.15-.359.344l-.075 2.34.09 2.235c.014.21.149.36.344.36.18 0 .345-.15.345-.36l.105-2.235-.105-2.34c0-.195-.15-.344-.345-.344m1.125-.375c-.21 0-.374.165-.39.375l-.06 2.505.075 2.205c.015.21.18.375.39.375.195 0 .375-.165.375-.375l.09-2.205-.09-2.505c-.015-.21-.18-.375-.375-.375m1.125-.585c-.21 0-.405.18-.405.405l-.045 2.88.06 2.175c0 .24.18.42.405.42.21 0 .405-.18.405-.42l.075-2.175-.075-2.88c0-.225-.195-.405-.42-.405m2.04.39c-.09 0-.165.03-.24.075-.195.12-.315.33-.315.57l-.03 2.895.03 2.145c0 .255.12.48.315.6.075.045.15.075.24.075.09 0 .18-.03.255-.075.18-.12.315-.345.315-.6l.045-2.16-.06-2.88c0-.24-.135-.45-.315-.57-.075-.045-.165-.075-.255-.075m12.465.195c-.359-.255-.795-.405-1.26-.405-.165 0-.329.015-.494.045-.255-2.88-2.67-5.145-5.61-5.145-.72 0-1.425.149-2.055.405-.24.09-.3.195-.315.375v10.41c.015.18.135.33.315.36 0 0 9.135.015 9.194.015 1.515 0 2.759-1.23 2.759-2.76 0-1.275-.84-2.355-2.055-2.76"/>
  </svg>
);

// Icon mapping for social platforms
const socialIconMap: Record<SocialPlatform, React.ComponentType<{ className?: string }>> = {
  discord: DiscordIcon,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  twitch: Twitch,
  tiktok: TikTokIcon,
  spotify: SpotifyIcon,
  soundcloud: SoundCloudIcon,
  email: Mail,
};

// Icon mapping for custom links
const linkIconMap: Record<LinkIcon, LucideIcon> = {
  music: Music,
  gamepad: Gamepad2,
  globe: Globe,
  mail: Mail,
  link: Link,
  code: Code,
  video: Video,
  camera: Camera,
  heart: Heart,
};

const ProfileCard = () => {
  const { ref, style } = useTilt<HTMLDivElement>();
  const { effects, socialLinks, customLinks, username, pronouns, bio, avatar, status, discord, spotify } = profileConfig;

  return (
    <div className="w-full max-w-md mx-auto" style={{ perspective: '1000px' }}>
      {/* Main card with tilt effect */}
      <div 
        ref={ref}
        style={style}
        className="relative p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border will-change-transform"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-glow-cyan/5 via-transparent to-glow-purple/5 pointer-events-none" />
        
        {/* Shine effect on tilt */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 55%, transparent 60%)',
          }}
        />
        
        {/* Content */}
        <div className="relative flex flex-col items-center">
          {/* Avatar */}
          <div className="mb-6">
            <ProfileAvatar
              src={avatar.src}
              alt={avatar.alt}
              status={status}
            />
          </div>
          
          {/* Username */}
          <h1 className="text-4xl font-bold text-neon-pink mb-4 tracking-widest">
            {username}
          </h1>

          {/* Bio Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-xs">
            {bio.split(' ').map((word, i) => (
              <span key={i} className="pill-tag">
                {word}
              </span>
            ))}
          </div>
          
          {/* Social icons row */}
          <div className="flex items-center gap-4 mb-6 flex-wrap justify-center">
            {socialLinks.map((link, index) => {
              const Icon = socialIconMap[link.platform];
              return (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-6 mb-8 text-sm text-white/70">
            <div className="flex items-center gap-1.5">
              <span className="opacity-50">👁</span>
              <span>{effects.viewCount}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="opacity-50">📍</span>
              <span>Spotify</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="opacity-50">👤</span>
              <span>0</span>
            </div>
          </div>
          
          {/* Discord Status Widget */}
          {discord.showStatus && (
            <div className="w-full space-y-4">
              <DiscordStatus />
            </div>
          )}
          
          {/* Spotify Widget */}
          {spotify.enabled && spotify.embedUrl && (
            <div className="w-full mt-4">
              <SpotifyWidget />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
