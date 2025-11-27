import { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const particlesRef = useRef(null);
  const orbitRef = useRef(null);
  const bubblesRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();
    let loadingProgress = 0;

    // Create floating particles with gradient colors
    const particleCount = 25;
    const colors = [
      "from-violet-300 to-purple-400",
      "from-fuchsia-300 to-pink-400",
      "from-purple-300 to-violet-400",
      "from-pink-300 to-rose-400",
    ];
    
    const particlesHTML = Array.from({ length: particleCount })
      .map(
        (_, i) => `
      <div class="absolute rounded-full bg-gradient-to-br ${colors[i % colors.length]} opacity-50 blur-sm"
        style="
          left: ${Math.random() * 100}%; 
          top: ${Math.random() * 100}%;
          width: ${Math.random() * 8 + 3}px;
          height: ${Math.random() * 8 + 3}px;
          filter: blur(${Math.random() * 2}px);
        "></div>
    `
      )
      .join("");
    if (particlesRef.current) {
      particlesRef.current.innerHTML = particlesHTML;
    }

    // Animate particles floating
    const particles = particlesRef.current?.querySelectorAll("div") || [];
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: gsap.utils.random(-100, 100),
        x: gsap.utils.random(-100, 100),
        opacity: gsap.utils.random(0.1, 0.6),
        duration: gsap.utils.random(5, 10),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });

    // Fade in container
    tl.fromTo(
      containerRef.current,
      { opacity: 0, pointerEvents: "auto" },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Rotate orbit
    tl.to(
      orbitRef.current,
      {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none",
      },
      0
    );

    // Animate logo in with scale and rotation
    tl.fromTo(
      logoRef.current,
      { scale: 0, opacity: 0, rotation: -360 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
      },
      0.2
    );

    // Add enhanced glow effect to logo
    gsap.to(logoRef.current, {
      boxShadow:
        "0 0 50px rgba(168, 85, 247, 0.6), 0 0 100px rgba(168, 85, 247, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.4)",
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate text characters with stagger
    const textElements = textRef.current?.querySelectorAll("span") || [];
    if (textElements.length > 0) {
      tl.fromTo(
        textElements,
        { opacity: 0, y: 40, rotationX: 90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "back.out(1.4)",
        },
        0.8
      );
    }

    // Pulse animation for logo
    const pulseTl = gsap.timeline({ repeat: -1 });
    pulseTl.to(logoRef.current, {
      scale: 1.15,
      duration: 0.9,
      ease: "sine.inOut",
    });
    pulseTl.to(
      logoRef.current,
      { scale: 1, duration: 0.9, ease: "sine.inOut" },
      0
    );

    // Smooth progress animation - 0% to 100% over the loading period
    let progressValue = 0;
    
    // Create a separate gsap tween for smooth progress percentage
    gsap.to(
      { progress: 0 },
      {
        progress: 100,
        duration: 4,
        ease: "power1.inOut",
        onUpdate: function () {
          progressValue = Math.round(this.targets()[0].progress);
          if (progressRef.current) {
            progressRef.current.textContent = `${Math.min(progressValue, 100)}%`;
          }
        },
      }
    );

    // Animate progress bar fill from 0 to 100% to match counter
    // Start with scaleX: 0 and animate to scaleX: 1
    tl.fromTo(
      progressBarRef.current,
      {
        scaleX: 0,
        opacity: 1,
      },
      {
        scaleX: 1,
        opacity: 1,
        duration: 4,
        ease: "power1.inOut",
      },
      0
    );

    // Fade out and complete - timing is critical for desktop entrance sync
    // Should complete at exactly 4 seconds so desktop entrance starts immediately
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          pulseTl.kill();
          if (onComplete) {
            onComplete();
          }
        },
      },
      3.5
    );

    return () => {
      tl.kill();
      pulseTl.kill();
      particles.forEach((particle) => {
        gsap.killTweensOf(particle);
      });
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-br from-purple-50 via-pink-50 to-violet-50 pointer-events-auto overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div ref={particlesRef} className="absolute inset-0 w-full h-full"></div>

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 inset-x-0 h-40 bg-linear-to-b from-purple-100/50 via-transparent to-transparent"></div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-violet-100/50 via-transparent to-transparent"></div>

      {/* Decorative Glow Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-linear-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-violet-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 z-10 relative">
        {/* Orbit Container */}
        <div
          ref={orbitRef}
          className="relative w-40 h-40 flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Outer Orbit Ring 1 */}
          <div className="absolute inset-0 rounded-full border-2 border-violet-300/50"></div>

          {/* Outer Orbit Ring 2 */}
          <div className="absolute inset-4 rounded-full border border-pink-300/40"></div>

          {/* Rotating Orbit Elements */}
          <div className="absolute w-full h-full">
            <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 bg-linear-to-br from-pink-400 to-purple-500 rounded-full shadow-lg shadow-pink-400/60"></div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 -translate-y-1 translate-x-1 bg-violet-400 rounded-full opacity-70 shadow-md shadow-violet-400/40"></div>
            <div className="absolute top-1/2 right-0 w-2 h-2 translate-x-1 -translate-y-1/2 bg-fuchsia-400 rounded-full opacity-60 shadow-md shadow-fuchsia-400/40"></div>
            <div className="absolute bottom-1/4 left-0 w-2.5 h-2.5 -translate-x-1 bg-pink-300 rounded-full opacity-70 shadow-md shadow-pink-300/40"></div>
          </div>

          {/* Main Logo */}
          <div
            ref={logoRef}
            className="relative w-24 h-24 flex items-center justify-center bg-linear-to-br from-purple-500 via-pink-500 to-violet-600 rounded-full shadow-2xl border-2 border-white/70"
            style={{
              boxShadow:
                "0 20px 50px rgba(168, 85, 247, 0.4), 0 0 80px rgba(236, 72, 153, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.5)",
            }}
          >
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
        </div>

        {/* Text Section */}
        <div ref={textRef} className="text-center space-y-4">
          <div className="text-5xl font-black bg-linear-to-r from-purple-600 via-pink-600 to-violet-700 bg-clip-text text-transparent tracking-wider drop-shadow-lg">
            {"YASHU'S".split("").map((char, i) => (
              <span key={i} className="inline-block" style={{ perspective: "1000px" }}>
                {char}
              </span>
            ))}
          </div>
          <div className="h-1.5 w-40 mx-auto bg-linear-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
          <div className="text-3xl font-bold bg-linear-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent tracking-wide">
            {"PORTFOLIO".split("").map((char, i) => (
              <span key={i} className="inline-block" style={{ perspective: "1000px" }}>
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-96 space-y-5 mt-6">
          {/* Progress Bar Container */}
          <div className="relative h-2.5 bg-linear-to-r from-purple-100 to-pink-100 rounded-full overflow-hidden border border-violet-200/60 shadow-md">
            {/* Animated Background Shimmer */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-50"></div>

            {/* Progress Fill */}
            <div
              ref={progressBarRef}
              className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-violet-500 origin-left shadow-lg shadow-pink-400/70 relative overflow-hidden rounded-full"
              style={{ transformOrigin: "left" }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Progress Stats */}
          <div className="flex justify-between items-center px-2">
            <div className="text-xs font-semibold text-purple-600/80 tracking-widest">
              INITIALIZING
            </div>
            <span
              ref={progressRef}
              className="text-sm font-bold text-transparent bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text"
            >
              0%
            </span>
          </div>
        </div>

        {/* Loading Text with Animation */}
        <div className="mt-8 space-y-3">
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <span className="text-sm text-violet-600 font-bold tracking-wider">
                LOADING
              </span>
              <div className="flex gap-1.5">
                <span
                  className="w-2 h-2 rounded-full bg-linear-to-br from-purple-400 to-pink-500"
                  style={{
                    animation: "bounce 1.2s infinite",
                  }}
                ></span>
                <span
                  className="w-2 h-2 rounded-full bg-linear-to-br from-purple-400 to-pink-500"
                  style={{
                    animation: "bounce 1.2s infinite 0.2s",
                  }}
                ></span>
                <span
                  className="w-2 h-2 rounded-full bg-linear-to-br from-purple-400 to-pink-500"
                  style={{
                    animation: "bounce 1.2s infinite 0.4s",
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-violet-500/70 font-medium tracking-wider">
            Preparing your portfolio experience...
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
