import { siteContent } from "./site";

export const articleDetailPageContent = {
  authorSectionTitle: "About the Author",
  authorName: "Vedant Lamba",
  authorDescription:
    "writes about habits, decision-making, and continuous self-improvement. He shares ideas that help individuals build discipline, think clearly, and grow consistently in both life and work.",
  followLabel: "Follow Me On:",
  socialLinks: siteContent.socialLinks.map((item) => ({
    platform: item.platform,
    href: item.href,
  })),
} as const;
