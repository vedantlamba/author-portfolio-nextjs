import { crimson } from "@/app/layout";

export const BookShowcaseCard = () => {
  return (
    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 min-[1100px]:grid-cols-2 gap-10 min-[1100px]:gap-0">
      <div className="flex justify-center items-center">
        <div className="w-[300px] aspect-[2/3]">
          <img
            src="/bhairava-heir-1.png"
            alt="book-cover"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 text-xl leading-[1.7] max-w-md p-10 lg:p-0 mx-auto justify-center min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
        <h2 className="text-3xl leading-[1.4] font-medium">
          The Bhairava Heir
        </h2>

        <p className="text-xl">A world that was never meant to awaken.</p>

        <p className="text-base text-neutral-500">
          This is a demo book for the template.
        </p>

        <p className={`${crimson.className}`}>
          Use this section to describe your own book — its concept, its world,
          and what makes it unique. Replace this content with your own story and
          give readers a reason to step into your universe.
        </p>

        <button className="px-5 py-2 bg-neutral-900 text-white rounded-xs w-fit cursor-pointer text-[16px] tracking-wide">
          Learn More
        </button>
      </div>
    </div>
  );
};
