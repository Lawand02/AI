"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <p className="text-sm text-primary font-mono mb-2">Future</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <div className="flex justify-center">
            <MessageSquare className="h-16 w-16 text-muted-foreground/30" />
          </div>
          <p className="text-muted-foreground mt-4">{t("placeholder")}</p>
        </motion.div>
      </div>
    </section>
  );
}
