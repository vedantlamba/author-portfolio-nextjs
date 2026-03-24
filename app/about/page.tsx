import React from "react";
import { crimson } from "../layout";

function AboutPage() {
  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col bg-neutral-900 text-neutral-100 pt-24 pb-28">
        <div className="max-w-6xl mx-auto w-full">
          <AboutHero />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

const AboutHero = () => {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center text-center">
      <h2 className="text-4xl font-medium">Hi, I'm Vedant Lamba.</h2>
      <div
        className={`${crimson.className} text-xl max-w-lg text-balance space-y-5 leading-[1.5]`}
      >
        <p>This is a placeholder section for your author introduction. </p>
        <p>
          You can use this space to share who you are, what you write about, and
          the kind of worlds or ideas you explore. Whether you create fantasy,
          thrillers, romance, or something entirely unique — this is where your
          story begins.
        </p>
        <p>
          Right now, you're seeing demo content inspired by a fictional universe
          — a hidden world of divine bloodlines, forgotten powers, and stories
          waiting to unfold. Replace this with your own journey, your voice, and
          your work.
        </p>
      </div>
    </div>
  );
};
