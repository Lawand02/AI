"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { achievements } from "@/config/achievements";
import { Award, Trophy, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const typeIcons = {
  certification: Trophy,
  award: Award,
  milestone: Star,
};

const typeColors: Record<string, string> = {
  certification: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  award: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  milestone: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
};

export function Achievements() {
  const t = useTranslations("achievements");

  return (
    <section id="achievements" className="py-24 relative bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-mono mb-2">{t("subtitle")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = typeIcons[achievement.type];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border/40 rounded-xl p-5 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${typeColors[achievement.type]}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.year}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs capitalize"
                      >
                        {achievement.type}
                      </Badge>
                    </div>
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
