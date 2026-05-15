'use client';

import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TechStackTitle({wrapperClasse="",classnames = ""}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 70%"]
  });

  return (
    <div 
      ref={containerRef} 
      className={clsx(wrapperClasse,`letter-scroll flex flex-col justify-center items-center h-[200px] lg:h-[400px] py-2`)}
    >
      <div className={clsx(classnames,'text-[clamp(48px,10vw,250px)] font-bold tracking-tight leading-[0.9] lg:leading-[0.85] overflow-hidden flex text-white')}>
        
        {/* T */}
        <motion.span 
          className="letter relative inline-block"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]) }}
        >
          <span>T</span>
          <span className="absolute bottom-full left-0">T</span>
        </motion.span>

        {/* E */}
        <motion.span 
          className="letter relative inline-block"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        >
          <span>E</span>
          <span className="absolute bottom-full left-0">E</span>
        </motion.span>

        {/* C */}
        <motion.span 
          className="letter relative inline-block"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]) }}
        >
          <span>C</span>
          <span className="absolute bottom-full left-0">C</span>
        </motion.span>

        {/* H */}
        <motion.span 
          className="letter relative inline-block mr-[clamp(16px,4.5vw,72px)]"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]) }}
        >
          <span>H</span>
          <span className="absolute bottom-full left-0">H</span>
        </motion.span>

        {/* S */}
        <motion.span 
          className="letter relative inline-block"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        >
          <span>S</span>
          <span className="absolute bottom-full left-0">S</span>
        </motion.span>

        {/* T */}
        <motion.span 
          className="letter relative inline-block"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]) }}
        >
          <span>T</span>
          <span className="absolute bottom-full left-0">T</span>
        </motion.span>

        {/* A */}
        <motion.span 
          className="letter relative inline-block"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        >
          <span>A</span>
          <span className="absolute bottom-full left-0">A</span>
        </motion.span>

        {/* C */}
        <motion.span 
          className="letter relative inline-block"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "0%"]) }}
        >
          <span>C</span>
          <span className="absolute bottom-full left-0">C</span>
        </motion.span>

        {/* K */}
        <motion.span 
          className="letter relative inline-block"
          style={{ translateY: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        >
          <span>K</span>
          <span className="absolute bottom-full left-0">K</span>
        </motion.span>

      </div>
    </div>
  );
}