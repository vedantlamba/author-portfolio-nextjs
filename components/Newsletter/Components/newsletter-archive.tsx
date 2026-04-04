import { crimson } from "@/app/layout";
import { newsletterContent } from "@/lib/content/newsletter";

export const NewsletterArchive = () => {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 min-[1100px]:gap-28">
      <div className="flex flex-col gap-6 md:gap-12 justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-medium">All Newsletters</h2>
        <span className={`${crimson.className} text-[16px] md:text-xl`}>
          A collection of thoughts from previous weeks
        </span>
      </div>
      <Newsletters />
    </div>
  );
};

export const Newsletters = () => {
  return (
    <div className="flex flex-col mx-auto gap-16">
      {newsletterContent.archive.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col min-[1100px]:flex-row gap-6 min-[1100px]:gap-16 p-10 min-[1100px]:p-0"
          >
            <span className="font-medium tracking-wide text-lg">
              {item.year}
            </span>
            <div className="flex-1 min-[1100px]:space-y-3">
              {item.issues.map((issue, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col min-[1100px]:flex-row min-[1100px]:items-center gap-2 py-3 border-b min-[1100px]:py-0 min-[1100px]:border-b-0"
                  >
                    <span className="w-16 text-neutral-500 uppercase text-sm font-medium">
                      {issue.date}
                    </span>

                    <p className="flex-1 text-lg font-medium">{issue.title}</p>
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
