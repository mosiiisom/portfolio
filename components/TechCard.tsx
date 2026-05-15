// components/TechCard.tsx
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";
import GradientIcon from "./ui/GradientIcon";

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
          <div className="relative mb-4">
            <GradientIcon Icon={tech.icon} size={80} speed={1.2} groupHover={true} />
          </div>

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