import { Hero } from "../components/hero";
import { AuthorSection } from "../components/author-section";
import { LeadCaptureSection } from "@/components/shared/lead-capture-section";
import { HomeNewsletterBox } from "@/components/ui/home-newsletter-box";

export const HomeView = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <HomeNewsletterBox />
      <AuthorSection />
      <LeadCaptureSection />
    </div>
  );
};
