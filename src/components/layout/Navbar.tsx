"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
  { key: "blog", href: "blog" },
  { key: "now", href: "now" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const navigate = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      window.location.href = `/AI/${locale}/${href}`;
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href={`/AI/${locale}`} className="text-xl font-bold text-gradient">
          LY
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href.startsWith("#") ? item.href : `/AI/${locale}/${item.href}`}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-lg"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => navigate(item.href)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
