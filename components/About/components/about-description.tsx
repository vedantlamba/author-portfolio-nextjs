import { crimson } from "@/app/layout";

export const AboutDescription = () => {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-28 p-10 lg:p-0">
      <div className="space-y-6 max-w-2xl mx-auto w-full min-[760px]:max-[1262px]:max-w-sm">
        <h2 className="text-xl lg:text-2xl font-medium">
          How My Work Will Draw You In
        </h2>
        <div
          className={`space-y-6 text-lg lg:text-[21px] ${crimson.className}`}
        >
          <p>
            I write stories where myth and reality collide — where ancient
            powers linger beneath the surface of the modern world.
          </p>
          <p>
            At the center of my work is one question: What happens when
            forgotten forces begin to awaken again?
          </p>
          <p>
            In these stories, you’ll find hidden bloodlines, divine fragments,
            and characters caught between destiny and destruction.
          </p>
          <p>My writing explores themes like:</p>
          <ul className="space-y-2 list-disc pl-8 marker:text-sm marker:text-neutral-500 text-balance">
            <li>Power that is inherited, not chosen</li>
            <li>Worlds hidden in plain sight</li>
            <li>The cost of awakening something ancient</li>
            <li>Fate, identity, and forbidden legacy</li>
            <li>The thin line between human and divine</li>
          </ul>
          <p>
            More than anything, I write to pull you into a world that feels
            real… until it isn’t.
          </p>
        </div>
      </div>
      <div className="space-y-6 max-w-2xl mx-auto w-full min-[760px]:max-[1262px]:max-w-sm">
        <h2 className="text-xl lg:text-2xl font-medium">About Me</h2>
        <div
          className={`${crimson.className} space-y-6 text-lg lg:text-[21px] text-balance`}
        >
          <p className="font-semibold">
            Creator of The Bhairava Heir universe.
          </p>

          <ul className="list-disc pl-8 space-y-2 marker:text-sm marker:text-neutral-500">
            <li>A story built around divine bloodlines and forgotten gods</li>
            <li>A world where power sleeps within ordinary people</li>
            <li>A narrative driven by mystery, fate, and awakening</li>
          </ul>

          <p className="font-semibold">
            Building a dark fantasy universe for modern readers.
          </p>

          <ul className="list-disc pl-8 space-y-2 marker:text-sm marker:text-neutral-500">
            <li>Blending mythology with contemporary settings</li>
            <li>Creating stories that feel cinematic and immersive</li>
            <li>Focused on character-driven storytelling</li>
          </ul>

          <p className="font-semibold">Exploring stories beyond the surface.</p>

          <ul className="list-disc pl-8 space-y-2 marker:text-sm marker:text-neutral-500">
            <li>Not just what power is — but what it costs</li>
            <li>Not just heroes — but those who were never meant to exist</li>
            <li>Not just worlds — but the secrets hidden within them</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
