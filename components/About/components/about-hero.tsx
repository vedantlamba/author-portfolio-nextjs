import { crimson } from "@/app/layout";

export const AboutHero = () => {
  return (
    <div className="grid grid-cols-1 min-[1100px]:grid-cols-2">
      <div className="flex flex-col justify-center gap-8 lg:gap-12 pl-10 min-[760px]:max-[1262px]:pl-0 lg:pl-4 mb-10 min-[1100px]:mb-0 min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Hi, I'm Vedant Lamba.
        </h2>
        <div
          className={`${crimson.className} text-lg lg:text-xl max-w-xs lg:max-w-lg text-balance space-y-6 lg:space-y-8 leading-[1.5]`}
        >
          <p>This is a placeholder section for your author introduction. </p>
          <p>
            You can use this space to share who you are, what you write about,
            and the kind of worlds or ideas you explore. Whether you create
            fantasy, thrillers, romance, or something entirely unique — this is
            where your story begins.
          </p>
          <p>
            Right now, you're seeing demo content inspired by a fictional
            universe — a hidden world of divine bloodlines, forgotten powers,
            and stories waiting to unfold. Replace this with your own journey,
            your voice, and your work.
          </p>
        </div>
      </div>
      <div className="flex min-[760px]:max-[1262px]:justify-center min-[1100px]:justify-end items-center p-10 lg:p-0">
        <div className="w-full min-[760px]:max-[1262px]:max-w-sm min-[1100px]:max-w-md aspect-square overflow-hidden rounded-lg border border-neutral-700 p-1">
          <img
            src="/author-3.jpeg"
            alt="author"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};
