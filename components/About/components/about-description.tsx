import { crimson, jost } from "@/app/layout";
import AboutDescriptionAboutMe from "@/content/about/description-about-me.mdx";
import AboutDescriptionWork from "@/content/about/description-work.mdx";
import type { MDXComponents } from "mdx/types";

const aboutDescriptionMdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className={`text-xl lg:text-2xl font-medium ${jost.className}`}
      {...props}
    />
  ),
};

export const AboutDescription = () => {
  return (
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-28 p-10 lg:p-0">
      <div className="space-y-6 max-w-2xl mx-auto w-full min-[760px]:max-[1262px]:max-w-sm">
        <div
          className={`space-y-6 text-lg lg:text-[21px] ${crimson.className}`}
        >
          <AboutDescriptionWork components={aboutDescriptionMdxComponents} />
        </div>
      </div>
      <div className="space-y-6 max-w-2xl mx-auto w-full min-[760px]:max-[1262px]:max-w-sm">
        <div
          className={`${crimson.className} space-y-6 text-lg lg:text-[21px] text-balance`}
        >
          <AboutDescriptionAboutMe components={aboutDescriptionMdxComponents} />
        </div>
      </div>
    </div>
  );
};
