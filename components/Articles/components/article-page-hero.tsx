import { HugeiconsIcon } from "@hugeicons/react";
import { articlePoints } from "../Data/mock-data";
import { CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { crimson } from "@/app/layout";

export const ArticleHero = () => {
  return (
    <div className="grid grid-cols-1 min-[1100px]:grid-cols-2">
      <div className="flex flex-col justify-center gap-8 lg:gap-12 pl-10 min-[760px]:max-[1262px]:pl-0 lg:pl-4 mb-10 min-[1100px]:mb-0 min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Articles
        </h2>
        <div
          className={`${crimson.className} text-lg lg:text-xl max-w-xs lg:max-w-lg text-balance space-y-6 lg:space-y-8 leading-[1.5]`}
        >
          <p>
            This page is where I share ideas that sit at the intersection of
            creativity, discipline, and self-mastery.{" "}
          </p>
          <p>
            I write about things that shape who we become — how we think, how we
            work, and how we build a life that actually feels meaningful. Some
            articles are practical, some are philosophical, and some are simply
            reflections born from quiet moments and sharp observations.
          </p>
          <p>
            You’ll find pieces on focus, consistency, personal growth, and the
            mindset required to build something that lasts. I also explore
            themes inspired by storytelling — power, identity, solitude, and the
            quiet battles people fight within.
          </p>
        </div>
      </div>
      <div className="flex min-[760px]:max-[1262px]:justify-center min-[1100px]:justify-end items-center p-10 lg:p-0">
        <div className="w-full min-[760px]:max-[1262px]:max-w-md min-[1100px]:max-w-md aspect-square rounded-lg border border-neutral-800 p-1 flex flex-col justify-center">
          <div className="flex flex-col gap-8 justify-center p-8 rounded-lg">
            <h2 className="font-medium text-xl md:text-2xl">
              What You’ll Find Here
            </h2>
            <div className="flex flex-col gap-4">
              {articlePoints.map((item, index) => {
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
    </div>
  );
};
