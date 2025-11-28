import { useEffect, useRef } from "react";
import gsap from "gsap";

const DesktopEntrance = ({ isVisible, children }) => {
  const contentRef = useRef(null);
  const isPreloadingRef = useRef(!isVisible); // Track if we're preloading

  // Initialize hidden state and preload all elements
  useEffect(() => {
    if (contentRef.current) {
      // Always hide content initially (whether preloading or after loading)
      gsap.set(contentRef.current, { opacity: 0, pointerEvents: isVisible ? "auto" : "none" });
      
      const navbar = contentRef.current.querySelector("nav");
      const welcome = contentRef.current.querySelector("[class*='welcome']");
      const dock = contentRef.current.querySelector("[class*='dock']");
      const windows = contentRef.current.querySelectorAll(
        "[class*='window'], [class*='finder'], [class*='safari'], [class*='terminal']"
      );
      const home = contentRef.current.querySelector("[class*='home']");

      // Set initial hidden states - this allows React to render components in background
      if (navbar) gsap.set(navbar, { opacity: 0, y: -40 });
      if (welcome) gsap.set(welcome, { opacity: 0, scale: 0.92 });
      if (dock) gsap.set(dock, { opacity: 0, y: 60 });
      if (windows.length > 0) gsap.set(windows, { opacity: 0, scale: 0.9, y: 20 });
      if (home) gsap.set(home, { opacity: 0 });
    }
  }, [isVisible]);

  useEffect(() => {
    if (!contentRef.current) return;

    // Update preloading state
    isPreloadingRef.current = !isVisible;

    if (!isVisible) {
      // While preloading (loading screen still active)
      gsap.to(contentRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.1,
      });
      return;
    }

    // When visible, start smooth transition animations
    const tl = gsap.timeline();

    // Fade in the main content container
    tl.fromTo(
      contentRef.current,
      { opacity: 0, pointerEvents: "none" },
      { opacity: 1, pointerEvents: "auto", duration: 0.6, ease: "power2.out" }
    );

    // Stagger animation for main components
    const navbar = contentRef.current.querySelector("nav");
    const welcome = contentRef.current.querySelector("[class*='welcome']");
    const dock = contentRef.current.querySelector("[class*='dock']");
    const windows = contentRef.current.querySelectorAll(
      "[class*='window'], [class*='finder'], [class*='safari'], [class*='terminal']"
    );

    // Navbar slides down from top with smooth easing
    if (navbar) {
      tl.fromTo(
        navbar,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "cubic.out" },
        0.15
      );
    }

    // Welcome section fades and scales up smoothly
    if (welcome) {
      tl.fromTo(
        welcome,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
        0.2
      );
    }

    // Dock slides up from bottom with ultra-smooth easing
    if (dock) {
      tl.fromTo(
        dock,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9, ease: "cubic.out" },
        0.3
      );
    }

    // Windows fade in with stagger
    if (windows.length > 0) {
      tl.fromTo(
        Array.from(windows),
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1)",
          stagger: 0.08,
        },
        0.5
      );
    }

    // Home component (main content) fades in last
    const home = contentRef.current.querySelector("[class*='home']");
    if (home) {
      tl.fromTo(
        home,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        0.7
      );
    }

    return () => {
      tl.kill();
    };
  }, [isVisible]);

  return (
    <div ref={contentRef} style={{ opacity: 0, pointerEvents: "none" }}>
      {children}
    </div>
  );
};

export default DesktopEntrance;