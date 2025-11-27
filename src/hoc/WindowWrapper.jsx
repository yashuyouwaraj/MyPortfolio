import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, restoreWindow } = useWindowStore();
    const { isOpen, zIndex, isMinimized, isMaximized, positionX, positionY } = windows[windowKey];
    const ref = useRef(null);
    const isAnimatingRef = useRef(false);

    // Animation: Open window with fade and scale
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power3.out" }
      );
    }, [isOpen, isMinimized]);

    // Setup dragging functionality
    useGSAP(() => {
      const el = ref.current;
      if (!el || isMinimized || isMaximized) return;

      // Only make draggable if not minimized or maximized
      const [instance] = Draggable.create(el, {
        onPress: () => {
          isAnimatingRef.current = true;
          focusWindow(windowKey);
        },
        onDragEnd: () => {
          isAnimatingRef.current = false;
        },
        bounds: "body", // Keep within viewport
      });

      return () => instance.kill();
    }, [isMinimized, isMaximized]);

    // Handle visibility based on open/minimized state
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isMinimized) {
        // Hide when minimized
        el.style.display = "none";
      } else if (isOpen) {
        // Show when open and not minimized
        el.style.display = "block";
      } else {
        // Hide when closed
        el.style.display = "none";
      }
    }, [isOpen, isMinimized]);

    // Add click handler to restore from minimized state (if clicked from dock)
    const handleMinimizedRestore = (e) => {
      if (e.target === ref.current && isMinimized) {
        restoreWindow(windowKey);
      }
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        data-maximized={isMaximized}
        style={{
          zIndex,
          cursor: isMinimized ? "pointer" : "auto",
          pointerEvents: isOpen ? "auto" : "none",
          minWidth: "300px",
          minHeight: "200px",
        }}
        className="absolute"
        onClick={handleMinimizedRestore}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
