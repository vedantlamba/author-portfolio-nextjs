import { crimson } from "@/app/layout";
import ArticleHeroBody from "@/content/articles/hero-body.mdx";
import { PageHeroLayout } from "@/components/shared/page-hero-layout";
import { articlesContent } from "@/lib/content/articles";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const ArticleHero = () => {
  return (
    <PageHeroLayout title={articlesContent.hero.title} aside={<ArticleHeroCard />}>
      <ArticleHeroBody />
    </PageHeroLayout>
  );
};

export const ArticleHeroCard = () => {
  return (
    <div className="flex min-[760px]:max-[1262px]:justify-center min-[1100px]:justify-end items-center p-10 lg:p-0">
      <div className="w-full min-[760px]:max-[1262px]:max-w-md min-[1100px]:max-w-md aspect-square rounded-lg border border-neutral-800 p-1 flex flex-col justify-center">
        <div className="flex flex-col gap-8 justify-center p-8 rounded-lg">
          <h2 className="font-medium text-xl md:text-2xl">
            {articlesContent.hero.cardTitle}
          </h2>
          <div className="flex flex-col gap-4">
            {articlesContent.hero.points.map((item, index) => {
              return (
                <p
                  key={index}
                  className={`flex items-center md:items-start gap-4  text-balance text-sm md:text-lg font-light ${crimson.className}`}
                >
                  <span>
                    <HugeiconsIcon
                      icon={CheckmarkBadge01Icon}
                      className="text-yellow-400 size-5 md:size-6 md:mt-1"
                    />
                  </span>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
