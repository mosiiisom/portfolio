'use client';

import { 
  useState, 
  useEffect, 
  useRef, 
  ElementType,
  useCallback,
  MouseEvent,
  ComponentPropsWithoutRef
} from 'react';

type ScrambleTextProps<T extends ElementType = 'span'> = {
  as?: T;
  text: string;
  className?: string;
  animatedClassName?: string;
  delay?: number;
  scrambleSpeed?: number;

  // Auto Repeat
  repeat?: boolean;
  repeatDelay?: number;
  repeatDelayMin?: number;
  repeatDelayMax?: number;

  // Target specific characters by index (e.g. [0] for first letter)
  repeatIndices?: number[];

  chars?: string;
  onHover?: boolean;
  maxTicks?: number;
} & ComponentPropsWithoutRef<T>;

const CHARS = '!@#$%^&*()_+{}[]|;:,.<>?~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const PERSIAN_CHARS = 'ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی۰۱۲۳۴۵۶۷۸۹';
const PERSIAN_RE = /[\u0600-\u06FF]/;

export default function ScrambleText<T extends ElementType = 'span'>({
  as,
  text,
  className = '',
  animatedClassName='text-accent',
  delay = 700,
  scrambleSpeed = 50,
  repeat = false,
  repeatDelay = 2500,
  repeatDelayMin,
  repeatDelayMax,
  repeatIndices = [],
  chars: charsProp,
  onHover = true,
  maxTicks = 12,
  ...props
}: ScrambleTextProps<T>) {

  // Persian text scrambles with Persian letters so the glyph shapes stay consistent.
  const chars = charsProp ?? (PERSIAN_RE.test(text) ? PERSIAN_CHARS : CHARS);

  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevText, setPrevText] = useState(text);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const repeatTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const Component = (as || 'span') as ElementType;

  // Pattern: Adjusting state when props change during render
  // This avoids synchronous setState in useEffect and cascading renders
  if (text !== prevText) {
    setPrevText(text);
    setDisplayText('');
  }

  const getRandomDelay = useCallback(() => {
    if (repeatDelayMin !== undefined && repeatDelayMax !== undefined) {
      return Math.floor(Math.random() * (repeatDelayMax - repeatDelayMin + 1)) + repeatDelayMin;
    }
    return repeatDelay;
  }, [repeatDelay, repeatDelayMax, repeatDelayMin]);

  // Main scramble function
  const scramble = useCallback((isHover = false, onlyIndices?: number[]) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsAnimating(true);

    const targetIndices = onlyIndices && onlyIndices.length > 0 
      ? onlyIndices 
      : Array.from({ length: text.length }, (_, i) => i);

    const speed = isHover ? Math.max(20, scrambleSpeed * 0.6) : scrambleSpeed;
    let ticks = 0;

    intervalRef.current = setInterval(() => {
      ticks++;

      setDisplayText((current) => {
        // Use current state if available, fallback to target text so we have the right length
        const currentArray = Array.from(current || text);
        
        targetIndices.forEach((idx) => {
          if (idx < text.length) {
            // During animation â random char
            if (ticks < maxTicks) {
              currentArray[idx] = chars[Math.floor(Math.random() * chars.length)];
            } 
            // Last tick â restore original
            else {
              currentArray[idx] = text[idx];
            }
          }
        });
        return currentArray.join('');
      });

      if (ticks >= maxTicks) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, speed);
  }, [text, chars, scrambleSpeed]);

  // Initial load animation (full text reveal)
  useEffect(() => {
    // We already handle clearing text in the render block when text changes.
    // This effect handles the initial mount or text change trigger for animation.
    const timer = setTimeout(() => {
      scramble(false); // Full initial scramble
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, scramble]);

  // Auto Repeat
  useEffect(() => {
    if (!repeat) return;

    const scheduleRepeat = () => {
      const nextDelay = getRandomDelay();

      repeatTimeoutRef.current = setTimeout(() => {
        if (!isAnimating) {
          scramble(false, repeatIndices);
        }
        scheduleRepeat();
      }, nextDelay);
    };

    scheduleRepeat();

    return () => {
      if (repeatTimeoutRef.current) clearTimeout(repeatTimeoutRef.current);
    };
  }, [repeat, repeatIndices, isAnimating, scramble, getRandomDelay]);

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    if (onHover) scramble(true);
    props.onMouseEnter?.(e);
  };

  return (
    <Component
      id="scramble-text"
      className={`${className} inline-block transition-all duration-75 ${
        isAnimating ? animatedClassName : ''
      }`}
      onMouseEnter={handleMouseEnter}
      style={{ minWidth: `${text.length * 0.95}ch` }}
      {...props}
    >
      {displayText}
    </Component>
  );
}
