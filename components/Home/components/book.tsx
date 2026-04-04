import { homeContent } from "@/lib/content/home";

export const Book = () => {
  return (
    <div className="relative flex justify-center items-center h-[120px] lg:translate-y-10">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[120px] lg:w-[190px] lg:aspect-[1/1.414] bg-white border rounded-sm -translate-x-20 lg:-translate-x-40 ">
          <img
            src={homeContent.hero.visual.leftPage?.src}
            alt={homeContent.hero.visual.leftPage?.alt}
            className="w-full h-full object-cover object-top rounded-sm"
          />
        </div>

        <div className="absolute w-[120px] lg:w-[190px] lg:aspect-[1/1.414] bg-white border rounded-sm translate-x-20 lg:translate-x-40 ">
          <img
            src={homeContent.hero.visual.rightPage?.src}
            alt={homeContent.hero.visual.rightPage?.alt}
            className="w-full h-full object-cover object-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute w-[140px] lg:w-[240px] lg:aspect-[1/1.414] rounded-sm overflow-hidden z-20">
        <img
          src={homeContent.hero.visual.cover?.src}
          alt={homeContent.hero.visual.cover?.alt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
