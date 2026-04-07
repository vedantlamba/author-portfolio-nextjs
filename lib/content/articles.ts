import type { ContentLink, SeoContent } from "./types";
import { getAllArticleMetadata } from "./article-pages";

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
    cardTitle: string;
    intro: string[];
    points: string[];
  };
  listing: {
    title: string;
    description: string;
    readMoreLabel: string;
  };
  categories: ArticleCategory[];
  details: ArticleDetail[];
}

function createCategorySlug(label: string) {
  return label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const articleMetadata = getAllArticleMetadata();

const mdxArticleDetails: ArticleDetail[] = articleMetadata.map((article) => ({
  slug: article.slug,
  title: article.title,
  category: article.category,
  author: {
    name: article.author,
  },
  tags: article.tags,
  body: [],
  footnotes: article.footnotes,
}));

const mdxArticleCategories: ArticleCategory[] = articleMetadata.reduce<ArticleCategory[]>(
  (categories, article) => {
    const existingCategory = categories.find(
      (item) => item.label.toLowerCase() === article.category.toLowerCase()
    );

    const articleSummary: ArticleSummary = {
      slug: article.slug,
      title: article.title,
      category: article.category,
    };

    if (existingCategory) {
      existingCategory.articles.push(articleSummary);
      return categories;
    }

    categories.push({
      label: article.category,
      slug: createCategorySlug(article.category),
      articles: [articleSummary],
    });

    return categories;
  },
  []
);

export const articlesContent: ArticlesContent = {
  hero: {
    title: "Articles",
    cardTitle: "What You'll Find Here",
    intro: [],
    points: [
      "Practical guides on focus & discipline",
      "Deep insights on mindset & personal growth",
      "Strategies to overcome procrastination",
      "Lessons on consistency and long-term success",
      "Thoughts on identity, power, and self-mastery",
      "Story-driven ideas inspired by fiction & philosophy",
    ],
  },
  listing: {
    title: "All Articles",
    description: "Browse articles by topic.",
    readMoreLabel: "Read More Articles On",
  },
  categories: mdxArticleCategories,
  details: mdxArticleDetails,
};
