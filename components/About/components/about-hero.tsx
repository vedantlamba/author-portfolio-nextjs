import { PageHeroLayout } from "@/components/shared/page-hero-layout";

export const AboutHero = () => {
  return (
    <PageHeroLayout title="Hi, I'm Vedant Lamba." aside={<AboutHeroImage />}>
      <p>This is a placeholder section for your author introduction. </p>
      <p>
        You can use this space to share who you are, what you write about, and
        the kind of worlds or ideas you explore. Whether you create fantasy,
        thrillers, romance, or something entirely unique — this is where your
        story begins.
      </p>
      <p>
        Right now, you're seeing demo content inspired by a fictional universe —
        a hidden world of divine bloodlines, forgotten powers, and stories
        waiting to unfold. Replace this with your own journey, your voice, and
        your work.
      </p>
    </PageHeroLayout>
  );
};

export const AboutHeroImage = () => {
  return (
    <div className="flex min-[760px]:max-[1262px]:justify-center min-[1100px]:justify-end items-center p-10 lg:p-0">
      <div className="w-full min-[760px]:max-[1262px]:max-w-sm min-[1100px]:max-w-md aspect-square overflow-hidden rounded-lg border border-neutral-700 p-1">
        <img
          src="/author-3.jpeg"
          alt="author"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
    </div>
  );
};
