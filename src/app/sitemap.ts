import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
    entries.push({
      url: `${baseUrl}/${locale}/now`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
    entries.push({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    const posts = getAllPosts();
    for (const post of posts) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
