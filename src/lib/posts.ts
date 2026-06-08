import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(postsDir, f), "utf8");
      const { data } = matter(source);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): { content: string; meta: PostMeta } | null {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    content,
    meta: { slug, title: data.title, date: data.date, excerpt: data.excerpt, tags: data.tags || [] },
  };
}
