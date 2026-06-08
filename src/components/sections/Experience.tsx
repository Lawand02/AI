"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { experience } from "@/config/achievements";
import { Briefcase, Globe, Code2 } from "lucide-react";

const typeIcons = {
  professional: Briefcase,
  freelance: Globe,
  opensource: Code2,
};

const typeColors = {
  professional: "border-indigo-500",
  freelance: "border-cyan-500",
  opensource: "border-purple-500",
};

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-mono mb-2">{t("subtitle")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("title")}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experience.map((exp, idx) => {
              const Icon = typeIcons[exp.type];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-20"
                >
                  <div
                    className={`absolute left-4 top-1 w-9 h-9 rounded-full bg-card border-2 flex items-center justify-center ${typeColors[exp.type]}`}
                  >
                    <Icon className="h-4 w-4 text-primary" />
                  </div>

                  <div className="bg-card border border-border/40 rounded-xl p-5 hover:border-primary/50 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-primary mb-2">
                      {exp.companyUrl ? (
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company}</a>
                      ) : (
                        exp.company
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
