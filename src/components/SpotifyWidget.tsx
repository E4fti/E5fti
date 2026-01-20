import { profileConfig } from "@/config/profileConfig";

export const SpotifyWidget = () => {
  const { enabled, embedUrl, height, compact } = profileConfig.spotify;

  if (!enabled || !embedUrl) {
    return null;
  }

  // Convert regular Spotify URL to embed URL if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes("/embed/")) {
      return url;
    }
    // Convert open.spotify.com URLs to embed URLs
    return url.replace("open.spotify.com", "open.spotify.com/embed");
  };

  const finalUrl = `${getEmbedUrl(embedUrl)}?utm_source=generator&theme=0`;

  return (
    <div className="w-full rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm border border-border/30 hover:border-green-500/30 transition-colors">
      <iframe
        src={finalUrl}
        width="100%"
        height={compact ? 100 : height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl"
        style={{ 
          background: 'transparent',
          colorScheme: 'dark'
        }}
      />
    </div>
  );
};

export default SpotifyWidget;
