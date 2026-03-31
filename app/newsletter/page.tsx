import React from "react";
import { crimson } from "../layout";
import { NewsletterBox } from "@/components/Home/components/lead-capture-section";


function NewsletterPage() {
  return (
    <div className="flex flex-col gap-8 lg:gap-28">
      <div className="flex flex-col bg-neutral-900 text-neutral-100 pt-8 lg:pt-24 pb-16 lg:pb-28">
        <div className="max-w-6xl mx-auto w-full">
          <NewsletterHero />
        </div>
      </div>
    </div>
  );
}

export default NewsletterPage;

export const NewsletterHero = () => {
  return (
    <div className="grid grid-cols-1 min-[1100px]:grid-cols-2">
      <div className="flex flex-col justify-center gap-8 lg:gap-12 pl-10 min-[760px]:max-[1262px]:pl-0 lg:pl-4 mb-10 min-[1100px]:mb-0 min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Newsletter
        </h2>
        <div
          className={`${crimson.className} text-lg lg:text-xl max-w-xs lg:max-w-lg text-balance space-y-6 lg:space-y-8 leading-[1.5]`}
        >
          <p className="italic">“A small dose of clarity in a noisy world.”</p>
          <p>
            The Weekly Journal is a carefully curated newsletter designed to
            bring clarity and inspiration. Each week, a new edition is shared
            with readers who value thoughtful ideas and simple perspectives.
          </p>
          <p>
            Inside, you’ll find reflections, insights, and ideas drawn from
            everyday moments and deeper observations — all written to be easy to
            read and worth your time.
          </p>
          <span className="italic">This is demo data.</span>
          <p>Enter your email and join for free.</p>
        </div>
      </div>
      <div className="flex min-[760px]:max-[1262px]:justify-center min-[1100px]:justify-end items-center p-4">
        <div className="h-full w-lg min-[760px]:max-[1262px]:w-sm lg:w-md bg-linear-to-b from-neutral-800 to-neutral-900 rounded-md flex flex-col text-balance text-center gap-10 py-10">
          <h2 className="text-xl lg:text-2xl font-medium flex-1">
            Get access to Chapter 1 or your exclusive content.
          </h2>

          <NewsletterBox />
          <p
            className={`${crimson.className} text-neutral-300 flex-1 text-sm lg:text-base`}
          >
            You will get one short email every three days for a month. You can
            unsubscribe any time.
          </p>
        </div>
      </div>
    </div>
  );
};
