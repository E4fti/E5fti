import ProfileCard from '@/components/ProfileCard';
import BackgroundEffects from '@/components/BackgroundEffects';
import AudioPlayer from '@/components/AudioPlayer';
import CustomCursor from '@/components/CustomCursor';
import { profileConfig } from '@/config/profileConfig';

const Index = () => {
  const { effects, footer } = profileConfig;

  return (
    <div className={`relative min-h-screen bg-background ${effects.noiseEnabled ? 'noise-overlay' : ''}`}>
      <CustomCursor />
      <BackgroundEffects />
      <AudioPlayer />
      
      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen p-4 py-12">
        <ProfileCard />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 pb-6 text-center">
        <p className="text-xs text-muted-foreground">
          {footer.text} {footer.heart && <span className="text-glow-pink">♥</span>} • Powered by{' '}
          <a href={footer.brandUrl} className="text-primary hover:underline">
            {footer.brandName}
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
