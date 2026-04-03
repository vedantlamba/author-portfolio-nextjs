import { crimson } from "@/app/layout";

export const OtherInterests = () => {
  return (
    <div className="w-full border-t pt-16 lg:pt-28">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 md:gap-28">
        <div className="space-y-3 lg:space-y-6 max-w-lg mx-auto w-full text-center min-[760px]:max-[1262px]:max-w-sm">
          <h2 className="text-xl lg:text-2xl font-medium">Other Interests</h2>
          <p className="text-lg text-balance">
            Things that shape my thinking, creativity, and the worlds I build…
          </p>
        </div>
        <div className="grid grid-cols-1 min-[760px]:max-[1262px]:max-w-sm min-[760px]:max-[1262px]:mx-auto min-[1260px]:grid-cols-3 gap-16 lg:gap-28 p-10 min-[760px]:max-[1262px]:p-0 min-[1100px]:p-10">
          <div className="space-y-5">
            <h3 className="text-xl font-medium">
              Spiritual & Thoughtful Reading
            </h3>
            <p
              className={`${crimson.className} leading-[1.7] text-lg lg:text-xl`}
            >
              I’m drawn to books that explore deeper truths — from spirituality
              to philosophy, as well as fiction and non-fiction that challenge
              how we see the world. These ideas often find their way into my
              stories.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-medium">Anime & Storytelling</h3>
            <p
              className={`${crimson.className} leading-[1.7] text-lg lg:text-xl`}
            >
              Anime inspires my sense of scale, emotion, and character depth.
              I’m especially drawn to stories that blend power, sacrifice, and
              layered worlds — where every character carries meaning.
            </p>
          </div>
          <div className="space-y-5">
            <h3 className="text-xl font-medium">Meditation & Sadhana</h3>
            <p
              className={`${crimson.className} leading-[1.7] text-lg lg:text-xl`}
            >
              Stillness is just as important as creation. Through meditation and
              sadhana, I explore clarity, discipline, and inner awareness —
              which deeply influences both my writing and perspective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
