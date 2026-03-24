import React from "react";
import { crimson } from "../layout";
import { Book } from "@/components/Home/View/home-view";

function BooksPage() {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col bg-neutral-900 text-neutral-100 pt-24 pb-28">
        <div className="max-w-6xl mx-auto w-full">
          <Introduction />
        </div>
      </div>
      <BookIntro />
    </div>
  );
}

export default BooksPage;

export const Introduction = () => {
  return (
    <div className="w-full  flex flex-col gap-10 justify-center items-center text-center">
      <h2 className="text-5xl font-medium">Books</h2>
      <p className={`max-w-2xl text-balance text-xl ${crimson.className}`}>
        You can think of this as the place where your world begins. In this
        template, the content you’re seeing is part of a fictional universe — a
        hidden world where divine bloodlines walk among humans, carrying
        fragments of forgotten gods and powers that were never meant to awaken.
        Your books can live here. This section is designed to introduce your
        work, your ideas, and the stories you want to tell.
      </p>
    </div>
  );
};

export const BookIntro = () => {
  return (
    <div className="max-w-6xl mx-auto w-full grid grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="w-[280px] aspect-[2/3]">
          <img
            src="/bhairava-heir-1.png"
            alt="book-cover"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 text-xl leading-[1.7] max-w-md">
        <h2 className="text-3xl leading-[1.4] font-medium">
          The Bhairava Heir: A Story of Sealed Bloodlines and Forbidden Power
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
