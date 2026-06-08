"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const emailjsConfigured = !!(emailjsServiceId && emailjsTemplateId && emailjsPublicKey);

export function Contact() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t("validation.name");
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("validation.email");
    if (!form.subject.trim()) e.subject = t("validation.subject");
    if (!form.message.trim()) e.message = t("validation.message");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!emailjsConfigured) {
      alert("EmailJS is not configured. Set NEXT_PUBLIC_EMAILJS_* env vars in .env.local");
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        emailjsPublicKey
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/30 scroll-mt-20">
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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-5"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                placeholder={t("name")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                placeholder={t("email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <input
              placeholder={t("subject")}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
            {errors.subject && (
              <p className="text-xs text-destructive mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <textarea
              rows={5}
              placeholder={t("message")}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1">{errors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full gap-2" disabled={status === "loading"}>
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : status === "success" ? (
              <CheckCircle className="h-4 w-4 text-green-400" />
            ) : status === "error" ? (
              <AlertCircle className="h-4 w-4 text-destructive" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {status === "loading"
              ? t("sending")
              : status === "success"
              ? t("success")
              : status === "error"
              ? t("error")
              : t("send")}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
