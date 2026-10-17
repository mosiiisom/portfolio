"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ScrambleText from "./ui/ScrambleText";
import { siteConfig } from "@/config/site";
import { useI18n } from "./I18nProvider";

export default function AboutMe() {
  const { dict, locale } = useI18n();
  const t = dict.about;
  // Mirror the scroll drift in RTL so phrases move away from their reading edge.
  const sign = locale === "fa" ? -1 : 1;
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 40%"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const goLeft = useTransform(progress, [0, 1], ["0em", `${-2.4 * sign}em`]);
  const goRight = useTransform(progress, [0, 1], ["0em", `${1.6 * sign}em`]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label={t.heading}
      className="relative mt-[100vh] min-h-screen bg-background overflow-hidden flex flex-col md:items-stretch"
    >
      <div className="grow w-full grid grid-cols-24 min-h-full px-4 justify-end">
        
        <div className="col-span-24 md:col-span-10 md:min-h-screen h-[550px] gap-4" id="mosi-cursor">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
             className="relative flex h-full items-end justify-center">
            <motion.span 
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
            className="absolute font-bold text-[clamp(32px,30vw,12rem)] md:text-[clamp(32px,50vw,12rem)] text-white top-[0%] md:top-[14%] left-1/2 -translate-x-1/2 translate-x-[-60%]">
              {t.who}
            </motion.span>
            <motion.span
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
              className="absolute font-bold text-[clamp(32px,40vw,15rem)]  md:text-[clamp(32px,60vw,15rem)] text-white top-[25%]  md:top-[35%] left-1/2 -translate-x-1/2 translate-x-25 z-40">
              <ScrambleText text={t.i} as="span" onHover={false}  repeat={true} repeatDelayMin={6000} repeatDelayMax={12000}/>
            </motion.span>
            <motion.span
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.7 }}
              className="absolute font-bold text-[clamp(32px,32vw,12rem)] md:text-[clamp(32px,50vw,12rem)] text-white top-[55%] md:top-[58%] -translate-x-1/2 translate-x-[-35%] z-40 drop-shadow-lg drop-shadow-black">
              {t.am}
            </motion.span>
            <motion.img
              src="/images/mosi.png"
              alt={t.imageAlt}
              className="absolute h-[83%] md:h-[70%] left-1/2 -translate-x-1/2 bottom-0 z-30 drop-shadow-2xl drop-shadow-background"
              initial={{ opacity: 0, y: 80, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            />
            <div className="bg-gradient-to-b to-background w-full h-16 absolute bottom-0 z-30" ></div>
          </motion.div>
        </div>

        {/* Text Area */}
        <div className="col-span-24 md:col-span-14 flex flex-col gap-8">
          <div className="hidden md:flex min-h-1/3 flex-col items-end pb-4 justify-end px-12">
            <div className="flex flex-col gap-2 items-start w-[150px]">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"><ScrambleText text={t.github} dir="ltr" className="font-pixel-square" /></a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer"><ScrambleText text={t.linkedin} dir="ltr" className="font-pixel-square" /></a>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden pb-8">
            <p className="about-text text-[clamp(16px,1.8vw,48px)] tracking-[-0.02em] leading-[1.5] text-white hidden md:block">
              {t.phrases.map((phrase, i) =>
                phrase.br ? (
                  <br key={i} />
                ) : (
                  <motion.span
                    key={i}
                    className={`word ${phrase.s === "l" ? "word1" : phrase.s === "r" ? "word2" : ""}`}
                    style={phrase.s === "l" ? { x: goLeft } : phrase.s === "r" ? { x: goRight } : undefined}
                  >
                    {phrase.t}
                  </motion.span>
                ),
              )}
            </p>
            <p className="about-text-sm md:hidden text-[1.5em] tracking-[-0.02em] leading-[1.7] text-white pb-4 mt-18">
              {t.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}