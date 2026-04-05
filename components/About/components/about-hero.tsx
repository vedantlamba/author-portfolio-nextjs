import AboutHeroBody from "@/content/about/hero-body.mdx";
import { PageHeroLayout } from "@/components/shared/page-hero-layout";
import { aboutContent } from "@/lib/content/about";

export const AboutHero = () => {
  return (
    <PageHeroLayout title={aboutContent.hero.title} aside={<AboutHeroImage />}>
      <AboutHeroBody />
    </PageHeroLayout>
  );
};

export const AboutHeroImage = () => {
  return (
    <div className="flex min-[760px]:max-[1262px]:justify-center min-[1100px]:justify-end items-center p-10 lg:p-0">
      <div className="w-full min-[760px]:max-[1262px]:max-w-sm min-[1100px]:max-w-md aspect-square overflow-hidden rounded-lg border border-neutral-700 p-1">
        <img
          src={aboutContent.hero.image.src}
          alt={aboutContent.hero.image.alt}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
    </div>
  );
};
