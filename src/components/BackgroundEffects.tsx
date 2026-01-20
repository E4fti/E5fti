import { profileConfig } from '@/config/profileConfig';

const BackgroundEffects = () => {
  const { background } = profileConfig;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Video background */}
      {background.src && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: (background.videoOpacity ?? 100) / 100,
              filter: (background.videoBlur ?? 0) > 0 ? `blur(${background.videoBlur}px)` : 'none',
            }}
          >
            <source src={background.src} type="video/mp4" />
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-background/0" />
        </div>
      )}

      {/* Gradient orbs (visible when no video or as overlay) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-glow-cyan/10 blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-glow-purple/10 blur-[100px]" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-glow-pink/5 blur-[80px]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
    </div>
  );
};

export default BackgroundEffects;
