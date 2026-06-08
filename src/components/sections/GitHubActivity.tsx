"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GitBranch, BookOpen, Star, GitFork } from "lucide-react";

const languages = [
  { name: "VHDL", percentage: 28, color: "bg-purple-500" },
  { name: "Python", percentage: 22, color: "bg-blue-500" },
  { name: "TypeScript", percentage: 18, color: "bg-indigo-500" },
  { name: "C++", percentage: 12, color: "bg-green-500" },
  { name: "HTML/CSS", percentage: 10, color: "bg-orange-500" },
  { name: "Shell", percentage: 5, color: "bg-yellow-500" },
  { name: "PHP", percentage: 5, color: "bg-pink-500" },
];

export function GitHubActivity() {
  const t = useTranslations("github");

  return (
    <section id="github" className="py-24 relative bg-muted/30">
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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card border border-border/40 rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-primary" />
              GitHub Stats
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { icon: BookOpen, value: "10", key: "repos" },
                { icon: Star, value: "8", key: "stars" },
                { icon: GitFork, value: "2", key: "forks" },
              ].map((stat) => (
                <div
                  key={stat.key}
                  className="text-center p-3 rounded-lg bg-muted/50"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">
                    {t(stat.key)}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <img
                src="https://ghchart.rshah.org/Lawand02"
                alt="Lawand02's GitHub contribution chart"
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card border border-border/40 rounded-xl p-6"
          >
            <h3 className="font-semibold mb-4">{t("topLanguages")}</h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{lang.name}</span>
                    <span className="text-muted-foreground">
                      {lang.percentage}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full rounded-full ${lang.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Lawand02&layout=compact&theme=transparent&hide_border=true`}
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
