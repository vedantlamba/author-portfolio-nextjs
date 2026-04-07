import {
  InstagramIcon,
  TwitterIcon,
} from "@hugeicons/core-free-icons";

export const newsletterDetailPageContent = {
  aboutTitle: "About the Newsletter",
  aboutDescription:
    "The Newsletter is a weekly collection of three ideas, two quotes, and one question designed to help readers think better and live with more intention.",
  signupLabel: "Follow Me On:",
  signupHref: "/newsletter",
  socialLinks: [
    {
      href: "https://twitter.com/your-handle",
      icon: TwitterIcon,
    },
    {
      href: "https://instagram.com/your-handle",
      icon: InstagramIcon,
    },
  ],
  readNextTitle: "Read Next",
  allIssuesLabel: "All Newsletters",
  allIssuesHref: "/newsletter",
} as const;
