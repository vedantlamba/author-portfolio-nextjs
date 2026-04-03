import { ArticleHero } from "../components/article-page-hero";
import { ArticlesByCategory } from "../components/articles-by-category";
import { LeadCaptureSection } from "@/components/Home/components/lead-capture-section";

function ArticlesView() {
  return (
    <div className="flex flex-col gap-8 lg:gap-28">
      <div className="flex flex-col bg-neutral-900 text-neutral-100 pt-8 lg:pt-24 pb-16 lg:pb-28">
        <div className="max-w-6xl mx-auto w-full">
          <ArticleHero />
        </div>
      </div>
      <ArticlesByCategory />
      <LeadCaptureSection />
    </div>
  );
}

export default ArticlesView;
