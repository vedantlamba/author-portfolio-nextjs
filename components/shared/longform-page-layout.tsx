import { crimson } from "@/app/layout";

interface LongformPageLayoutProps {
  title: string;
  meta?: React.ReactNode;
  content: React.ReactNode;
  footnotes?: React.ReactNode;
  aside?: React.ReactNode;
  footer?: React.ReactNode;
}

export function LongformPageLayout({
  title,
  meta,
  content,
  footnotes,
  aside,
  footer,
}: LongformPageLayoutProps) {
  return (
    <div className="flex flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-col min-[1100px]:flex-row">
        <div className="flex-3 flex flex-col gap-8 min-[1100px]:gap-28 min-[1100px]:border-r">
          <header className="flex flex-col gap-6 px-10 py-8 min-[1100px]:px-0 lg:py-24">
            <h1 className="min-[1100px]:w-xl text-3xl leading-[1.4] font-medium tracking-tight md:text-3xl lg:text-5xl">
              {title}
            </h1>
            {meta}
          </header>
          <div
            className={`${crimson.className} space-y-6 px-10 text-xl min-[1100px]:w-xl min-[1100px]:px-0`}
          >
            {content}
          </div>
          {footnotes ? <div>{footnotes}</div> : null}
        </div>
        {aside ? (
          <aside className="flex flex-1 flex-col justify-between pt-0 pb-8 lg:pt-20 lg:pb-24">
            {aside}
          </aside>
        ) : null}
      </div>
      {footer}
    </div>
  );
}
