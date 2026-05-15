// components/TechCard.tsx  (or inside TechStack)

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

interface TechCardProps {
  tech: any;
  index: number;
}

export default function TechCard({ tech, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ scale: 1.03 }}
      className="group relative min-h-[210px]"
    >
      <div className="relative h-full rounded-xl border border-gray-900 bg-[#0a0a0a] p-8">
        {/* Glowing Effect */}
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={90}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <tech.icon
            className="w-12 h-12 mb-4 text-gray-400 transition-all duration-500 group-hover:scale-110 "
          />

          <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
            {tech.name}
          </h3>

          <p className="text-xs text-gray-400 min-h-[44px]">
            {tech.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}