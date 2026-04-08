import type { Metadata } from "next";
import { crimson } from "@/app/layout";
import { NewsletterDetailLayout } from "@/components/Newsletter/Components/newsletter-detail-layout";
import { LeadCaptureSection } from "@/components/shared/lead-capture-section";
import { newsletterDetailPageContent } from "@/lib/content/newsletter-detail-page";
import {
  getNewsletterBySlug,
  getNewsletterSlugs,
  getReadNextNewsletters,
} from "@/lib/content/newsletter-pages";
import { ArrowRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getNewsletterSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const newsletter = await getNewsletterBySlug(slug);

  if (!newsletter) {
    return {};
  }

  const description = `Read ${newsletter.title}, a newsletter issue from the Book Author Template demo.`;

  return {
    title: newsletter.title,
    description,
    openGraph: {
      title: newsletter.title,
      description,
      images: ["/icon.jpeg"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: newsletter.title,
      description,
      images: ["/icon.jpeg"],
    },
  };
}

export const dynamicParams = false;

async function Page({ params }: Props) {
  const { slug } = await params;
  const newsletter = await getNewsletterBySlug(slug);

  if (!newsletter) {
    notFound();
  }

  const readNextIssues = getReadNextNewsletters(newsletter.slug);
  const NewsletterContent = newsletter.Content;

  return (
    <NewsletterDetailLayout
      title={newsletter.title}
      meta={
        <div className="flex flex-wrap gap-2 text-xs text-neutral-600 min-[1100px]:text-sm items-center">
          <span className={`${crimson.className} text-sm`}>written by</span>
          <span className="font-medium uppercase">{newsletter.author}</span>
          <span className="h-3 w-px bg-black block" />
          <span className="font-medium uppercase">{newsletter.dateLabel}</span>
        </div>
      }
      content={<NewsletterContent />}
      aside={
        <>
          <div className="flex flex-col gap-5 p-10">
            <span className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              {newsletterDetailPageContent.aboutTitle}
            </span>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <p className={`text-lg ${crimson.className}`}>
              {newsletterDetailPageContent.aboutDescription}
            </p>
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <span>{newsletterDetailPageContent.signupLabel}</span>
            <div className="flex items-center gap-4">
              {newsletterDetailPageContent.socialLinks.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-neutral-500 duration-200 hover:text-neutral-800"
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
              {newsletterDetailPageContent.readNextTitle}
            </span>
            {readNextIssues.length > 0 ? (
              readNextIssues.map((issue) => {
                return (
                  <div key={issue.slug} className="border-t pt-5">
                    <span className="text-xs font-medium uppercase text-neutral-500">
                      {issue.dateLabel}
                    </span>
                    <Link href={`/newsletter/${issue.slug}`}>
                      <p
                        className={`pt-2 text-xl leading-[1.5] ${crimson.className}`}
                      >
                        {issue.title}
                      </p>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="border-t pt-5">
                <p className={`text-lg leading-[1.5] ${crimson.className}`}>
                  More newsletter issues will appear here as soon as you add
                  them.
                </p>
              </div>
            )}
            <span className="block h-[0.1px] w-full bg-neutral-200"></span>
            <Link
              href={newsletterDetailPageContent.allIssuesHref}
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide"
            >
              {newsletterDetailPageContent.allIssuesLabel}
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
