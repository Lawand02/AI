"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

const labels: Record<string, string> = {
  en: "EN",
  ku: "KU",
  ar: "AR",
  de: "DE",
};

export function LanguageSwitcher() {
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    const fullPath = window.location.pathname;
    const newPath = fullPath.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <Select
      value={locale}
      onValueChange={(value) => {
        if (value) switchLocale(value);
      }}
    >
      <SelectTrigger className="w-[72px] border-0 bg-transparent focus:ring-0 gap-1">
        <Languages className="h-4 w-4" />
        <SelectValue>{labels[locale]}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((l) => (
          <SelectItem key={l} value={l}>
            {labels[l]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
