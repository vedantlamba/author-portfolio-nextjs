import { crimson } from "@/app/layout";

export const LeadCaptureSection = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 min-[1100px]:grid-cols-2">
        <div className="flex flex-col gap-10 py-28 min-[760px]:max-[1262px]:pr-0 min-[1100px]:pr-10 pl-10 lg:pl-0 min-[760px]:max-[1262px]:pl-0 text-balance min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center min-[760px]:max-[1262px]:max-w-lg min-[760px]:max-[1262px]:mx-auto">
          <h2 className="text-3xl font-semibold text-neutral-100">
            Enter the World of{" "}
            <span className="text-white">The Bhairava Heir</span>
          </h2>
          <p>
            A hidden world exists alongside ours — where divine bloodlines walk
            among humans, carrying fragments of gods long forgotten.
          </p>
          <ul>
            <li>Some were chosen.</li>
            <li>Some were born into power.</li>
            <li>And some… were never meant to exist.</li>
          </ul>
          <p>This is a demo section.</p>
          <p>
            You can use this space to promote your book, share a free chapter,
            or build your email list. Replace this content with your own world,
            your story, and your characters.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 p-5 lg:py-28 min-[1100px]:pl-36">
          <div className="bg-linear-to-b from-neutral-800 to-neutral-900 h-full rounded-md flex flex-col text-balance text-center p-10 gap-10 min-[560px]:max-[1262px]:w-100">
            <h2 className="text-xl lg:text-2xl font-medium flex-1">
              Get access to Chapter 1 or your exclusive content.
            </h2>

            <NewsletterBox />
            <p
              className={`${crimson.className} text-neutral-300 flex-1 text-sm lg:text-base`}
            >
              You will get one short email every three days for a month. You can
              unsubscribe any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewsletterBox = () => {
  return (
    <div className="min-[760px]:max-[1262px]:flex min-[760px]:max-[1262px]:flex-col min-[760px]:max-[1262px]:items-center">
      <input
        type="email"
        placeholder="Email Address"
        className="flex-1 w-72 border px-4 py-4 outline-none border-neutral-800 placeholder:text-center"
      />
      <button className="flex-1 w-72 px-4 py-4 cursor-pointer bg-linear-to-b from-neutral-100 to-neutral-300 text-neutral-700 hover:text-black font-semibold text-lg">
        Download The Free Chapter
      </button>
    </div>
  );
};
