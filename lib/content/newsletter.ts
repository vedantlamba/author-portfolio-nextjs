import type { ContentLink, SeoContent } from "./types";

export interface NewsletterIssue {
  slug: string;
  title: string;
  date: string;
  year: number;
  summary?: string;
  body?: string[];
  cta?: ContentLink;
}

export interface NewsletterArchiveYear {
  year: number;
  issues: NewsletterIssue[];
}

export interface NewsletterContent {
  seo?: SeoContent;
  hero: {
    title: string;
    intro: string[];
    ctaLabel?: string;
    card: {
      title: string;
      buttonText: string;
      subtext: string;
    };
  };
  archiveContent: {
    title: string;
    description: string;
  };
  archive: NewsletterArchiveYear[];
}

export const newsletterContent: NewsletterContent = {
  hero: {
    title: "",
    intro: [],
    card: {
      title: "Get thoughtful insights delivered straight to your inbox.",
      buttonText: "Subscribe",
      subtext: "No spam. Just meaningful ideas worth your time.",
    },
  },
  archiveContent: {
    title: "All Newsletters",
    description: "A collection of thoughts from previous weeks",
  },
  archive: [
    {
      year: 2026,
      issues: [
        {
          date: "Mar 26",
          title:
            "How to find alignment, what holds us back, and the hidden trades we make",
          slug: "/newsletter/26-march-2026",
          year: 2026,
        },
        {
          date: "Mar 19",
          title:
            "On the power of everyday conduct, how to find your purpose, and unexpected forms of generosity",
          slug: "/newsletter/19-march-2026",
          year: 2026,
        },
        {
          date: "Mar 12",
          title:
            "The price of compromise, the magic of art, and how to improve in the modern world",
          slug: "/newsletter/12-march-2026",
          year: 2026,
        },
        {
          date: "Mar 5",
          title:
            "How to find clarity, the value of being humbled, and the path to building resilience",
          slug: "/newsletter/5-march-2026",
          year: 2026,
        },
        {
          date: "Feb 26",
          title:
            "On reducing fear, what matters most, and how life responds to us",
          slug: "/newsletter/26-february-2026",
          year: 2026,
        },
        {
          date: "Feb 19",
          title:
            "On the value of early experiments, what creates trust, and speed vs patience",
          slug: "/newsletter/19-february-2026",
          year: 2026,
        },
        {
          date: "Feb 12",
          title:
            "On winning and losing, making the most of accidents, and when waiting doesn't work",
          slug: "/newsletter/12-february-2026",
          year: 2026,
        },
        {
          date: "Feb 5",
          title:
            "Keeping your body loose and head clear, how to find adventure, and what to do when you're motivated",
          slug: "/newsletter/5-february-2026",
          year: 2026,
        },
        {
          date: "Jan 29",
          title:
            "On ignorance vs. genius, the history of every day, and the process of becoming yourself",
          slug: "/newsletter/29-january-2026",
          year: 2026,
        },
        {
          date: "Jan 22",
          title:
            "On the ultimate form of preparation, how to increase your power, and living with conviction",
          slug: "/newsletter/22-january-2026",
          year: 2026,
        },
        {
          date: "Jan 15",
          title:
            "On comparison, life strategy, and stopping negative thought spirals",
          slug: "/newsletter/15-january-2026",
          year: 2026,
        },
        {
          date: "Jan 8",
          title:
            "On obsessions, what you can control, and the power of decisive action",
          slug: "/newsletter/8-january-2026",
          year: 2026,
        },
        {
          date: "Jan 1",
          title:
            "How to make changes that last, the key to productivity, and a simple way to find your true self",
          slug: "/newsletter/1-january-2026",
          year: 2026,
        },
      ],
    },
    {
      year: 2025,
      issues: [
        {
          date: "Dec 25",
          title:
            "On endings and beginnings, reflection, and setting a new direction",
          slug: "/newsletter/25-december-2025",
          year: 2025,
        },
        {
          date: "Dec 18",
          title:
            "On consistency, quiet progress, and why small wins matter",
          slug: "/newsletter/18-december-2025",
          year: 2025,
        },
        {
          date: "Dec 11",
          title:
            "On focus, eliminating noise, and doing less but better",
          slug: "/newsletter/11-december-2025",
          year: 2025,
        },
        {
          date: "Dec 4",
          title:
            "On discipline, freedom, and building a life you respect",
          slug: "/newsletter/4-december-2025",
          year: 2025,
        },
        {
          date: "Nov 27",
          title:
            "On patience, long-term thinking, and trusting the process",
          slug: "/newsletter/27-november-2025",
          year: 2025,
        },
      ],
    },
  ],
};
