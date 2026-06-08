"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { projects, projectCategories } from "@/config/projects";

export function Projects() {
  const t = useTranslations("projects");
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects.filter((p) => p.featured)
      : projects.filter(
          (p) => p.category.includes(active) && p.featured
        );

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-sm text-primary font-mono mb-2">{t("subtitle")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("title")}</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={active === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(cat.id)}
            >
              {t(cat.id === "all" ? "all" : cat.id)}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full flex flex-col hover:border-primary/50 transition-all group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          {project.stars > 0 && (
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" /> {project.stars}
                            </span>
                          )}
                          {project.forks > 0 && (
                            <span className="flex items-center gap-1">
                              <GitFork className="h-3 w-3" /> {project.forks}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {project.longDescription || project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-1">
                            <GitBranch className="h-4 w-4" />
                          {t("viewGithub")}
                        </Button>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            {t("liveDemo")}
                          </Button>
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-muted-foreground py-12"
              >
                {t("noProjects")}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
