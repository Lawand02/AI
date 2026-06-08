import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "@/lib/posts";
import { ArrowLeft, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const dynamic = "force-static";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.excerpt };
}

function simpleMarkdownToHtml(md: string): string {
  let html = md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n\n/g, "</p><p>");
  html = "<p>" + html + "</p>";
  html = html.replace(/<p><\/(h[1-6]|ul)>/g, "</$1>");
  html = html.replace(/<\/(h[1-6]|ul)><p>/g, "</$1>");
  return html;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const contentHtml = simpleMarkdownToHtml(post.content);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <article className="max-w-3xl mx-auto px-4">
        <a
          href={`/AI/${locale}/blog`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </a>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-3">{post.meta.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            {post.meta.date}
          </div>
          <div className="flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div
          className="prose prose-zinc dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}
