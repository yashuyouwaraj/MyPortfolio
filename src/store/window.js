import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const createWindowConfig = () => ({
  isOpen: false,
  zIndex: INITIAL_Z_INDEX,
  data: null,
  isMinimized: false,
  isMaximized: false,
  maximizeData: null,
  positionX: 0,
  positionY: 0,
  width: 0,
  height: 0,
});

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    minimizedWindows: [],
    highestZIndex: INITIAL_Z_INDEX,

    // Open a window
    openWindow: (windowKey, data = null) =>
      set((state) => {
        // Create the window if it doesn't exist (for dynamic windows like img_1, img_2, etc.)
        if (!state.windows[windowKey]) {
          state.windows[windowKey] = createWindowConfig();
        }
        
        const win = state.windows[windowKey];
        // Always update data if provided (allows changing image while window is open)
        if (data !== null) {
          win.data = data;
        }
        
        // If window is minimized, restore it and bring to front
        if (win.isMinimized) {
          win.isMinimized = false;
          state.highestZIndex += 1;
          win.zIndex = state.highestZIndex;
          state.minimizedWindows = state.minimizedWindows.filter(w => w !== windowKey);
          return;
        }
        
        // If window is already open, just focus it (bring to front)
        if (win.isOpen) {
          state.highestZIndex += 1;
          win.zIndex = state.highestZIndex;
          return;
        }
        // Otherwise open it with top z-index
        win.isOpen = true;
        state.highestZIndex += 1;
        win.zIndex = state.highestZIndex;
        win.data = win.data || data;
        win.isMinimized = false;
        win.isMaximized = false;
        // Remove from minimized if it was minimized
        state.minimizedWindows = state.minimizedWindows.filter(w => w !== windowKey);
      }),

    // Close a window
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        win.isMinimized = false;
        win.isMaximized = false;
        win.maximizeData = null;
        state.minimizedWindows = state.minimizedWindows.filter(w => w !== windowKey);
      }),

    // Minimize a window
    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMinimized = true;
        win.isMaximized = false;
        // Keep current z-index when minimizing
        if (!state.minimizedWindows.includes(windowKey)) {
          state.minimizedWindows.push(windowKey);
        }
      }),

    // Restore a minimized window
    restoreWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        // Ensure window is open when restored
        win.isOpen = true;
        win.isMinimized = false;
        state.highestZIndex += 1;
        win.zIndex = state.highestZIndex;
        state.minimizedWindows = state.minimizedWindows.filter(w => w !== windowKey);
      }),

    // Maximize a window
    maximizeWindow: (windowKey, originalData = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMaximized = true;
        // Bring to front when maximizing
        state.highestZIndex += 1;
        win.zIndex = state.highestZIndex;
        win.maximizeData = originalData || {
          x: win.positionX || 0,
          y: win.positionY || 0,
          width: win.width || 0,
          height: win.height || 0,
        };
      }),

    // Restore from maximized state
    restoreFromMaximize: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMaximized = false;
        // Keep the z-index from maximized state (already at top)
        if (win.maximizeData) {
          // Restore the original position
          win.positionX = win.maximizeData.x;
          win.positionY = win.maximizeData.y;
          win.maximizeData = null;
        }
      }),

    // Focus/bring window to front
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (win && win.isOpen) {
          state.highestZIndex += 1;
          win.zIndex = state.highestZIndex;
        }
      }),

    // Update window position (for dragging)
    updateWindowPosition: (windowKey, x, y) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.positionX = x;
        win.positionY = y;
      }),
  }))
);

export default useWindowStore;
