import { crimson } from "@/app/layout";
import { newsletterContent } from "@/lib/content/newsletter";
import Link from "next/link";

export const NewsletterArchive = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 min-[1100px]:gap-28">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-12">
        <h2 className="text-2xl font-medium md:text-4xl">
          {newsletterContent.archiveContent.title}
        </h2>
        <span className={`${crimson.className} text-[16px] md:text-xl`}>
          {newsletterContent.archiveContent.description}
        </span>
      </div>
      <Newsletters />
    </div>
  );
};

export const Newsletters = () => {
  return (
    <div className="mx-auto flex flex-col gap-16">
      {newsletterContent.archive.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-6 p-10 min-[1100px]:flex-row min-[1100px]:gap-16 min-[1100px]:p-0"
          >
            <span className="text-lg font-medium tracking-wide">{item.year}</span>
            <div className="flex-1 min-[1100px]:space-y-3">
              {item.issues.map((issue, issueIndex) => {
                return (
                  <div
                    key={issueIndex}
                    className="flex flex-col gap-2 border-b py-3 min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:border-b-0 min-[1100px]:py-0"
                  >
                    <span className="w-16 text-sm font-medium uppercase text-neutral-500">
                      {issue.date}
                    </span>

                    <Link href={issue.slug} className="flex-1 text-lg font-medium">
                      {issue.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
