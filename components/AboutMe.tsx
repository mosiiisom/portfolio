"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ScrambleText from "./ScrambleText";

export default function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 40%"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Different movements for each word group
  const word1Move = useTransform(progress, [0, 1], ["-80px", "0px"]);   // from left
  const word2Move = useTransform(progress, [0, 1], ["80px", "0px"]);    // from right
  const word3Move = useTransform(progress, [0, 1], ["-120px", "0px"]);  // stronger from left

  const goLeft = useTransform(progress, [0, 1], ["0em", "-2.4em"]);
  const goRight = useTransform(progress, [0, 1], ["0em", "1.6em"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-primary overflow-hidden flex flex-col items-stretch"
    >
      <div className="grow w-full grid grid-cols-24 min-h-full px-4 justify-end">
        
        <div className="col-span-24 md:col-span-10 min-h-screen gap-4">
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
            className="absolute font-bold  text-[clamp(32px,50vw,12rem)] text-white top-[14%] left-1/2 -translate-x-1/2 translate-x-[-60%]">
              WHO
            </motion.span>
            <motion.span
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
              className="absolute font-bold  text-[clamp(32px,60vw,15rem)] text-white top-[36%] left-1/2 -translate-x-1/2 translate-x-25 z-40 ">
              I
            </motion.span>
            <motion.span
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.7 }}
              className="absolute font-bold text-[clamp(32px,50vw,12rem)] text-white top-[58%] -translate-x-1/2 translate-x-[-35%] z-40 drop-shadow-lg drop-shadow-black">
              AM
            </motion.span>
            <motion.img
              src="/images/mosi.png"
              alt="Mostafa Dehghani - Mosi"
              className="absolute h-[70%] left-1/2 -translate-x-1/2 bottom-0 z-30 drop-shadow-2xl drop-shadow-black"
              initial={{ opacity: 0, y: 80, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            />
            <div className="bg-gradient-to-b to-primary w-full h-16 absolute bottom-0 z-30" ></div>
          </motion.div>
        </div>

        {/* Text Area */}
        <div className="col-span-24 md:col-span-14 flex flex-col gap-8">
          <div className="min-h-1/3 flex flex-col items-end pb-4 justify-end px-12">
            <div className="flex flex-col gap-2 items-start w-[150px]">
              <p><ScrambleText text="> GitHub" className="font-pixel-square" /></p>
              <p><ScrambleText text="> Linkdin" className="font-pixel-square" /></p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden pb-8">
            <p className="about-text text-[clamp(16px,1.8vw,48px)] tracking-[-0.02em] leading-[1.5] text-white">
              
              <motion.span className="word word1" style={{x:goLeft}}>My journey</motion.span>
              <motion.span className="word">started in</motion.span>
              <motion.span className="word word2" style={{x:goRight}}>my teens</motion.span>
              <motion.span className="word word1" style={{x:goLeft}}>with game modding</motion.span>
              <motion.span className="word ">and endless hours</motion.span>
              <motion.span className="word word1" style={{x:goLeft}}>on a noisy</motion.span>
              <motion.span className="word">dial-up connection.</motion.span>
              <br/>

              <motion.span className="word word2" style={{x:goRight}}>That curiosity</motion.span>
              <motion.span className="word  word1" style={{x:goLeft}}>led me</motion.span>
              <motion.span className="word word2" style={{x:goRight}}>to freelance PHP</motion.span>
              <motion.span className="word">development and</motion.span>
              <motion.span className="word word1" style={{x:goLeft}}>building custom</motion.span>
              <motion.span className="word word1" style={{x:goLeft}}>WordPress themes</motion.span>
              <motion.span className="word" >and plugins.</motion.span>

              <motion.span className="word word2" style={{x:goRight}}>Since 2018,</motion.span>
              <motion.span className="word word1" style={{x:goLeft}}>I’ve been building</motion.span>
              <motion.span className="word word2" style={{x:goRight}}>trading tools,</motion.span>
              <motion.span className="word">market analytics,</motion.span>
              <motion.span className="word word1" style={{x:goLeft}}>cold wallets,</motion.span>
              <motion.span className="word">and automated</motion.span>
              <motion.span className="word word2" style={{x:goRight}}>trading systems</motion.span>
              <motion.span className="word">for hundreds</motion.span>
              <motion.span className="word word2" style={{x:goRight}}>of crypto traders.</motion.span>

              <motion.span className="word">Now, I’m</motion.span>
              <motion.span className="word word1" style={{x:goLeft}}>a passionate</motion.span>
              <motion.span className="word">full-stack developer</motion.span>
              <motion.span className="word word2" style={{x:goRight}}>seeking new challenges</motion.span>
              <motion.span className="word">and exciting opportunities.</motion.span>

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}