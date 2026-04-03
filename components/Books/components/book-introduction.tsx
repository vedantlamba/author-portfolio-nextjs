import { crimson } from "@/app/layout";

export const Introduction = () => {
  return (
    <div className="w-full flex flex-col gap-12 justify-center items-center text-center p-10">
      <h2 className="text-3xl lg:text-4xl font-medium">Books</h2>
      <p
        className={`min-[760px]:max-[1262px]:max-w-lg lg:max-w-2xl text-xl ${crimson.className} leading-[1.5]`}
      >
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
