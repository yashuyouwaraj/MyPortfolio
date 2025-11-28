import { dockApps } from "#constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Tooltip } from 'react-tooltip'
import gsap from "gsap";
import useWindowStore from "#store/window";
import { animateRestore } from "#utils/windowAnimations";

const Dock = () => {
    const { openWindow, closeWindow, windows, restoreWindow } = useWindowStore();
    const dockRef = useRef(null);
    const isAnimatingRef = useRef(false);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseX) => {
            const { left } = dock.getBoundingClientRect();
            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);

                const intensity = Math.exp(-(distance ** 2.5) / 20000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out",
                });
            });
        };

        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };

        const resetIcons = () =>
            icons.forEach((icon) =>
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out",
                })
            );

        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
        };
    }, []);

    /**
     * Toggle app open/close
     * Handles opening, closing, and restoring from minimized state
     */
    const toggleApp = async (app) => {
        if (!app.canOpen) return;
        if (isAnimatingRef.current) return;

        const window = windows[app.id];

        if (!window) {
            console.error(`Window not found for app: ${app.id}`);
            return;
        }

        // If window is minimized, restore it with animation
        if (window.isMinimized) {
            isAnimatingRef.current = true;
            try {
                const windowEl = document.getElementById(app.id);
                if (windowEl) {
                    // Animate restore first
                    await animateRestore(windowEl, {}, { duration: 0.35 });
                }
                // Then update state to bring to front (this happens after animation)
                restoreWindow(app.id);
            } catch (error) {
                // Handle error silently
            } finally {
                isAnimatingRef.current = false;
            }
            return;
        }

        // If window is already open, close it
        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            // Otherwise open it
            openWindow(app.id);
        }
    };

    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container">
                {dockApps.map(({ id, name, icon, canOpen }) => {
                    const windowState = windows[id];
                    const isMinimized = windowState?.isMinimized;
                    const isActive = windowState?.isOpen && !isMinimized;

                    return (
                        <div key={id} className="relative flex justify-center">
                            <button
                                type="button"
                                className={`dock-icon ${isMinimized ? 'minimized' : ''} ${isActive ? 'active' : ''}`}
                                aria-label={name}
                                data-tooltip-id="dock-tooltip"
                                data-tooltip-content={name}
                                data-tooltip-delay-show={150}
                                disabled={!canOpen}
                                onClick={() => toggleApp({ id, canOpen })}
                                title={isMinimized ? `${name} (minimized)` : name}
                            >
                                <img
                                    src={`/images/${icon}`}
                                    alt={name}
                                    loading="lazy"
                                    className={canOpen ? "" : "opacity-60"}
                                />
                                {/* Indicator for minimized or active windows */}
                                {(isMinimized || isActive) && (
                                    <div className="dock-indicator" />
                                )}
                            </button>
                        </div>
                    );
                })}
                <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    );
};

export default Dock;
