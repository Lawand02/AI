import { ClientLayout } from "@/components/layout/ClientLayout";
import { SetLocale } from "@/components/layout/SetLocale";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function loadMessages(locale: string) {
  try {
    return (await import(`../../../public/locales/${locale}.json`)).default;
  } catch {
    return (await import(`../../../public/locales/en.json`)).default;
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await loadMessages(locale);

  return (
    <>
      <SetLocale locale={locale} />
      <ClientLayout locale={locale} messages={messages} timeZone="Asia/Damascus">
        {children}
      </ClientLayout>
    </>
  );
}
