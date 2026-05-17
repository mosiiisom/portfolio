'use client';

import { useEffect, useRef, useState } from 'react';

export default function MosiCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      if (isActive) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Add hover listeners to all elements with .mosi-cursor-area
    const areas = document.querySelectorAll('.mosi-cursor-area');

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    areas.forEach(area => {
      area.addEventListener('mouseenter', handleMouseEnter);
      area.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      areas.forEach(area => {
        area.removeEventListener('mouseenter', handleMouseEnter);
        area.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isActive]);

  return (
    <div
      ref={cursorRef}
      className={`mosi-custom-cursor ${isActive ? 'opacity-100' : 'opacity-0'}`}
    >
      <svg
        width="168"
        height="42"
        viewBox="0 0 87.55 19.15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,17.33V0h1.82v1.82h.91v2.74h-.91v12.77H0ZM5.47,14.59v-1.82h-.91v-2.74h-.91v-2.74h-.91v-2.74h1.82v2.74h.91v2.74h.91v2.74h1.82v-2.74h.91v-2.74h.91v-2.74h1.82v2.74h-.91v2.74h-.91v2.74h-.91v1.82h-.91v1.82h-1.82v-1.82h-.91ZM12.77,17.33V4.56h-.91V1.82h.91V0h1.82v17.33h-1.82Z" fill="white" stroke="black" strokeWidth="0.8"/>
        <path d="M19.15,15.5v-1.82h-.91v-1.82h-.91v-6.38h.91v-1.82h.91v-1.82h.91v-.91h1.82v-.91h5.47v.91h1.82v.91h.91v1.82h.91v1.82h.91v6.38h-.91v1.82h-.91v1.82h-.91v.91h-1.82v.91h-5.47v-.91h-1.82v-.91h-.91ZM29.18,5.47v-1.82h-.91v-.91h-.91v-.91h-5.47v.91h-.91v.91h-.91v1.82h-.91v6.38h.91v1.82h.91v.91h.91v.91h5.47v-.91h.91v-.91h.91v-1.82h.91v-6.38h-.91Z" fill="white" stroke="black" strokeWidth="0.8"/>
        <path d="M35.57,16.42v-1.82h-.91v-2.74h1.82v2.74h.91v.91h6.38v-.91h.91v-3.65h-1.82v-.91h-2.74v-.91h-2.74v-.91h-1.82v-.91h-.91V2.74h.91V.91h1.82v-.91h5.47v.91h1.82v.91h.91v1.82h.91v1.82h-1.82v-1.82h-.91v-.91h-.91v-.91h-5.47v.91h-.91v3.65h.91v.91h3.65v.91h2.74v.91h1.82v1.82h.91v3.65h-.91v1.82h-1.82v.91h-6.38v-.91h-1.82Z" fill="white" stroke="black" strokeWidth="0.8"/>
        <path d="M50.16,17.33V0h1.82v17.33h-1.82Z" fill="white" stroke="black" strokeWidth="0.8"/>
        <path d="M63.84,16.42v-1.82h1.82v-.91h1.82v-.91h1.82v-.91h1.82v-.91h1.82v-.91h-1.82v-.91h-1.82v-.91h-1.82v-.91h-1.82v-.91h-1.82v-1.82h1.82v.91h1.82v.91h1.82v.91h1.82v.91h1.82v.91h1.82v2.74h-1.82v.91h-1.82v.91h-1.82v.91h-1.82v.91h-1.82v.91h-1.82Z" fill="white" stroke="black" strokeWidth="0.8"/>
        <path d="M76.61,19.15v-1.82h10.94v1.82h-10.94Z" fill="white" stroke="black" strokeWidth="0.8"/>
      </svg>
    </div>
  );
}