"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PostMeta } from "@/lib/posts";

interface Props {
  posts: PostMeta[];
  locale: string;
  translations: {
    subtitle: string;
    title: string;
    readMore: string;
    noPosts: string;
  };
}

export function BlogList({ posts, locale, translations }: Props) {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-mono mb-2">{translations.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold">{translations.title}</h1>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/AI/${locale}/blog/${post.slug}`}
                className="block bg-card border border-border/40 rounded-xl p-6 hover:border-primary/50 transition-all group"
              >
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm text-primary">
                  {translations.readMore} <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">{translations.noPosts}</p>
        )}
      </div>
    </div>
  );
}
