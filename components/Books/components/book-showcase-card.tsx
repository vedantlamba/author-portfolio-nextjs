import { crimson } from "@/app/layout";
import type { BookContentItem } from "@/lib/content/books";

interface BookShowcaseCardProps {
  book: BookContentItem;
}

export const BookShowcaseCard = ({ book }: BookShowcaseCardProps) => {
  return (
    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 min-[1100px]:grid-cols-2 gap-10 min-[1100px]:gap-0">
      <div className="flex justify-center items-center">
        <div className="w-[300px] aspect-[2/3]">
          <img
            src={book.cover?.src}
            alt={book.cover?.alt}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 text-xl leading-[1.7] max-w-md p-10 lg:p-0 mx-auto justify-center min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
        <h2 className="text-3xl leading-[1.4] font-medium">{book.title}</h2>

        <p className="text-xl">{book.subtitle}</p>

        <p className="text-base text-neutral-500">{book.status}</p>

        <p className={`${crimson.className}`}>{book.description}</p>

        <button className="px-5 py-2 bg-neutral-900 text-white rounded-xs w-fit cursor-pointer text-[16px] tracking-wide">
          {book.cta?.label}
        </button>
      </div>
    </div>
  );
};
