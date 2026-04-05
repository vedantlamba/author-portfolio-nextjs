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
  shared: {
    leadCapture: {
      heading: string;
      subheading: string;
      buttonText: string;
    };
  };
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
  shared: {
    leadCapture: {
      heading: "Get access to Chapter 1 or your exclusive content.",
      subheading:
        "You will get one short email every three days for a month. You can unsubscribe any time.",
      buttonText: "Download The Free Chapter",
    },
  },
};
