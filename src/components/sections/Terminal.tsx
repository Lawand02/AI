"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Terminal() {
  const t = useTranslations("terminal");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: t("intro") },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: "input" as const, text: `$ ${cmd}` }];

    let response = "";
    switch (trimmed) {
      case "help":
        response = t("help");
        break;
      case "about":
        response = t("about");
        break;
      case "skills":
        response = t("skills");
        break;
      case "projects":
        response = t("projects");
        break;
      case "contact":
        response = t("contact");
        break;
      case "social":
        response = t("social");
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "":
        setHistory(newHistory);
        setInput("");
        return;
      default:
        response = t("notFound");
    }

    setHistory([...newHistory, { type: "output", text: response }]);
    setInput("");
  };

  return (
    <section id="terminal" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-sm text-primary font-mono mb-2">{t("subtitle")}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{t("title")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-950 dark:bg-black border border-border/40 rounded-xl overflow-hidden font-mono text-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-950 border-b border-border/40">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground ml-2">terminal</span>
          </div>

          <div
            ref={containerRef}
            className="p-4 h-72 overflow-y-auto space-y-1"
          >
            {history.map((entry, idx) => (
              <div key={idx}>
                {entry.type === "input" ? (
                  <div className="text-green-400">{entry.text}</div>
                ) : (
                  <div className="text-zinc-300">{entry.text}</div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-1">
              <span className="text-green-400">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCommand(input);
                }}
                className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder:text-zinc-600"
                placeholder="type help..."
                autoFocus
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
