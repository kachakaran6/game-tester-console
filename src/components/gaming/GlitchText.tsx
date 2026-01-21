import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const GlitchText = ({
  text,
  className = "",
  delay = 0,
}: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          const revealedPart = text.slice(0, currentIndex);
          const scrambledPart = text
            .slice(currentIndex)
            .split("")
            .map(() => chars[Math.floor(Math.random() * chars.length)])
            .join("");

          setDisplayText(revealedPart + scrambledPart);
          currentIndex++;
        } else {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }
    }, 100);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
    >
      <span className={isGlitching ? "animate-glitch" : ""}>{displayText}</span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-primary opacity-70"
            style={{
              clipPath: "inset(20% 0 60% 0)",
              transform: "translate(-2px, 0)",
            }}
          >
            {displayText}
          </span>
          <span
            className="absolute top-0 left-0 text-neon-pink opacity-70"
            style={{
              clipPath: "inset(60% 0 10% 0)",
              transform: "translate(2px, 0)",
            }}
          >
            {displayText}
          </span>
        </>
      )}
    </motion.span>
  );
};
