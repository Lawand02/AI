"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

interface Props {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
  timeZone?: string;
}

export function ClientLayout({ children, locale, messages, timeZone }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <ThemeProvider>
        <TooltipProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
