"use client";

import { useEffect } from "react";

const dirs: Record<string, "ltr" | "rtl"> = { en: "ltr", ku: "ltr", ar: "rtl", de: "ltr" };

export function SetLocale({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dirs[locale] || "ltr";
  }, [locale]);
  return null;
}
