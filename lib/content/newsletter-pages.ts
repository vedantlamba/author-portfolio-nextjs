import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

const newsletterEntriesDirectory = path.join(
  process.cwd(),
  "content",
  "newsletter",
  "entries"
);

interface NewsletterMdxProps {
  components?: import("mdx/types").MDXComponents;
}

export interface NewsletterPageMetadata {
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
}

export interface NewsletterPageEntry extends NewsletterPageMetadata {
  dateLabel: string;
  year: number;
  Content: ComponentType<NewsletterMdxProps>;
}

function extractString(source: string, fieldName: string) {
  const match = source.match(
    new RegExp(`export const ${fieldName} = \"([\\s\\S]*?)\";`)
  );

  return match?.[1];
}

function getNewsletterFileNames() {
  return fs
    .readdirSync(newsletterEntriesDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

function formatDateLabel(publishedAt: string) {
  return new Date(`${publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

function getYear(publishedAt: string) {
  return new Date(`${publishedAt}T00:00:00Z`).getUTCFullYear();
}

function readNewsletterMetadataFromFile(fileName: string): NewsletterPageMetadata {
  const slug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(newsletterEntriesDirectory, fileName);
  const source = fs.readFileSync(filePath, "utf8");

  const title = extractString(source, "title");
  const author = extractString(source, "author");
  const publishedAt = extractString(source, "publishedAt");

  if (!title || !author || !publishedAt) {
    throw new Error(`Missing required metadata in newsletter file: ${fileName}`);
  }

  return {
    slug,
    title,
    author,
    publishedAt,
  };
}

function scoreNewsletter(seed: string, candidateSlug: string) {
  const value = `${seed}:${candidateSlug}`;
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

export function getNewsletterSlugs() {
  return getNewsletterFileNames().map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllNewsletterMetadata() {
  return getNewsletterFileNames()
    .map(readNewsletterMetadataFromFile)
    .sort((firstIssue, secondIssue) => {
      return secondIssue.publishedAt.localeCompare(firstIssue.publishedAt);
    });
}

export function getReadNextNewsletters(currentSlug: string, limit = 5) {
  return getAllNewsletterMetadata()
    .filter((issue) => issue.slug !== currentSlug)
    .sort((firstIssue, secondIssue) => {
      return (
        scoreNewsletter(currentSlug, firstIssue.slug) -
        scoreNewsletter(currentSlug, secondIssue.slug)
      );
    })
    .slice(0, limit)
    .map((issue) => ({
      ...issue,
      dateLabel: formatDateLabel(issue.publishedAt),
      year: getYear(issue.publishedAt),
    }));
}

export async function getNewsletterBySlug(
  slug: string
): Promise<NewsletterPageEntry | null> {
  const metadata = getAllNewsletterMetadata().find((issue) => issue.slug === slug);

  if (!metadata) {
    return null;
  }

  const newsletterModule = (await import(
    `@/content/newsletter/entries/${slug}.mdx`
  )) as {
    default: ComponentType<NewsletterMdxProps>;
  };

  return {
    ...metadata,
    dateLabel: formatDateLabel(metadata.publishedAt),
    year: getYear(metadata.publishedAt),
    Content: newsletterModule.default,
  };
}
