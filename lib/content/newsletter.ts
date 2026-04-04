import type { ContentLink, SeoContent } from "./types";

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
  };
  archive: NewsletterArchiveYear[];
}

export const newsletterContent: NewsletterContent = {
  hero: {
    title: "",
    intro: [],
  },
  archive: [],
};
