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
    <div className="w-full rounded-2xl overflow-hidden bg-[#9e0000] border border-white/10 p-4">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <img 
            src="https://i.scdn.co/image/ab67616d0000b273e91d8e13768b9f71c48e154a" 
            alt="Album art" 
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 text-[10px] text-white/80 font-bold uppercase tracking-wider mb-1">
            <span>+</span>
            <span>·</span>
            <span>E4FTI</span>
          </div>
          <p className="font-bold text-white truncate text-lg">FA9LA</p>
          <p className="text-white/70 text-sm truncate mb-2">Flipperachi</p>
          <div className="flex items-center gap-2">
             <button className="px-2 py-0.5 rounded bg-black/20 text-[10px] font-bold text-white uppercase tracking-tighter border border-white/5">Preview</button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="text-white/80 hover:text-white"><span className="text-xl">⏮</span></button>
            <button className="text-white/80 hover:text-white"><span className="text-xl">⏭</span></button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg">
              <span className="text-xl">▶</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;
