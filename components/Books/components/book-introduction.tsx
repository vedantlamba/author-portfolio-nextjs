import { crimson } from "@/app/layout";
import { booksContent } from "@/lib/content/books";

export const Introduction = () => {
  return (
    <div className="w-full flex flex-col gap-12 justify-center items-center text-center p-10">
      <h2 className="text-3xl lg:text-4xl font-medium">{booksContent.intro.title}</h2>
      <p
        className={`min-[760px]:max-[1262px]:max-w-lg lg:max-w-2xl text-xl ${crimson.className} leading-[1.5]`}
      >
        {booksContent.intro.description}
      </p>
    </div>
  );
};
