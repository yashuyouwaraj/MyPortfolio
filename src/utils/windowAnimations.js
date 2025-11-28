/**
 * GSAP Animation utilities for window management
 * Handles minimize, maximize, restore, and close animations
 */

import gsap from "gsap";

/**
 * Animate window minimize to dock
 * @param {HTMLElement} element - Window element to animate
 * @param {Object} options - Animation options
 * @returns {Promise} Animation promise
 */
export const animateMinimize = (element, options = {}) => {
  const {
    duration = 0.35,
    dockBottom = 80,
    screenHeight = window.innerHeight,
  } = options;

  return new Promise((resolve) => {
    const tl = gsap.timeline({
      onComplete: resolve,
    });

    // Get element's current position for smooth animation
    const rect = element.getBoundingClientRect();
    const startX = rect.left;
    const startY = rect.top;

    tl.to(
      element,
      {
        x: -startX + window.innerWidth / 2,
        y: screenHeight - startY - dockBottom,
        scale: 0.15,
        opacity: 0,
        duration: duration,
        ease: "power3.inOut",
      },
      0
    );
  });
};

/**
 * Animate window restore from dock
 * @param {HTMLElement} element - Window element to animate
 * @param {Object} restoreData - Original position and size data
 * @param {Object} options - Animation options
 * @returns {Promise} Animation promise
 */
export const animateRestore = (element, restoreData = {}, options = {}) => {
  const {
    duration = 0.35,
    x = 0,
    y = 0,
  } = restoreData;

  const {
    animDuration = duration,
  } = options;

  return new Promise((resolve) => {
    gsap.to(
      element,
      {
        x: x || 0,
        y: y || 0,
        scale: 1,
        opacity: 1,
        duration: animDuration,
        ease: "power3.out",
        onComplete: resolve,
      }
    );
  });
};

/**
 * Animate window maximize to fullscreen
 * @param {HTMLElement} element - Window element to animate
 * @param {Object} options - Animation options
 * @returns {Promise} Animation promise with original position data
 */
export const animateMaximize = (element, options = {}) => {
  const {
    duration = 0.35,
  } = options;

  return new Promise((resolve) => {
    // Get current position and size
    const rect = element.getBoundingClientRect();
    
    // Extract current transforms
    const transform = element.style.transform || "translate(0px, 0px) scale(1)";
    const xMatch = transform.match(/translateX\(([-\d.]+)/);
    const yMatch = transform.match(/translateY\(([-\d.]+)/);
    
    const currentX = xMatch ? parseFloat(xMatch[1]) : 0;
    const currentY = yMatch ? parseFloat(yMatch[1]) : 0;

    // Store original data for restoration
    const originalData = {
      x: currentX,
      y: currentY,
      width: element.offsetWidth,
      height: element.offsetHeight,
      left: rect.left,
      top: rect.top,
    };

    // Force element into fixed positioning with explicit inline size/position
    // so we can animate width/height/top/left without CSS rules colliding.
    element.style.position = element.style.position || "fixed";
    element.style.left = `${rect.left}px`;
    element.style.top = `${rect.top}px`;
    element.style.width = `${rect.width}px`;
    element.style.height = `${rect.height}px`;
    element.style.margin = "0";

    // Animate to fullscreen using inline style properties
    gsap.to(element, {
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      duration: duration,
      ease: "power3.inOut",
      overwrite: "auto",
      onComplete: () => resolve(originalData),
    });
  });
};

/**
 * Animate window restore from maximized state
 * @param {HTMLElement} element - Window element to animate
 * @param {Object} originalData - Original position and size
 * @param {Object} options - Animation options
 * @returns {Promise} Animation promise
 */
export const animateRestoreFromMaximize = (element, originalData = {}, options = {}) => {
  const {
    duration = 0.35,
  } = options;

  return new Promise((resolve) => {
    // Animate back to original size/position using stored rect data
    const targetLeft = originalData.left !== undefined ? originalData.left : 0;
    const targetTop = originalData.top !== undefined ? originalData.top : 0;
    const targetWidth = originalData.width !== undefined ? `${originalData.width}px` : "auto";
    const targetHeight = originalData.height !== undefined ? `${originalData.height}px` : "auto";

    gsap.to(element, {
      left: targetLeft,
      top: targetTop,
      width: targetWidth,
      height: targetHeight,
      duration: duration,
      ease: "power3.inOut",
      overwrite: "auto",
      onComplete: resolve,
    });
  });
};

/**
 * Animate window close with fade and scale effect
 * @param {HTMLElement} element - Window element to animate
 * @param {Object} options - Animation options
 * @returns {Promise} Animation promise
 */
export const animateClose = (element, options = {}) => {
  const {
    duration = 0.3,
  } = options;

  return new Promise((resolve) => {
    const tl = gsap.timeline({
      onComplete: resolve,
    });

    tl.to(
      element,
      {
        opacity: 0,
        scale: 0.85,
        y: 20,
        duration: duration,
        ease: "power2.in",
      },
      0
    );
  });
};

/**
 * Create GSAP context for window animations
 * Useful for cleanup in React components
 * @param {Function} callback - Animation setup function
 * @param {Array} dependencies - Dependency array for context
 * @returns {Object} GSAP context object
 */
export const createAnimationContext = (callback, dependencies = []) => {
  return {
    callback,
    dependencies,
  };
};
