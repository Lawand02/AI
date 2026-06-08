"use client";

import { motion } from "framer-motion";

const techs = [
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "VHDL", color: "from-purple-400 to-pink-500" },
  { name: "Python", color: "from-yellow-400 to-orange-500" },
  { name: "Docker", color: "from-blue-400 to-indigo-500" },
  { name: "TypeScript", color: "from-indigo-400 to-purple-500" },
  { name: "Arduino", color: "from-teal-400 to-green-500" },
  { name: "Next.js", color: "from-zinc-400 to-zinc-600" },
  { name: "TensorFlow", color: "from-orange-400 to-red-500" },
  { name: "Laravel", color: "from-red-400 to-rose-500" },
  { name: "Django", color: "from-green-400 to-emerald-500" },
  { name: "RISC-V", color: "from-violet-400 to-purple-500" },
  { name: "Figma", color: "from-pink-400 to-rose-500" },
];

export function TechShowcase() {
  return (
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...techs, ...techs].map((tech, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-10 border border-white/10`}
            >
              <span className="text-sm font-medium text-white drop-shadow-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
