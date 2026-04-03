import { crimson } from "@/app/layout";

type PageHeroLayoutProps = {
  title: string;
  children: React.ReactNode;
  aside: React.ReactNode;
};

export function PageHeroLayout({
  title,
  children,
  aside,
}: PageHeroLayoutProps) {
  return (
    <div className="grid grid-cols-1 min-[1100px]:grid-cols-2">
      <div className="flex flex-col justify-center gap-8 lg:gap-12 pl-10 min-[760px]:max-[1262px]:pl-0 lg:pl-4 mb-10 min-[1100px]:mb-0 min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          {title}
        </h2>
        <div
          className={`${crimson.className} text-lg lg:text-xl max-w-xs lg:max-w-lg text-balance space-y-6 lg:space-y-8 leading-[1.5]`}
        >
          {children}
        </div>
      </div>
      {aside}
    </div>
  );
}
