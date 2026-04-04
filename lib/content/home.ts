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
}

export const homeContent: HomeContent = {
  hero: {
    visual: {
      cover: {
        src: "/bhairava-heir-1.png",
        alt: "The Bhairava Heir book cover",
      },
      leftPage: {
        src: "/book-page-1.png",
        alt: "Preview page from The Bhairava Heir",
      },
      rightPage: {
        src: "/book-page-2.png",
        alt: "Preview page from The Bhairava Heir",
      },
    },
  },
};
