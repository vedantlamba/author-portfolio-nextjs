import { crimson } from "@/app/layout";
import NewsletterHeroBody from "@/content/newsletter/hero-body.mdx";
import { NewsletterSignupBox } from "@/components/shared/newsletter-signup-box";
import { PageHeroLayout } from "@/components/shared/page-hero-layout";
import { newsletterContent } from "@/lib/content/newsletter";

export const NewsletterHero = () => {
  return (
    <PageHeroLayout title="Newsletter" aside={<NewsletterHeroCard />}>
      <NewsletterHeroBody />
    </PageHeroLayout>
  );
};

export const NewsletterHeroCard = () => {
  return (
    <div className="flex min-[760px]:max-[1262px]:justify-center min-[1100px]:justify-end items-center p-4">
      <div className="h-full w-lg min-[760px]:max-[1262px]:w-sm lg:w-md bg-linear-to-b from-neutral-800 to-neutral-900 rounded-md flex flex-col text-balance text-center gap-10 py-10">
        <h2 className="text-xl font-medium flex-1">
          {newsletterContent.hero.card.title}
        </h2>

        <NewsletterSignupBox text={newsletterContent.hero.card.buttonText} />
        <p
          className={`${crimson.className} text-neutral-300 flex-1 text-sm lg:text-base`}
        >
          {newsletterContent.hero.card.subtext}
        </p>
      </div>
    </div>
  );
};
