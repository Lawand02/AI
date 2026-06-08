"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Focus, Mail, FolderGit2, Briefcase, Code2, GraduationCap, Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const stats = [
  { icon: FolderGit2, value: 10, key: "projects" },
  { icon: Briefcase, value: 3, key: "experience" },
  { icon: Code2, value: 25, key: "technologies" },
];

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 relative scroll-mt-20">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("description")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
              {t("mission")}
            </p>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                {t("location")}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                {t("origin")}
              </span>
              <span className="flex items-center gap-1">
                <Focus className="h-4 w-4 text-primary" />
                {siteConfig.focus}
              </span>
              {siteConfig.study && (
                <a href={siteConfig.studyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  {siteConfig.study}
                </a>
              )}
              <a href={siteConfig.companyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Building2 className="h-4 w-4 text-primary" />
                {t("company")}
              </a>
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4 text-primary" />
                {siteConfig.email}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.key}
                  className="bg-card border border-border/40 rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gradient">{stat.value}+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t(stat.key)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-card border border-border/40 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-primary mb-4 text-center">{t("languages")}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {siteConfig.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full">
                    <span className="text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">—</span>
                    <span className="text-xs text-primary font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
