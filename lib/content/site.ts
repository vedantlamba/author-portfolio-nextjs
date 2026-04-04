export type SocialPlatform = "twitter" | "instagram" | "youtube";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteContent {
  author: {
    name: string;
    bio: string;
    shortBio: string;
  };
  navbar: {
    brandLabel: string;
    primaryLinks: NavItem[];
    secondaryLinks: NavItem[];
  };
  socialLinks: SocialLink[];
}

export const siteContent: SiteContent = {
  author: {
    name: "Vedant Lamba",
    bio: "Vedant Lamba writes about habits, decision-making, and continuous self-improvement. He shares ideas that help individuals build discipline, think clearly, and grow consistently in both life and work.",
    shortBio: "Writer exploring habits, decision-making, and self-improvement.",
  },
  navbar: {
    brandLabel: "Vedant Lamba",
    primaryLinks: [
      { label: "Books", href: "/books" },
      { label: "Articles", href: "/articles" },
      { label: "Newsletter", href: "/newsletter" },
    ],
    secondaryLinks: [{ label: "About", href: "/about" }],
  },
  socialLinks: [
    {
      platform: "twitter",
      label: "Twitter",
      href: "https://twitter.com",
    },
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://youtube.com",
    },
  ],
};
