import type { ContentImage, ContentLink, SeoContent } from "./types";

export interface BookContentItem {
  slug: string;
  title: string;
  subtitle?: string;
  status?: string;
  description: string;
  shortDescription?: string;
  cover?: ContentImage;
  gallery?: ContentImage[];
  cta?: ContentLink;
}

export interface BooksContent {
  seo?: SeoContent;
  intro: {
    title: string;
    description: string;
  };
  items: BookContentItem[];
}

export const booksContent: BooksContent = {
  intro: {
    title: "Books",
    description:
      "You can think of this as the place where your world begins. In this template, the content you're seeing is part of a fictional universe - a hidden world where divine bloodlines walk among humans, carrying fragments of forgotten gods and powers that were never meant to awaken. Your books can live here. This section is designed to introduce your work, your ideas, and the stories you want to tell.",
  },
  items: [
    {
      slug: "the-bhairava-heir",
      title: "The Bhairava Heir",
      subtitle: "A world that was never meant to awaken.",
      status: "This is a demo book for the template.",
      description:
        "Use this section to describe your own book - its concept, its world, and what makes it unique. Replace this content with your own story and give readers a reason to step into your universe.",
      cover: {
        src: "/bhairava-heir-1.png",
        alt: "The Bhairava Heir book cover",
      },
      cta: {
        label: "Learn More",
        href: "/books",
      },
    },
  ],
};
