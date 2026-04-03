import { crimson } from "@/app/layout";
import { articlesData } from "../Data/mock-data";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export const ArticlesByCategory = () => {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 min-[1100px]:gap-28">
      <div className="flex flex-col gap-6 md:gap-12 justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-medium">All Articles</h2>
        <span className="text-lg md:text-xl">Browse articles by topic.</span>
      </div>
      <div className="w-full grid grid-cols-1 min-[1100px]:grid-cols-2 text-balance gap-28 p-10 min-[1100px]:p-0">
        {articlesData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <h3 className="text-[22px] font-medium py-3 capitalize">
                {item.category}
              </h3>
              <ul>
                {item.articles.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`py-4 ${crimson.className} text-xl border-t`}
                    >
                      <Link href={`/articles/${item.slug}`}>{item.title}</Link>
                    </li>
                  );
                })}
                <li className="py-4 text-xs md:text-[16px] tracking-wide font-medium border-t uppercase">
                  <Link
                    href={`/articles/${item.slug}`}
                    className="flex items-center gap-2 md:gap-4"
                  >
                    Read More Articles On {item.category}
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      className="size-4 md:size-5"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
