import type { Metadata } from "next";
import { crimson } from "@/app/layout";
import { Footnotes } from "@/components/Articles/components/footnotes";
import { LeadCaptureSection } from "@/components/shared/lead-capture-section";
import { LongformPageLayout } from "@/components/shared/longform-page-layout";
import { articleDetailPageContent } from "@/lib/content/article-detail-page";
import {
  getArticleBySlug,
  getArticleSlugs,
  getReadNextArticles,
} from "@/lib/content/article-pages";
import { ArrowRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const description =
    article.subheading ??
    `Read ${article.title} from the Book Author Template demo collection.`;

  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      images: ["/icon.jpeg"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: ["/icon.jpeg"],
    },
  };
}

export const dynamicParams = false;

async function Page({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const readNextArticles = getReadNextArticles(article.slug);
  const ArticleContent = article.Content;

  return (
    <LongformPageLayout
      title={article.title}
      subheading={article.subheading}
      meta={
        <div className="flex flex-wrap gap-2 text-xs text-neutral-600 min-[1100px]:text-sm items-center">
          <span className={`${crimson.className} text-sm`}>written by</span>
          <span className="font-medium uppercase">{article.author}</span>
          <span className="hidden h-3 w-px bg-black md:block" />
          {article.tags.length > 0 ? (
            <>
              <span className="font-medium uppercase">
                {article.tags.join(", ")}
              </span>
            </>
          ) : null}
        </div>
      }
      content={<ArticleContent />}
      footnotes={<Footnotes items={article.footnotes} />}
      aside={
        <>
          <div className="flex flex-col gap-5 p-10">
            <span className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              {articleDetailPageContent.authorSectionTitle}
            </span>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <p className={`text-lg ${crimson.className}`}>
              <span className="font-bold">
                {articleDetailPageContent.authorName}
              </span>{" "}
              {articleDetailPageContent.authorDescription}
            </p>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <span>{articleDetailPageContent.followLabel}</span>
            <div className="flex items-center gap-4">
              {articleDetailPageContent.socialLinks.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-neutral-600 duration-200 hover:text-neutral-800"
                    target="_blank"
                  >
                    <HugeiconsIcon icon={item.icon} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5 p-10">
            <span className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              Read Next
            </span>
            {readNextArticles.length > 0 ? (
              readNextArticles.map((nextArticle) => {
                return (
                  <div key={nextArticle.slug}>
                    <span className="block h-[0.1px] w-full bg-neutral-200"></span>
                    <Link href={`/articles/${nextArticle.slug}`}>
                      <p
                        className={`pt-5 text-xl leading-[1.5] ${crimson.className}`}
                      >
                        {nextArticle.title}
                      </p>
                    </Link>
                  </div>
                );
              })
            ) : (
              <>
                <span className="block h-[0.1px] w-full bg-neutral-200"></span>
                <p className={`text-xl leading-[1.5] ${crimson.className}`}>
                  More articles will appear here as soon as you add them.
                </p>
              </>
            )}
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <Link
              href="/articles"
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide"
            >
              All Articles
              <HugeiconsIcon icon={ArrowRight03Icon} />
            </Link>
          </div>
        </>
      }
      footer={<LeadCaptureSection />}
    />
  );
}

export default Page;
