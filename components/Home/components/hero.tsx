import HomeHeroContent from "@/content/home/hero.mdx";

import { Book } from "./book";

export const Hero = () => {
  return (
    <div className="bg-neutral-900 text-neutral-100 lg:pt-24 pb-36">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center gap-24 lg:gap-32">
        <div className="text-3xl lg:text-[40px] text-center font-semibold leading-[1.4] tracking-tight max-w-xs min-[760px]:max-[1262px]:max-w-2xl lg:max-w-4xl">
          <HomeHeroContent />
        </div>
        <div className="-mb-48 lg:-mb-36">
          <Book />
        </div>
      </div>
    </div>
  );
};
