"use client";

import { useEffect, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, GitBranch, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

function useTypewriter(texts: string[], speed = 80, deleteSpeed = 40, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(displayed.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex, texts, speed, deleteSpeed, pause]);

  return displayed;
}

export function Hero() {
  const t = useTranslations("hero");
  const words = useMemo(
    () => [
      "Computer Architecture Engineer",
      "Full-Stack Developer",
      "VHDL Designer",
      "Embedded Systems Enthusiast",
    ],
    []
  );
  const typed = useTypewriter(words);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-muted-foreground mb-4"
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-gradient">{siteConfig.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-10 mb-6"
        >
          <span className="text-xl md:text-2xl text-muted-foreground font-mono">
            {typed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects">
            <Button size="lg" className="gap-2">
              <GitBranch className="h-5 w-5" />
              {t("viewProjects")}
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="secondary" className="gap-2">
              <Mail className="h-5 w-5" />
              {t("contactMe")}
            </Button>
          </a>
          <a href="/AI/resume.pdf" target="_blank">
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="h-5 w-5" />
              {t("downloadResume")}
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
