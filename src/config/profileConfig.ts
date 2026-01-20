// ============================================
// PROFILE CONFIGURATION
// Edit this file to customize your profile
// ============================================

export const profileConfig = {
  // === BASIC INFO ===
  username: "E F T I",
  pronouns: "",
  bio: "I Spend Every Single Moment on Work",
  status: "online" as "online" | "offline" | "away" | "dnd",
  
  // === AVATAR ===
  avatar: {
    // Use a URL or import a local image
    src: "./src/assets/album-cover.jpg",
    alt: "Profile Avatar",
  },

  // === DISCORD INTEGRATION ===
  discord: {
    // Your Discord User ID (enable Developer Mode in Discord, right-click your profile)
    userId: "203320334923857921", // e.g., "203320334923857921"
    // Show Discord status widget
    showStatus: true,
    // Show current activity (game, Spotify, etc.)
    showActivity: true,
  },

  // === SPOTIFY WIDGET ===
  spotify: {
    // Enable Spotify embed widget
    enabled: true,
    // Spotify embed URL (playlist, album, or track)
    // Get it from Spotify: Share → Embed → Copy embed code → extract the URL
    embedUrl: "https://open.spotify.com/playlist/7tiPEUSHxjSiJ2C5H5UFEn?si=769b1d2c4bb84315", // e.g., "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
    // Widget height in pixels
    height: 100,
    // Compact mode (smaller player)
    compact: true,
  },

  // === BACKGROUND ===
  background: {
    // Set to a video URL to enable video background (mp4, webm)
    // Leave empty string "" to use default gradient background
    src: "/src/assets/ee4f$i.mp4",
    // Video settings
    videoOpacity: 50,
    videoBlur: 0, // in pixels
  },

  // === AUDIO ===
  audio: {
    // Set to an audio URL to enable background music (mp3, wav, ogg)
    // Leave empty string "" to disable audio
    src: "/src/assets/audio.mp3",
    // Audio settings
    autoplay: true,
    loop: true,
    defaultVolume: 1, // 0 to 1
  },

  // === CUSTOM CURSOR ===
  cursor: {
    enabled: true,
    // Cursor style: "dot" | "ring" | "emoji"
    style: "ring" as "dot" | "ring" | "emoji",
    // For emoji cursor, set the emoji
    emoji: "✨",
    // Colors (uses CSS color values)
    primaryColor: "hsl(190, 100%, 50%)", // cyan
    secondaryColor: "hsl(280, 100%, 60%)", // purple
  },

  // === SOCIAL LINKS ===
  // Add/remove/modify your social links here
  // Available icons: discord, github, twitter, instagram, youtube, twitch, tiktok, spotify, soundcloud, email
  socialLinks: [
    { platform: "discord", url: "https://discord.gg/banters" },
    { platform: "github", url: "https://github.com/e4fti" },
    { platform: "twitter", url: "https://twitter.com/e4fti" },
    { platform: "instagram", url: "https://instagram.com/e4fti_" },
    { platform: "youtube", url: "https://youtube.com/e4fti" },
  ] as { platform: SocialPlatform; url: string }[],

  // === CUSTOM LINKS ===
  // These appear as buttons below your social links
  customLinks: [
    { 
      title: "Spotify", 
      description: "Check out my playlists", 
      url: "https://open.spotify.com/user/31fex6rwh6jnag72hbtufu2odwfm?si=82b77bb842d946b5",
      icon: "music" // music, gamepad, globe, mail, link, code, video, camera, heart
    },
    { 
      title: "Steam", 
      description: "Gaming profile", 
      url: "https://steam.com/",
      icon: "gamepad"
    },
    { 
      title: "My Website", 
      description: "Personal portfolio", 
      url: "https://example.com/",
      icon: "globe"
    },
    { 
      title: "Contact Me", 
      description: "Get in touch", 
      url: "mailto:hello@example.com",
      icon: "mail"
    },
  ] as CustomLink[],

  // === THEME COLORS ===
  // Override default glow colors (HSL format without hsl())
  theme: {
    glowCyan: "190 100% 50%",
    glowPurple: "280 100% 60%",
    glowPink: "330 100% 60%",
  },

  // === EFFECTS ===
  effects: {
    // Enable/disable 3D tilt effect on profile card
    tiltEnabled: true,
    tiltMaxAngle: 8, // degrees (lowered from 15)
    // Enable/disable noise overlay
    noiseEnabled: true,
    // Show view counter
    showViews: true,
    viewCount: 1234,
  },

  // === FOOTER ===
  footer: {
    text: "Made with",
    heart: true,
    brandName: "ProfileLink",
    brandUrl: "#",
  },
};

// Type definitions
export type SocialPlatform = 
  | "discord" 
  | "github" 
  | "twitter" 
  | "instagram" 
  | "youtube" 
  | "twitch" 
  | "tiktok" 
  | "spotify" 
  | "soundcloud" 
  | "email";

export type LinkIcon = 
  | "music" 
  | "gamepad" 
  | "globe" 
  | "mail" 
  | "link" 
  | "code" 
  | "video" 
  | "camera" 
  | "heart";

export interface CustomLink {
  title: string;
  description?: string;
  url: string;
  icon: LinkIcon;
}

export default profileConfig;
