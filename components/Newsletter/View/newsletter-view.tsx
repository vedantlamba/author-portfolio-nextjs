import React from "react";

import { LeadCaptureSection } from "@/components/shared/lead-capture-section";
import { NewsletterHero } from "../Components/newsletter-hero";
import { NewsletterArchive } from "../Components/newsletter-archive";

function NewsletterView() {
  return (
    <div className="flex flex-col gap-8 lg:gap-28">
      <div className="flex flex-col bg-neutral-900 text-neutral-100 pt-8 lg:pt-24 pb-16 lg:pb-28">
        <div className="max-w-6xl mx-auto w-full">
          <NewsletterHero />
        </div>
      </div>
      <NewsletterArchive />
      <LeadCaptureSection />
    </div>
  );
}

export default NewsletterView;
