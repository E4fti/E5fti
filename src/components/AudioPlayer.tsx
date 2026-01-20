import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { profileConfig } from '@/config/profileConfig';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);

  const { audio } = profileConfig;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = false;
      
      const playAudio = () => {
        if (audioRef.current && audio.autoplay && !isPlaying) {
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.log("Autoplay blocked:", err);
            });
        }
      };

      // Try playing immediately (might work if user already interacted with the site elsewhere)
      playAudio();

      // Mobile Chrome/Safari strictly require the .play() call to be directly 
      // within the call stack of a user gesture event handler.
      const handleInteraction = () => {
        if (audioRef.current) {
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
              // Clean up once successfully playing
              window.removeEventListener('click', handleInteraction);
              window.removeEventListener('touchstart', handleInteraction);
              window.removeEventListener('pointerdown', handleInteraction);
            })
            .catch((err) => {
              console.log("Interaction play blocked:", err);
            });
        }
      };

      window.addEventListener('click', handleInteraction);
      window.addEventListener('touchstart', handleInteraction);
      window.addEventListener('pointerdown', handleInteraction);

      return () => {
        window.removeEventListener('click', handleInteraction);
        window.removeEventListener('touchstart', handleInteraction);
        window.removeEventListener('pointerdown', handleInteraction);
      };
    }
  }, [audio.autoplay, volume, isPlaying]);

  if (!audio.src) return null;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-50"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <audio 
        ref={audioRef} 
        src={audio.src} 
        loop={audio.loop} 
        preload="auto"
      />
      
      <div className={`flex items-center gap-2 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border transition-all duration-300 ${showControls ? 'pr-4' : ''}`}>
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-foreground" />
          ) : (
            <Play className="w-4 h-4 text-foreground ml-0.5" />
          )}
        </button>

        {/* Volume controls (show on hover) */}
        <div className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${showControls ? 'w-28 opacity-100' : 'w-0 opacity-0'}`}>
          <button
            onClick={toggleMute}
            className="flex-shrink-0 p-1 hover:text-primary transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
          />
        </div>
      </div>

      {/* Playing indicator */}
      {isPlaying && (
        <div className="absolute -top-1 -right-1 flex gap-0.5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 bg-primary rounded-full animate-pulse"
              style={{
                height: `${8 + Math.random() * 8}px`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
