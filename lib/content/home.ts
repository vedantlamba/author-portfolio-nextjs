import type { ContentImage, SeoContent } from "./types";

export interface HomeHeroVisual {
  cover?: ContentImage;
  leftPage?: ContentImage;
  rightPage?: ContentImage;
}

export interface HomeHeroContent {
  visual: HomeHeroVisual;
}

export interface HomeContent {
  seo?: SeoContent;
  hero: HomeHeroContent;
  authorSection: {
    title: string;
  };
  newsletterBox: {
    buttonText: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    visual: {
      cover: {
        src: "/bhairava-heir-1.avif",
        alt: "The Bhairava Heir book cover",
      },
      leftPage: {
        src: "/book-page-1.avif",
        alt: "Preview page from The Bhairava Heir",
      },
      rightPage: {
        src: "/book-page-2.avif",
        alt: "Preview page from The Bhairava Heir",
      },
    },
  },
  authorSection: {
    title: "Hi, I'm Vedant Lamba",
  },
  newsletterBox: {
    buttonText: "Download The Free Chapter",
  },
};
