import { alegreya, crimson, eb_garamond } from "@/app/layout";

export const AuthorSection = () => {
  return (
    <div className="border-y">
      <div className="max-w-6xl mx-auto grid grid-cols-2">
        <div className="border-r flex flex-col gap-10 py-32 pr-5 pl-10 md:pl-0">
          <h2 className="text-4xl font-medium">Hi, I'm Vedant Lamba</h2>
          <div
            className={`${crimson.className} flex flex-col gap-10 text-xl tracking-wide leading-[1.5] text-balance`}
          >
            <p>
              This section is designed for your story. Use it to introduce
              yourself as a writer — your ideas, your journey, and the worlds
              you’re building.
            </p>
            <p>
              Right now, you're seeing demo content. The book, text, and visuals
              are placeholders to help you imagine what your own author page
              could look like. Click here to learn more about me and my work.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 py-32 pl-36">
          <h3 className="text-2xl font-medium">
            Browse the latest newsletter:
          </h3>
          <div
            className={`flex flex-col gap-8 text-xl leading-[1.5] text-balance ${crimson.className}`}
          >
            <p>
              3-2-1: This is a demo newsletter title — you can replace this with
              your own article or newsletter link
            </p>
            <p>
              3-2-1: Add your own writing here, whether it’s blog posts, weekly
              newsletters, or insights
            </p>
            <p>
              3-2-1: Use this section to showcase your content and keep your
              readers engaged
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
