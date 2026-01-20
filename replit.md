# replit.md

## Overview

This is a personal profile/link-in-bio web application built with React and TypeScript. It displays a customizable profile card with social links, Discord status integration, Spotify widget, and various visual effects. The application serves as a single-page landing profile similar to Linktree but with enhanced visual customization including video backgrounds, custom cursors, and animated effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with CSS variables for theming, dark mode enabled by default
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: React Query (TanStack Query) for server state, React hooks for local state
- **Routing**: React Router DOM for client-side routing (minimal routes: home and 404)

### Configuration-Driven Design
The application uses a centralized configuration file (`src/config/profileConfig.ts`) that controls:
- User profile information (username, bio, pronouns, status)
- Avatar settings
- Social media links and custom links
- Discord integration (via Lanyard API)
- Spotify embed widget
- Background effects (video, opacity, blur)
- Audio player settings
- Visual effects (custom cursor, tilt effects, noise overlay)
- Footer customization

### Component Structure
- **ProfileCard**: Main component displaying user info, social links, and widgets
- **BackgroundEffects**: Handles video backgrounds, gradient orbs, and visual overlays
- **CustomCursor**: Optional custom cursor implementation
- **AudioPlayer**: Background audio player with volume controls
- **DiscordStatus**: Real-time Discord status via Lanyard WebSocket API
- **SpotifyWidget**: Embedded Spotify player for playlists/tracks
- **UI Components**: Comprehensive shadcn/ui component library in `src/components/ui/`

### External Service Integrations
- **Lanyard API**: WebSocket connection for real-time Discord presence data
- **Spotify Embed**: iframe-based Spotify player integration

### Testing Setup
- **Framework**: Vitest with jsdom environment
- **Testing Library**: React Testing Library for component testing
- **Configuration**: Global test setup in `src/test/setup.ts`

## External Dependencies

### Third-Party Services
- **Lanyard API** (`api.lanyard.rest`): Provides real-time Discord user status and activity data via WebSocket
- **Spotify Embed**: Embedded Spotify player for music integration (iframe-based, no API key required)
- **Google Fonts**: Inter, JetBrains Mono, Lato, EB Garamond, Fira Code, Space Grotesk, Lora, Space Mono fonts

### Key NPM Packages
- **@tanstack/react-query**: Async state management
- **react-router-dom**: Client-side routing
- **@radix-ui/***: Accessible UI primitives (dialog, dropdown, tooltip, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library
- **next-themes**: Theme switching support
- **sonner**: Toast notifications
- **vaul**: Drawer component
- **embla-carousel-react**: Carousel functionality
- **date-fns**: Date manipulation
- **react-day-picker**: Calendar/date picker
- **recharts**: Charting library (available but not actively used)

### Development Dependencies
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **ESLint**: Code linting with React hooks and refresh plugins
- **Vitest**: Unit testing framework
- **lovable-tagger**: Development-only component tagging