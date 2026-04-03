import { AuthorSection } from "../components/author-section";
import { LeadCaptureSection } from "../components/lead-capture-section";
import { Hero } from "../components/hero";
import { NewsletterBox } from "@/components/ui/newsletter-box";

export const HomeView = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <NewsletterBox />
      <AuthorSection />
      <LeadCaptureSection />
    </div>
  );
};
