import type { ContentImage } from "./types";

export interface AboutInterestItem {
  title: string;
  description: string;
}

export interface AboutContent {
  hero: {
    title: string;
    image: ContentImage;
  };
  interests: {
    title: string;
    description: string;
    items: AboutInterestItem[];
  };
}

export const aboutContent: AboutContent = {
  hero: {
    title: "Hi, I'm Vedant Lamba.",
    image: {
      src: "/author-3.avif",
      alt: "Author portrait",
    },
  },
  interests: {
    title: "Other Interests",
    description: "Things that shape my thinking, creativity, and the worlds I build...",
    items: [
      {
        title: "Spiritual & Thoughtful Reading",
        description:
          "I'm drawn to books that explore deeper truths - from spirituality to philosophy, as well as fiction and non-fiction that challenge how we see the world. These ideas often find their way into my stories.",
      },
      {
        title: "Anime & Storytelling",
        description:
          "Anime inspires my sense of scale, emotion, and character depth. I'm especially drawn to stories that blend power, sacrifice, and layered worlds - where every character carries meaning.",
      },
      {
        title: "Meditation & Sadhana",
        description:
          "Stillness is just as important as creation. Through meditation and sadhana, I explore clarity, discipline, and inner awareness - which deeply influences both my writing and perspective.",
      },
    ],
  },
};
