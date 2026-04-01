import { crimson } from "@/app/layout";

export const AuthorSection = () => {
  return (
    <div className="border-y">
      <div className="max-w-6xl mx-auto grid grid-cols-1 min-[1100px]:grid-cols-2">
        <div className="border-b min-[1100px]:border-b-0 min-[1100px]:border-r flex flex-col gap-10 py-28 min-[1100px]:py-32 pr-10 pl-10 min-[1100px]:pl-0 min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            Hi, I'm Vedant Lamba
          </h2>
          <div
            className={`${crimson.className} flex flex-col gap-10 text-lg lg:text-xl tracking-wide leading-[1.5] text-balance min-[760px]:max-[1262px]:max-w-sm lg:max-w-lg`}
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
        <div className="flex flex-col gap-10 py-28 min-[1100px]:py-32 pl-10 pr-10 min-[1200px]:pl-40 min-[1100px]:pr-0 min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
          <h3 className="text-xl md:text-2xl font-medium">
            Browse the latest newsletter:
          </h3>
          <div
            className={`flex flex-col gap-8 text-lg lg:text-xl leading-[1.5] text-balance ${crimson.className} min-[760px]:max-[1262px]:max-w-sm lg:max-w-lg`}
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
