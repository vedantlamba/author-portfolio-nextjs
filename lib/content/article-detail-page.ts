import {
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import { siteContent } from "./site";

export const articleDetailPageContent = {
  authorSectionTitle: "About the Author",
  authorName: "Vedant Lamba",
  authorDescription:
    "writes about habits, decision-making, and continuous self-improvement. He shares ideas that help individuals build discipline, think clearly, and grow consistently in both life and work.",
  followLabel: "Follow Me On:",
  socialLinks: [
    {
      href:
        siteContent.socialLinks.find((item) => item.platform === "twitter")
          ?.href ?? "#",
      icon: TwitterIcon,
    },
    {
      href:
        siteContent.socialLinks.find((item) => item.platform === "instagram")
          ?.href ?? "#",
      icon: InstagramIcon,
    },
    {
      href:
        siteContent.socialLinks.find((item) => item.platform === "youtube")
          ?.href ?? "#",
      icon: YoutubeIcon,
    },
  ],
} as const;
