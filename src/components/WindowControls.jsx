import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import {
    animateClose,
    animateMinimize,
    animateRestoreFromMaximize,
    animateMaximize,
  } from "#utils/windowAnimations";

const WindowControls = ({ target }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreFromMaximize,
    windows,
  } = useWindowStore();  const controlsRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useGSAP(() => {
    // Hover animation for window controls
    const controls = controlsRef.current?.querySelectorAll(".window-control-btn");
    if (!controls) return;

    controls.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.2,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });
  }, []);

  /**
   * Handle close button click
   * Animates opacity and scale, then closes the window
   */
  const handleClose = async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    try {
      const windowEl = document.getElementById(target);
      if (windowEl) {
        await animateClose(windowEl, { duration: 0.25 });
      }
      closeWindow(target);
    } catch {
      // Silently handle close errors
    } finally {
      isAnimatingRef.current = false;
    }
  };

  /**
   * Handle minimize button click
   * Animates window down to dock area and minimizes it
   */
  const handleMinimize = async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    try {
      const windowEl = document.getElementById(target);
      if (windowEl) {
        await animateMinimize(windowEl, { duration: 0.35 });
      }
      minimizeWindow(target);
    } catch {
      // Silently handle minimize errors
    } finally {
      isAnimatingRef.current = false;
    }
  };

  /**
   * Handle maximize/restore button click
   * Toggles between maximized and normal state with smooth animation
   */
  const handleMaximize = async () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    try {
      const windowEl = document.getElementById(target);
      if (!windowEl) {
        isAnimatingRef.current = false;
        return;
      }

      const windowState = windows[target];
      const isCurrentlyMaximized = windowState?.isMaximized;

      if (isCurrentlyMaximized) {
        // Restore from maximized
        const originalData = windowState.maximizeData;
        // Animate restore first, then clear inline styles and update store
        await animateRestoreFromMaximize(windowEl, originalData, {
          duration: 0.35,
        });

        // Clear inline sizing/positioning applied for maximize so CSS/state can take over
        windowEl.style.position = "";
        windowEl.style.left = "";
        windowEl.style.top = "";
        windowEl.style.width = "";
        windowEl.style.height = "";
        windowEl.style.borderRadius = "";

        restoreFromMaximize(target);
      } else {
        // Maximize window - get the data from animation
        const originalData = await animateMaximize(windowEl, {
          duration: 0.35,
        });

        // animation already set inline fixed/width/height; now update store with original data
        maximizeWindow(target, originalData);
      }
    } catch {
      // Silently handle maximize errors
    } finally {
      isAnimatingRef.current = false;
    }
  };

  return (
    <div id="window-controls" ref={controlsRef}>
      {/* Close Button */}
      <button
        className="window-control-btn close"
        onClick={handleClose}
        aria-label="Close window"
        title="Close"
      />

      {/* Minimize Button */}
      <button
        className="window-control-btn minimize"
        onClick={handleMinimize}
        aria-label="Minimize window"
        title="Minimize"
      />

      {/* Maximize/Restore Button */}
      <button
        className="window-control-btn maximize"
        onClick={handleMaximize}
        aria-label="Maximize or restore window"
        title={windows[target]?.isMaximized ? "Restore" : "Maximize"}
      />
    </div>
  );
};

export default WindowControls;