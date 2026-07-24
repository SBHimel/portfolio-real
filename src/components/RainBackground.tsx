"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RainBackground() {
  const [drops, setDrops] = useState<{ id: number; left: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate 50 drops for better visibility
    const newDrops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{ y: "110vh", opacity: [0, 0.4, 0.4, 0] }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            ease: "linear",
            delay: drop.delay,
          }}
          className="absolute w-[1px] h-8 bg-white/40 rounded-full"
          style={{ left: drop.left }}
        />
      ))}
    </div>
  );
}
