import { crimson } from "@/app/layout";

interface NewsletterDetailLayoutProps {
  title: string;
  meta: React.ReactNode;
  content: React.ReactNode;
  aside: React.ReactNode;
  footer?: React.ReactNode;
}

export function NewsletterDetailLayout({
  title,
  meta,
  content,
  aside,
  footer,
}: NewsletterDetailLayoutProps) {
  return (
    <div className="flex flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-col min-[1100px]:flex-row">
        <div className="flex-3 flex flex-col gap-8 min-[1100px]:gap-28 min-[1100px]:border-r">
          <header className="flex flex-col gap-6 px-10 min-[1100px]:w-xl min-[1100px]:px-0 pt-8 lg:pt-28">
            <h1 className="text-3xl leading-[1.4] font-medium tracking-tight md:text-3xl lg:text-5xl">
              {title}
            </h1>
            {meta}
          </header>
          <span className="block h-px bg-border" />
          <article
            className={`${crimson.className} px-10 pb-10 text-xl min-[1100px]:w-xl min-[1100px]:px-0 lg:pb-24 [&_em]:italic [&_h2]:mb-8 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:uppercase [&_h2]:not-italic [&_hr]:my-10 [&_hr]:w-20 [&_hr]:border-neutral-300 [&_p]:mb-6 [&_strong]:font-semibold [&_ul]:mb-6 [&_ul]:space-y-3 [&_ol]:mb-6 [&_ol]:space-y-3`}
          >
            {content}
          </article>
        </div>
        <aside className="flex flex-1 flex-col justify-between pt-0 pb-8 lg:pt-20 lg:pb-24">
          {aside}
        </aside>
      </div>
      {footer}
    </div>
  );
}
