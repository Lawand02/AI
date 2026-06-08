import { getAllPosts } from "@/lib/posts";
import { BlogList } from "@/components/sections/BlogList";

export const dynamic = "force-static";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getAllPosts();

  let translations;
  try {
    translations = (await import(`../../../../public/locales/${locale}.json`)).default.blog;
  } catch {
    translations = (await import(`../../../../public/locales/en.json`)).default.blog;
  }

  return <BlogList posts={posts} locale={locale} translations={translations} />;
}
