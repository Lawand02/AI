"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Cpu, Code2, Sparkles, Zap } from "lucide-react";

const items = [
  {
    year: "2022",
    title: "Started Journey",
    description: "Began computer architecture studies and created GitHub profile.",
    icon: Sparkles,
  },
  {
    year: "2023",
    title: "First Major Projects",
    description: "Built face-detection (Python) and School-Management-System.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "RISC-V & Robotics",
    description: "Designed RV32I pipelined CPU and Spider Robot.",
    icon: Cpu,
  },
  {
    year: "2025",
    title: "Full-Stack & Beyond",
    description: "Advanced into full-stack development and hardware-software integration.",
    icon: Zap,
  },
];

export function CareerTimeline() {
  const t = useTranslations("about");

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-cyan-500 hidden md:block" />

          {items.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 md:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`hidden md:flex flex-1 ${isLeft ? "justify-end text-right" : "justify-start text-left"}`}>
                  <div className="bg-card border border-border/40 rounded-xl p-5 max-w-sm hover:border-primary/50 transition-all">
                    <span className="text-sm text-primary font-mono">{item.year}</span>
                    <h3 className="font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="md:hidden flex-1">
                  <div className="bg-card border border-border/40 rounded-xl p-4 hover:border-primary/50 transition-all">
                    <span className="text-sm text-primary font-mono">{item.year}</span>
                    <h3 className="font-semibold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
