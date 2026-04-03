import { crimson } from "@/app/layout";
import { NewsletterBox } from "@/components/Home/components/lead-capture-section";
import { PageHeroLayout } from "@/components/shared/page-hero-layout";

export const NewsletterHero = () => {
  return (
    <PageHeroLayout title="Newsletter" aside={<NewsletterHeroCard />}>
      <p className="italic">“A small dose of clarity in a noisy world.”</p>
      <p>
        The Weekly Journal is a carefully curated newsletter designed to bring
        clarity and inspiration. Each week, a new edition is shared with readers
        who value thoughtful ideas and simple perspectives.
      </p>
      <p>
        Inside, you’ll find reflections, insights, and ideas drawn from everyday
        moments and deeper observations — all written to be easy to read and
        worth your time.
      </p>
      <span className="italic">This is demo data.</span>
      <p>Enter your email and join for free.</p>
    </PageHeroLayout>
  );
};

export const NewsletterHeroCard = () => {
  return (
    <div className="flex min-[760px]:max-[1262px]:justify-center min-[1100px]:justify-end items-center p-4">
      <div className="h-full w-lg min-[760px]:max-[1262px]:w-sm lg:w-md bg-linear-to-b from-neutral-800 to-neutral-900 rounded-md flex flex-col text-balance text-center gap-10 py-10">
        <h2 className="text-xl font-medium flex-1">
          Get thoughtful insights delivered straight to your inbox.
        </h2>

        <NewsletterBox text="Subscribe" />
        <p
          className={`${crimson.className} text-neutral-300 flex-1 text-sm lg:text-base`}
        >
          No spam. Just meaningful ideas worth your time.
        </p>
      </div>
    </div>
  );
};
