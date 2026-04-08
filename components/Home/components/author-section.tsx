import { crimson } from "@/app/layout";
import AuthorSectionBody from "@/content/home/author-section-body.mdx";
import { homeContent } from "@/lib/content/home";
import { newsletterContent } from "@/lib/content/newsletter";
import Link from "next/link";

export const AuthorSection = () => {
  const latestIssues = newsletterContent.archive
    .flatMap((year) => year.issues)
    .slice(0, 3);

  return (
    <div className="border-y">
      <div className="max-w-6xl mx-auto grid grid-cols-1 min-[1100px]:grid-cols-2">
        <div className="border-b min-[1100px]:border-b-0 min-[1100px]:border-r flex flex-col gap-10 py-28 min-[1100px]:py-32 pr-10 pl-10 min-[1100px]:pl-0 min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            {homeContent.authorSection.title}
          </h2>
          <div
            className={`${crimson.className} flex flex-col gap-10 text-lg lg:text-xl tracking-wide leading-[1.5] text-balance min-[760px]:max-[1262px]:max-w-sm lg:max-w-lg`}
          >
            <AuthorSectionBody />
          </div>
        </div>
        <div className="flex flex-col gap-10 py-28 min-[1100px]:py-32 pl-10 pr-10 min-[1200px]:pl-40 min-[1100px]:pr-0 min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
          <h3 className="text-xl md:text-2xl font-medium">
            Browse the latest newsletter:
          </h3>
          <div
            className={`flex flex-col gap-8 text-lg lg:text-xl leading-[1.5] text-balance ${crimson.className} min-[760px]:max-[1262px]:max-w-sm lg:max-w-lg`}
          >
            {latestIssues.map((issue) => {
              return (
                <Link key={issue.slug} href={issue.slug}>
                  <span className="text-fill-hover">
                    <span className="font-bold">{issue.date}</span> -{" "}
                    {issue.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
