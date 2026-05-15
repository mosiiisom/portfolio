// components/ui/GradientIcon.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GradientIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  size?: number;
  speed?: number;
  iconRatio?: number;
  defaultBg?: string;
  gradientColors?: string;
  /** Enable gradient on parent group hover */
  groupHover?: boolean;
}

export default function GradientIcon({
  Icon,
  className,
  size = 58,
  speed = 0.8,
  iconRatio = 0.90,
  defaultBg = "rgba(255, 255, 255, 0.8)",
  gradientColors = "#dd7bbb, #d79f1e, #5a922c, #4c7894, #dd7bbb",
  groupHover = false,
}: GradientIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const extractorRef = useRef<HTMLDivElement>(null);
  const maskId = `mask-${Math.random().toString(36).slice(2)}`;
  const [pathData, setPathData] = useState<string>("");

  // Auto-extract path
  useEffect(() => {
    const extractPath = () => {
      const svgElement = extractorRef.current?.querySelector("svg");
      if (!svgElement) return;
      const pathElement = svgElement.querySelector("path");
      if (pathElement?.getAttribute("d")) {
        setPathData(pathElement.getAttribute("d")!);
      }
    };

    const timeout = setTimeout(extractPath, 10);
    return () => clearTimeout(timeout);
  }, [Icon]);

  // Rotation animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !pathData) return;

    let angle = 0;
    let raf: number;

    const animate = () => {
      angle = (angle + speed) % 360;
      container.style.setProperty("--gradient-angle", `${angle}deg`);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [speed, pathData]);

  const iconSize = Math.floor(size * iconRatio);
  const offset = (size - iconSize) / 2;

  return (
    <>
      <div ref={extractorRef} className="hidden">
        <Icon />
      </div>

      <div
        ref={containerRef}
        className={cn("relative", className)}
        style={{
          width: size,
          height: size,
          "--gradient-angle": "0deg",
        } as React.CSSProperties}
      >
        {pathData && (
          <>
            <div
              className="absolute inset-0 rounded-2xl transition-all duration-500"
              style={{
                background: defaultBg,
                maskImage: `url(#${maskId})`,
                WebkitMaskImage: `url(#${maskId})`,
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
              }}
            />

            <div
              className={cn(
                "absolute inset-0 rounded-2xl transition-all duration-500",
                groupHover 
                  ? "group-hover:opacity-100 opacity-0" 
                  : "hover:opacity-100 opacity-0"
              )}
              style={{
                background: `conic-gradient(from var(--gradient-angle) at 50% 50%, ${gradientColors})`,
                maskImage: `url(#${maskId})`,
                WebkitMaskImage: `url(#${maskId})`,
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
              }}
            />

            {/* Mask */}
            <svg width="0" height="0" className="absolute" aria-hidden="true">
              <defs>
                <mask id={maskId}>
                  <rect width="100%" height="100%" fill="black" />
                  <path
                    d={pathData}
                    fill="white"
                    stroke="white"
                    strokeWidth={0}
                    transform={`translate(${offset} ${offset}) scale(${iconSize / 24})`}
                  />
                </mask>
              </defs>
            </svg>
          </>
        )}
      </div>
    </>
  );
}