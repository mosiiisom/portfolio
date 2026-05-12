'use client';

import { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  scrambleSpeed?: number;
  revealSpeed?: number;
  chars?: string;
  onHover?: boolean; // Trigger scramble on hover
}

const CHARS = '!@#$%^&*()_+{}[]|;:,.<>?~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function ScrambleText({
  text,
  className = '',
  delay = 700,
  scrambleSpeed = 50,
  revealSpeed = 60,
  chars = CHARS,
  onHover = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = (targetText: string, isHover = false) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsAnimating(true);
    let current = Array.from(targetText).map(() => chars[Math.floor(Math.random() * chars.length)]);

    let progress = 0;
    const speed = isHover ? scrambleSpeed * 0.6 : scrambleSpeed; // Faster on hover

    intervalRef.current = setInterval(() => {
      progress += 1;

      for (let i = 0; i < targetText.length; i++) {
        if (i < progress) {
          current[i] = targetText[i]; // Fix character
        } else {
          current[i] = chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(current.join(''));

      if (progress >= targetText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(targetText);
        setIsAnimating(false);
      }
    }, speed);
  };

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      scramble(text);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, delay]);

  // Hover effect
  const handleMouseEnter = () => {
    if (onHover) {
      scramble(text, true);
    }
  };

  return (
    <span
      className={`${className} inline-block transition-all duration-75 ${isAnimating ? 'text-[#00ff9f]' : ''}`}
      onMouseEnter={handleMouseEnter}
      style={{ minWidth: `${text.length}ch` }} // Prevent layout shift
    >
      {displayText || text}
    </span>
  );
}