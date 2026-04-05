import { LeadCaptureSection } from "@/components/shared/lead-capture-section";
import { AboutHero } from "../components/about-hero";
import { AboutDescription } from "../components/about-description";
import { OtherInterests } from "../components/about-other-interests";

function AboutView() {
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

export default AboutView;
