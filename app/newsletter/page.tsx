import React from "react";
import { crimson } from "../layout";
import {
  LeadCaptureSection,
  NewsletterBox,
} from "@/components/Home/components/lead-capture-section";
import { newsletterData } from "@/components/Newsletter/newsletterdata";

function NewsletterPage() {
  return (
    <div className="flex flex-col gap-8 lg:gap-28">
      <div className="flex flex-col bg-neutral-900 text-neutral-100 pt-8 lg:pt-24 pb-16 lg:pb-28">
        <div className="max-w-6xl mx-auto w-full">
          <NewsletterHero />
        </div>
      </div>
      <NewsletterArchive />
      <LeadCaptureSection />
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
    </div>
  );
};

export const NewsletterArchive = () => {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 min-[1100px]:gap-28">
      <div className="flex flex-col gap-6 md:gap-12 justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-medium">All Newsletters</h2>
        <span className={`${crimson.className} text-[16px] md:text-xl`}>
          A collection of thoughts from previous weeks
        </span>
      </div>
      <Newsletters />
    </div>
  );
};

export const Newsletters = () => {
  return (
    <div className="flex flex-col mx-auto gap-16">
      {newsletterData.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col min-[1100px]:flex-row gap-6 min-[1100px]:gap-16 p-10 min-[1100px]:p-0"
          >
            <span className="font-medium tracking-wide text-lg">
              {item.year}
            </span>
            <div className="flex-1 min-[1100px]:space-y-3">
              {item.issues.map((issue, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col min-[1100px]:flex-row min-[1100px]:items-center gap-2 py-3 border-b min-[1100px]:py-0 min-[1100px]:border-b-0"
                  >
                    <span className="w-16 text-neutral-500 uppercase text-sm font-medium">
                      {issue.date}
                    </span>

                    <p className="flex-1 text-lg font-medium">{issue.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
