"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, BookOpen, Cpu, Rocket } from "lucide-react";

export function NowPage() {
  const t = useTranslations("now");

  const items = [
    { icon: Rocket, title: "working", desc: "workingDesc" },
    { icon: BookOpen, title: "learning", desc: "learningDesc" },
    { icon: Cpu, title: "reading", desc: "readingDesc" },
    { icon: Code2, title: "building", desc: "buildingDesc" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-mono mb-2">{t("subtitle")}</p>
          <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border/40 rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <Icon className="h-8 w-8 text-primary mb-3" />
                <h2 className="font-semibold text-lg mb-2">{t(item.title)}</h2>
                <p className="text-muted-foreground">{t(item.desc)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
