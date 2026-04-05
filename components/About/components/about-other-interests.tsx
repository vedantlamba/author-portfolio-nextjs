import { crimson } from "@/app/layout";
import { aboutContent } from "@/lib/content/about";

export const OtherInterests = () => {
  return (
    <div className="w-full border-t pt-16 lg:pt-28">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 md:gap-28">
        <div className="space-y-3 lg:space-y-6 max-w-lg mx-auto w-full text-center min-[760px]:max-[1262px]:max-w-sm">
          <h2 className="text-xl lg:text-2xl font-medium">{aboutContent.interests.title}</h2>
          <p className="text-lg text-balance">{aboutContent.interests.description}</p>
        </div>
        <div className="grid grid-cols-1 min-[760px]:max-[1262px]:max-w-sm min-[760px]:max-[1262px]:mx-auto min-[1260px]:grid-cols-3 gap-16 lg:gap-28 p-10 min-[760px]:max-[1262px]:p-0 min-[1100px]:p-10">
          {aboutContent.interests.items.map((item) => {
            return (
              <div key={item.title} className="space-y-5">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p
                  className={`${crimson.className} leading-[1.7] text-lg lg:text-xl`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
