import type { ContentLink, SeoContent } from "./types";

export interface ArticleAuthor {
  name: string;
  role?: string;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  description?: string;
  category: string;
}

export interface ArticleCategory {
  slug: string;
  label: string;
  description?: string;
  articles: ArticleSummary[];
}

export interface ArticleDetail extends ArticleSummary {
  seo?: SeoContent;
  author?: ArticleAuthor;
  tags?: string[];
  publishedAt?: string;
  readNext?: ContentLink[];
  body: string[];
  footnotes?: string[];
}

export interface ArticlesContent {
  seo?: SeoContent;
  hero: {
    title: string;
    intro: string[];
    points: string[];
  };
  categories: ArticleCategory[];
  details: ArticleDetail[];
}

export const articlesContent: ArticlesContent = {
  hero: {
    title: "",
    intro: [],
    points: [],
  },
  categories: [],
  details: [],
};
