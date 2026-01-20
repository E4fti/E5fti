import { useEffect, useState } from "react";
import { profileConfig } from "@/config/profileConfig";

interface LanyardData {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    global_name: string;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: Array<{
    name: string;
    type: number;
    state?: string;
    details?: string;
    timestamps?: {
      start?: number;
      end?: number;
    };
    assets?: {
      large_image?: string;
      large_text?: string;
      small_image?: string;
      small_text?: string;
    };
    application_id?: string;
  }>;
  spotify?: {
    track_id: string;
    song: string;
    artist: string;
    album: string;
    album_art_url: string;
    timestamps: {
      start: number;
      end: number;
    };
  };
  listening_to_spotify: boolean;
}

const statusColors = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
};

const statusLabels = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
};

export const DiscordStatus = () => {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { userId, showStatus, showActivity } = profileConfig.discord;

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        } else {
          setError("Failed to fetch Discord status");
        }
      } catch (err) {
        setError("Failed to connect to Lanyard");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Set up WebSocket for real-time updates
    const ws = new WebSocket("wss://api.lanyard.rest/socket");
    
    ws.onopen = () => {
      ws.send(JSON.stringify({
        op: 2,
        d: { subscribe_to_id: userId }
      }));
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.op === 0 && message.t === "PRESENCE_UPDATE") {
        setData(message.d);
      } else if (message.op === 1) {
        // Heartbeat
        setInterval(() => {
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ op: 3 }));
          }
        }, message.d.heartbeat_interval);
      }
    };

    return () => {
      ws.close();
    };
  }, [userId]);

  if (!userId) {
    return (
      <div className="text-center text-muted-foreground/50 text-sm py-4">
        Add your Discord User ID in profileConfig.ts
      </div>
    );
  }

  if (loading) {
    return (
      <div className="animate-pulse bg-card/50 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted" />
          <div className="space-y-2">
            <div className="w-24 h-4 bg-muted rounded" />
            <div className="w-16 h-3 bg-muted rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return null;
  }

  const { discord_user, discord_status, activities, spotify, listening_to_spotify } = data;

  // Get non-Spotify activities
  const otherActivities = activities.filter(a => a.type !== 2);

  return (
    <div className="w-full space-y-3">
      {/* Discord Status Card */}
      {showStatus && (
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${discord_user.avatar}.png?size=64`}
                alt={discord_user.username}
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
              <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-black/40 ${statusColors[discord_status]}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-bold text-white text-lg">
                  {discord_user.global_name || discord_user.username}
                </p>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-bold text-white/90">
                  <span className="text-purple-400">💎</span> ACE_
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Server Widget Mockup based on image */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-bold text-xs text-center p-1 leading-tight">
            BEYOND THE BANTERS
          </div>
          <div className="space-y-0.5">
            <p className="font-bold text-white">BeyondTheBanters</p>
            <div className="flex items-center gap-3 text-[10px] text-white/50">
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> 1.4k Online
              </span>
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" /> 16.41k Members
              </span>
            </div>
          </div>
        </div>
        <button className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors">
          Join Server
        </button>
      </div>

      {/* Spotify Activity */}
      {showActivity && listening_to_spotify && spotify && (
        <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:border-green-500/30 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span className="text-xs text-green-500 font-medium">Listening to Spotify</span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={spotify.album_art_url}
              alt={spotify.album}
              className="w-14 h-14 rounded-lg shadow-lg"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{spotify.song}</p>
              <p className="text-sm text-muted-foreground truncate">by {spotify.artist}</p>
              <p className="text-xs text-muted-foreground/60 truncate">on {spotify.album}</p>
            </div>
          </div>
        </div>
      )}

      {/* Other Activities (Games, etc.) */}
      {showActivity && otherActivities.length > 0 && otherActivities.map((activity, index) => (
        <div key={index} className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:border-glow-purple/30 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-glow-purple animate-pulse" />
            <span className="text-xs text-muted-foreground">
              {activity.type === 0 ? "Playing" : activity.type === 3 ? "Watching" : "Activity"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {activity.assets?.large_image && (
              <img
                src={
                  activity.assets.large_image.startsWith("mp:external")
                    ? activity.assets.large_image.replace("mp:external/", "https://media.discordapp.net/external/")
                    : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`
                }
                alt={activity.name}
                className="w-14 h-14 rounded-lg"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{activity.name}</p>
              {activity.details && (
                <p className="text-sm text-muted-foreground truncate">{activity.details}</p>
              )}
              {activity.state && (
                <p className="text-xs text-muted-foreground/60 truncate">{activity.state}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscordStatus;
