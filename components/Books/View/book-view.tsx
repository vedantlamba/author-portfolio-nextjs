import { booksContent } from "@/lib/content/books";
import { Introduction } from "../components/book-introduction";
import { BookShowcaseCard } from "../components/book-showcase-card";

function BooksView() {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      <div className="flex flex-col bg-neutral-900 text-neutral-100 lg:pt-24 pb-8 lg:pb-24">
        <div className="max-w-6xl mx-auto w-full">
          <Introduction />
        </div>
      </div>
      {booksContent.items.map((book) => {
        return <BookShowcaseCard key={book.slug} book={book} />;
      })}
    </div>
  );
}

export default BooksView;
