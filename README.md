# Yashu's Portfolio

A modern, interactive portfolio website inspired by macOS design with smooth GSAP animations, light/dark theme support, and window management system. Features beautiful loading animations, synchronized desktop entrance effects, and professional animations throughout.

## 🎯 Overview

This portfolio is built to showcase projects, skills, and achievements in an immersive desktop-like interface. The design mimics a macOS operating system with draggable windows, animations, and a responsive dock at the bottom. Each window is fully functional with minimize, maximize, and close capabilities. The portfolio includes a professional loading screen with progress animation and smooth desktop entrance animations.

## ✨ Features

- **Desktop-like Interface** - Fully functional window management with drag, minimize, maximize, close operations
- **Dark & Light Modes** - Complete theme support with persistent styling across all components and windows
- **Professional Animations** - GSAP-powered entrance effects, transitions, and interactive animations
- **Beautiful Loading Screen** - 4-second animation with progress bar, particles, orbiting rings, and profile icon
- **Responsive Design** - Optimized for desktop and tablet screens
- **Toggle Windows** - Click navbar items to open/close windows (toggle on second click)
- **Interactive Dock** - Application launcher with hover scaling effects and visual indicators
- **9+ Functional Windows** - Finder, Safari, Photos, Contact, Terminal, Achievements, Resume, Text, Image viewer

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool with HMR

### Styling & Animation
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **GSAP 3.13.0** - Professional animation library with Draggable plugin
- **@tailwindcss/vite 4.1.17** - Tailwind CSS integration

### State Management
- **Zustand 5.0.8** - Lightweight state management
- **Immer 11.0.0** - Immutable state updates

### Components & UI
- **Lucide React 0.554.0** - Icon library
- **React Tooltip 5.30.0** - Tooltip component
- **React PDF 10.2.0** - PDF viewing support
- **clsx 2.1.1** - Conditional class names

### Utilities
- **dayjs 1.11.19** - Date formatting library

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Dock.jsx         # Application launcher dock
│   ├── Home.jsx         # Desktop folder icons
│   ├── Navbar.jsx       # Top navigation bar
│   ├── ThemeToggle.jsx  # Dark/light mode toggle
│   ├── Welcome.jsx      # Hero section with animations
│   └── WindowControls.jsx # Minimize/maximize/close buttons
├── windows/             # Window components
│   ├── ArchiveWindow.jsx # Achievements and certifications
│   ├── AchievementPDF.jsx # Achievement PDF viewer
│   ├── Contact.jsx      # Contact information
│   ├── Finder.jsx       # Project browser
│   ├── Image.jsx        # Image viewer
│   ├── Photos.jsx       # Gallery
│   ├── Resume.jsx       # Resume PDF
│   ├── Safari.jsx       # Articles/blog
│   ├── Terminal.jsx     # Tech skills display
│   └── Text.jsx         # Project descriptions
├── store/               # Zustand state management
│   ├── location.js      # Folder navigation state
│   ├── theme.js         # Dark/light mode state
│   └── window.js        # Window management state
├── hoc/                 # Higher-order components
│   └── WindowWrapper.jsx # Window functionality wrapper
├── utils/               # Utility functions
│   └── windowAnimations.js # GSAP animation utilities
├── constants/           # Application constants
│   └── index.js         # App configuration and data
├── App.jsx              # Main app component
├── index.css            # Global styles with dark mode
└── main.jsx             # React entry point
```

## 🎨 Theme System

### Light Mode
- Clean, bright interface with white backgrounds
- Gray text and borders for clarity
- Blue highlights for interactive elements
- Professional and minimal design

### Dark Mode
- Slate color palette (slate-800, slate-900, slate-950)
- White text for contrast and readability
- Blue-600 highlights for active elements
- Eye-friendly for extended use

### Color Palette
- **Primary Blue**: `#3b82f6` (blue-500)
- **Active Blue**: `#2563eb` (blue-600)
- **Light Background**: `/images/Light.png`
- **Dark Background**: `/images/wallpaper.png`

## 🎬 Animations & Interactions

### Loading Screen Animations (0-4 seconds)
- **Progress Bar**: Animates from 0% to 100% over 4 seconds
- **Progress Counter**: Displays percentage with smooth transitions
- **Floating Particles**: 25 floating elements with cyan, blue, and purple gradients
- **Orbiting Rings**: Two concentric rings rotating 360° continuously
- **Profile Icon**: Static centered icon with dark wallpaper background
- **Logo Pulse**: Smooth breathing effect (1.15x → 1x scale)
- **Text Animation**: Character-by-character reveal with stagger effect

### Desktop Entrance Animations (Starts at 4s)
- **Navbar**: Slides down from top with cubic-out easing (0.1s delay, 0.9s duration)
- **Welcome Section**: Scales from 0.92 to 1 with elastic-out bounce (0.2s delay)
- **Dock**: Slides up from bottom with cubic-out easing (0.3s delay, 1s duration)
- **Windows**: Cascade animation with 0.08s stagger (0.6s delay)
- **Home Component**: Final fade-in effect (0.8s delay)

### Window Animations
- **Open**: Fade-in with scale effect (300ms, power3.out)
- **Close**: Fade-out with scale down (250ms, power3.in)
- **Minimize**: Bounce animation to dock (350ms, power3.out)
- **Restore**: Pop-out animation from dock (350ms, power3.out)
- **Maximize**: Smooth expansion to fullscreen (350ms, power3.inOut)
- **Drag**: Real-time dragging with GSAP Draggable plugin

### Interactive Animations
- **Dock Hover**: Icon scaling based on mouse distance (exponential easing)
- **Text Hover**: Font weight variation on Welcome text
- **Button Hover**: Scale and brightness effects (power2.out)
- **Window Focus**: Instant z-index update with no animation

### Easing Functions Used
- `power3.out` - Window open/restore animations (smooth deceleration)
- `power3.in` - Window close animations (smooth acceleration)
- `power3.inOut` - Maximize/restore animations
- `power2.out` - Hover and interactive effects
- `power1.out` - Dock icon animations
- `cubic.out` - Navbar and dock entrance animations
- `elastic.out` - Welcome section bounce effect
- `sine.inOut` - Pulse and oscillating effects

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yashuyouwaraj/My-Portfolio.git

# Navigate to project directory
cd "React With GSAP/Portfolio"

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### First Visit Experience
1. **Loading Screen** (4 seconds) - Watch the beautiful entrance animation with progress bar
2. **Desktop Entrance** - Elements animate in smoothly after loading
3. **Explore** - Use navbar, dock, or file system to navigate windows
4. **Theme Toggle** - Click the theme toggle in top right to switch between light/dark modes
5. **Window Interaction** - Drag, minimize, maximize, and close windows

## ⚙️ Configuration

### Customizing Content
Edit `src/constants/index.js` to customize:
- **Projects**: Add your portfolio projects
- **Tech Stack**: Update your skills and technologies
- **Social Links**: Add your social media profiles
- **Navigation Links**: Modify navbar items
- **Dock Icons**: Customize dock applications

### Dark Mode Colors
All components automatically support dark mode. To customize dark mode colors:
1. Edit Tailwind color classes in component files (use `dark:` prefix)
2. Update CSS in `src/index.css` for custom dark mode styles
3. Colors automatically sync with theme toggle

### Background Images
- **Light Mode**: `/images/Light.png` or any light background
- **Dark Mode**: `/images/wallpaper.png` or `/images/darkwallpaper.jpg`

Update paths in `src/store/theme.js`

## 🎯 Component Details

### Key Components

**LoadingScreen.jsx**
- Professional entrance animation with progress tracking
- Animated particles and orbiting elements
- Profile icon display
- Auto-hides after 4 seconds

**DesktopEntrance.jsx**
- Staggered animations for desktop elements
- Smooth reveal of all components
- Synchronized timing with loading screen

**WindowWrapper.jsx (HOC)**
Provides all window functionality:
- Drag and drop with GSAP Draggable
- Minimize/maximize/close animations
- Z-index management
- Animation state handling

**Navbar.jsx**
- Navigation items with toggle functionality
- Opens window on first click, closes on second click
- Theme toggle button
- Live time display

**Dock.jsx**
- Application launcher
- Hover distance-based scaling
- Dock icon hover effects
- Active application indication

### Zustand Stores

**useWindowStore** (`src/store/window.js`)
- Manages 9+ window states
- Handles minimize/maximize/close actions
- Z-index management for window stacking
- Position tracking for drag functionality

**useThemeStore** (`src/store/theme.js`)
- Dark/light mode toggle
- Background image management
- Persistent theme selection

**useLocationStore** (`src/store/location.js`)
- File system navigation
- Folder history tracking
- Active folder selection

## 🌐 Navigation & Usage

### Window Toggle Feature
Click navbar items multiple times:
- **First Click**: Opens the window
- **Second Click**: Closes the window
- **Third Click**: Opens again (toggle pattern)

Applies to: Resume, Contact, Projects, Skills, Gallery, Articles, Achievements

### Using the Dock
- **Click Icon**: Open/close application
- **Hover**: Scale effect based on distance from cursor
- **Active Indicator**: Shows which applications are open

### Using Finder (File Browser)
- Browse projects in file system-like interface
- Double-click folders to navigate
- Click files to view details
- Sidebar for quick navigation

## 🎨 Theme Support

### Light Mode
- Clean, bright interface with white backgrounds
- Gray text and borders for clarity
- Blue highlights for interactive elements
- Professional and minimal design

### Dark Mode
- Slate color palette (slate-800, slate-900, slate-950)
- White text for contrast and readability
- Blue-600 highlights for active elements
- Eye-friendly for extended use
- Proper dark colors applied to all windows including maximized state

### Window Colors in Dark Mode
All windows properly themed:
- ✅ Terminal window with dark background
- ✅ Safari with dark blog styling
- ✅ Finder with dark sidebar
- ✅ Contact with dark background
- ✅ Photos gallery with dark theme
- ✅ Resume with dark PDF viewer
- ✅ Text editor with dark background
- ✅ Image viewer with dark background
- ✅ Archive window with dark layout

## 📊 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Dock.jsx         # Application launcher dock
│   ├── Home.jsx         # Desktop folder icons
│   ├── Navbar.jsx       # Top navigation bar with toggle
│   ├── ThemeToggle.jsx  # Dark/light mode toggle
│   ├── Welcome.jsx      # Hero section with animations
│   ├── WindowControls.jsx # Minimize/maximize/close buttons
│   ├── LoadingScreen.jsx # Beautiful entrance animation
│   └── DesktopEntrance.jsx # Desktop animation coordinator
├── windows/             # Window components (fully themed)
│   ├── ArchiveWindow.jsx
│   ├── AchievementPDF.jsx
│   ├── Contact.jsx
│   ├── Finder.jsx
│   ├── Image.jsx
│   ├── Photos.jsx
│   ├── Resume.jsx
│   ├── Safari.jsx
│   ├── Terminal.jsx
│   └── Text.jsx
├── store/               # Zustand state management
│   ├── location.js
│   ├── theme.js
│   └── window.js
├── hoc/                 # Higher-order components
│   └── WindowWrapper.jsx
├── utils/               # Utility functions
│   └── windowAnimations.js
├── constants/           # Application configuration
│   └── index.js
├── App.jsx              # Main app component
├── index.css            # Global styles with dark mode
└── main.jsx             # React entry point
```

## 🏗️ Build & Deployment

### Development
```bash
npm run dev
```
Starts Vite dev server with HMR on `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates optimized build in `dist/` directory

### Preview Build
```bash
npm run preview
```
Locally preview the production build

## ✅ Quality & Performance

- **ESLint**: JavaScript linting configured
- **Vite HMR**: Hot Module Replacement for fast development
- **Path Aliases**: Easy imports with `#` prefix
  - `#components` → `src/components`
  - `#windows` → `src/windows`
  - `#store` → `src/store`
  - `#hoc` → `src/hoc`
  - `#utils` → `src/utils`
  - `#constants` → `src/constants`
- **Code Splitting**: Automatic by Vite
- **Animation Performance**: Optimized GSAP tweens (60fps)
- **No Memory Leaks**: Proper cleanup in useEffect hooks

## 🎓 Technologies Demonstrated

- React 19 with modern hooks
- GSAP for professional animations
- Zustand for state management
- Tailwind CSS for responsive design
- HOC pattern for component composition
- Dark mode implementation
- Window management system
- Drag and drop functionality
- PDF viewing
- Dynamic image galleries

## 📄 License

Personal portfolio project - Available for reference and inspiration.

## 🙌 Credits & Inspiration

- macOS design inspiration for desktop interface
- GSAP for smooth, professional animations
- Tailwind CSS for modern utility-first styling
- React ecosystem best practices
