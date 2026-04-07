import type { ContentLink, SeoContent } from "./types";
import { getAllNewsletterMetadata } from "./newsletter-pages";

export interface NewsletterIssue {
  slug: string;
  title: string;
  date: string;
  year: number;
  summary?: string;
  body?: string[];
  cta?: ContentLink;
}

export interface NewsletterArchiveYear {
  year: number;
  issues: NewsletterIssue[];
}

export interface NewsletterContent {
  seo?: SeoContent;
  hero: {
    title: string;
    intro: string[];
    ctaLabel?: string;
    card: {
      title: string;
      buttonText: string;
      subtext: string;
    };
  };
  archiveContent: {
    title: string;
    description: string;
  };
  archive: NewsletterArchiveYear[];
}

const archive = getAllNewsletterMetadata().reduce<NewsletterArchiveYear[]>((years, issue) => {
  const year = new Date(`${issue.publishedAt}T00:00:00Z`).getUTCFullYear();
  const date = new Date(`${issue.publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

  const existingYear = years.find((entry) => entry.year === year);

  const newsletterIssue: NewsletterIssue = {
    slug: `/newsletter/${issue.slug}`,
    title: issue.title,
    date,
    year,
  };

  if (existingYear) {
    existingYear.issues.push(newsletterIssue);
    return years;
  }

  years.push({
    year,
    issues: [newsletterIssue],
  });

  return years;
}, []);

export const newsletterContent: NewsletterContent = {
  hero: {
    title: "",
    intro: [],
    card: {
      title: "Get thoughtful insights delivered straight to your inbox.",
      buttonText: "Subscribe",
      subtext: "No spam. Just meaningful ideas worth your time.",
    },
  },
  archiveContent: {
    title: "All Newsletters",
    description: "A collection of thoughts from previous weeks",
  },
  archive,
};
