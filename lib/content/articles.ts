import type { ContentLink, SeoContent } from "./types";

export interface ArticleAuthor {
  name: string;
  role?: string;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  description?: string;
  category: string;
}

export interface ArticleCategory {
  slug: string;
  label: string;
  description?: string;
  articles: ArticleSummary[];
}

export interface ArticleDetail extends ArticleSummary {
  seo?: SeoContent;
  author?: ArticleAuthor;
  tags?: string[];
  publishedAt?: string;
  readNext?: ContentLink[];
  body: string[];
  footnotes?: string[];
}

export interface ArticlesContent {
  seo?: SeoContent;
  hero: {
    title: string;
    intro: string[];
    points: string[];
  };
  categories: ArticleCategory[];
  details: ArticleDetail[];
}

export const articlesContent: ArticlesContent = {
  hero: {
    title: "",
    intro: [],
    points: [
      "Practical guides on focus & discipline",
      "Deep insights on mindset & personal growth",
      "Strategies to overcome procrastination",
      "Lessons on consistency and long-term success",
      "Thoughts on identity, power, and self-mastery",
      "Story-driven ideas inspired by fiction & philosophy",
    ],
  },
  categories: [
    {
      label: "Creativity",
      slug: "creativity",
      articles: [
        {
          title: "Creativity Isn’t Talent — It’s Controlled Chaos",
          slug: "creativity-isnt-talent-controlled-chaos",
          category: "Creativity",
        },
        {
          title: "How to Think Differently in a World That Rewards Sameness",
          slug: "how-to-think-differently",
          category: "Creativity",
        },
        {
          title: "The Silent Discipline Behind Every Great Idea",
          slug: "discipline-behind-great-ideas",
          category: "Creativity",
        },
      ],
    },
    {
      label: "Decision Making",
      slug: "decision-making",
      articles: [
        {
          title: "The Power of Saying No (And Why It Changes Everything)",
          slug: "power-of-saying-no",
          category: "Decision Making",
        },
        {
          title: "You Don’t Need More Information — You Need Clarity",
          slug: "need-clarity-not-information",
          category: "Decision Making",
        },
        {
          title: "How Great Minds Make Decisions Under Pressure",
          slug: "decision-making-under-pressure",
          category: "Decision Making",
        },
      ],
    },
    {
      label: "Focus",
      slug: "focus",
      articles: [
        {
          title: "Focus Is a Weapon — Learn to Use It",
          slug: "focus-is-a-weapon",
          category: "Focus",
        },
        {
          title: "Why Most People Never Do Deep Work",
          slug: "why-people-avoid-deep-work",
          category: "Focus",
        },
        {
          title: "Zanshin: The Art of Unbroken Attention",
          slug: "zanshin-art-of-attention",
          category: "Focus",
        },
      ],
    },
    {
      label: "Habits",
      slug: "habits",
      articles: [
        {
          title: "Small Habits, Dangerous Outcomes",
          slug: "small-habits-dangerous-outcomes",
          category: "Habits",
        },
        {
          title: "The Hidden System Behind Consistency",
          slug: "system-behind-consistency",
          category: "Habits",
        },
        {
          title: "One Sentence a Day That Can Change Your Life",
          slug: "one-sentence-daily-habit",
          category: "Habits",
        },
      ],
    },
    {
      label: "Life Lessons",
      slug: "life-lessons",
      articles: [
        {
          title: "Success Isn’t Fair — And That’s the Point",
          slug: "success-isnt-fair",
          category: "Life Lessons",
        },
        {
          title: "The Cost of Being Efficient at the Wrong Things",
          slug: "cost-of-wrong-efficiency",
          category: "Life Lessons",
        },
        {
          title: "Luck Builds the Door, Work Walks You Through It",
          slug: "luck-vs-hard-work",
          category: "Life Lessons",
        },
      ],
    },
    {
      label: "Motivation",
      slug: "motivation",
      articles: [
        {
          title: "Motivation Is Overrated — Systems Win",
          slug: "motivation-is-overrated",
          category: "Motivation",
        },
        {
          title: "Confidence Is Built in Silence",
          slug: "confidence-built-in-silence",
          category: "Motivation",
        },
        {
          title: "What to Do When You Feel Like Quitting Everything",
          slug: "when-you-feel-like-quitting",
          category: "Motivation",
        },
      ],
    },
    {
      label: "Productivity",
      slug: "productivity",
      articles: [
        {
          title: "Doing Less, But Better: The Real Productivity Shift",
          slug: "doing-less-but-better",
          category: "Productivity",
        },
        {
          title: "Why Most Productivity Advice Fails",
          slug: "why-productivity-advice-fails",
          category: "Productivity",
        },
        {
          title: "How to Retain What You Learn (Without Trying Harder)",
          slug: "retain-what-you-learn",
          category: "Productivity",
        },
      ],
    },
    {
      label: "Self Improvement",
      slug: "self-improvement",
      articles: [
        {
          title: "Becoming Dangerous: The Art of Self-Mastery",
          slug: "art-of-self-mastery",
          category: "Self Improvement",
        },
        {
          title: "Deliberate Practice Is Painful — That’s Why It Works",
          slug: "deliberate-practice-truth",
          category: "Self Improvement",
        },
        {
          title: "Master One Thing — And Let It Define You",
          slug: "master-one-thing",
          category: "Self Improvement",
        },
      ],
    },
  ],
  details: [],
};
