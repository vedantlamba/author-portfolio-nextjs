import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

const articleEntriesDirectory = path.join(
  process.cwd(),
  "content",
  "articles",
  "entries"
);

interface ArticleMdxProps {
  components?: import("mdx/types").MDXComponents;
}

export interface ArticlePageMetadata {
  slug: string;
  title: string;
  subheading?: string;
  author: string;
  category: string;
  tags: string[];
  footnotes: string[];
}

export interface ArticlePageEntry extends ArticlePageMetadata {
  Content: ComponentType<ArticleMdxProps>;
}

function extractString(source: string, fieldName: string) {
  const match = source.match(
    new RegExp(`export const ${fieldName} = \"([\\s\\S]*?)\";`)
  );

  return match?.[1];
}

function extractArray(source: string, fieldName: string) {
  const match = source.match(
    new RegExp(`export const ${fieldName} = (\\[[\\s\\S]*?\\]);`)
  );

  if (!match) {
    return [] as string[];
  }

  return Array.from(match[1].matchAll(/"([^"]*)"/g), ([, value]) => value);
}

function getArticleFileNames() {
  return fs
    .readdirSync(articleEntriesDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

function readArticleMetadataFromFile(fileName: string): ArticlePageMetadata {
  const slug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(articleEntriesDirectory, fileName);
  const source = fs.readFileSync(filePath, "utf8");

  const title = extractString(source, "title");
  const author = extractString(source, "author");
  const category = extractString(source, "category");

  if (!title || !author || !category) {
    throw new Error(`Missing required metadata in article file: ${fileName}`);
  }

  return {
    slug,
    title,
    subheading: extractString(source, "subheading"),
    author,
    category,
    tags: extractArray(source, "tags"),
    footnotes: extractArray(source, "footnotes"),
  };
}

function scoreArticle(seed: string, candidateSlug: string) {
  const value = `${seed}:${candidateSlug}`;
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

export function getArticleSlugs() {
  return getArticleFileNames().map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllArticleMetadata() {
  return getArticleFileNames().map(readArticleMetadataFromFile);
}

export function getReadNextArticles(currentSlug: string, limit = 5) {
  return getAllArticleMetadata()
    .filter((article) => article.slug !== currentSlug)
    .sort((firstArticle, secondArticle) => {
      return (
        scoreArticle(currentSlug, firstArticle.slug) -
        scoreArticle(currentSlug, secondArticle.slug)
      );
    })
    .slice(0, limit);
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticlePageEntry | null> {
  const metadata = getAllArticleMetadata().find((item) => item.slug === slug);

  if (!metadata) {
    return null;
  }

  const articleModule = (await import(
    `@/content/articles/entries/${slug}.mdx`
  )) as {
    default: ComponentType<ArticleMdxProps>;
  };

  return {
    ...metadata,
    Content: articleModule.default,
  };
}
