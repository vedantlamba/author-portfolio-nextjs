import React from "react";
import { crimson } from "../layout";
import { LeadCaptureSection } from "@/components/Home/components/lead-capture-section";

function AboutPage() {
  return (
    <div className="flex flex-col gap-8 lg:gap-28">
      <div className="flex flex-col bg-neutral-900 text-neutral-100 pt-8 lg:pt-24 pb-16 lg:pb-28">
        <div className="max-w-6xl mx-auto w-full">
          <AboutHero />
        </div>
      </div>
      <AboutDescription />
      <OtherInterests />
      <LeadCaptureSection />
    </div>
  );
}

export default AboutPage;

const AboutHero = () => {
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

const AboutDescription = () => {
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

const OtherInterests = () => {
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
