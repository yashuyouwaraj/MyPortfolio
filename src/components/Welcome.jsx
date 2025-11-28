import gsap from "gsap";
import { useRef } from "react";
import {useGSAP} from "@gsap/react"

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={`char_${i}_${char.charCodeAt(0)}`}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return ()=>{};

  const letters = container.querySelectorAll("span");
  if (letters.length === 0) return ()=>{};

  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      overwrite: "auto"
    });
  };

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    letters.forEach((letter) => {
      const letterRect = letter.getBoundingClientRect();
      const letterCenterX = letterRect.left - rect.left + letterRect.width / 2;
      const distance = Math.abs(mouseX - letterCenterX);
      const intensity = Math.exp(-(distance ** 2) / 15000);
      const weight = min + (max - min) * intensity;

      animateLetter(letter, weight, 0.1);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base, 0.3);
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null)
  
  useGSAP(()=>{
    if (!titleRef.current || !subtitleRef.current) return;
    
    const titleCleanup=setupTextHover(titleRef.current,"title")
    const subtitleCleanup=setupTextHover(subtitleRef.current,"subtitle")

    return ()=>{
        titleCleanup()
        subtitleCleanup()
    }
  })

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Yashu! Welcome to my",
          "text-3xl font-georama text-white",
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl italic font-georama text-white")}
      </h1>

      <div className="small-screen">
        <p>This portfolio is optimized for tablet and desktop experiences.</p>
      </div>
    </section>
  );
};

export default Welcome;
