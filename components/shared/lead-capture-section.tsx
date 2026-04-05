import { crimson } from "@/app/layout";
import LeadCaptureBody from "@/content/shared/lead-capture-body.mdx";
import { siteContent } from "@/lib/content/site";
import type { MDXComponents } from "mdx/types";

interface LeadCaptureSectionProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
}

const leadCaptureMdxComponents: MDXComponents = {
  h2: (props) => <h2 className="text-3xl font-semibold text-neutral-100" {...props} />,
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  li: (props) => <li {...props} />,
};

export const LeadCaptureSection = ({
  heading = siteContent.shared.leadCapture.heading,
  subheading = siteContent.shared.leadCapture.subheading,
  buttonText = siteContent.shared.leadCapture.buttonText,
}: LeadCaptureSectionProps) => {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 min-[1100px]:grid-cols-2">
        <div className="flex flex-col gap-10 py-18 lg:py-28 min-[760px]:max-[1262px]:pr-0 min-[1100px]:pr-10 pl-10 lg:pl-0 min-[760px]:max-[1262px]:pl-0 text-balance min-[760px]:max-[1262px]:items-center min-[760px]:max-[1262px]:text-center min-[760px]:max-[1262px]:max-w-lg min-[760px]:max-[1262px]:mx-auto">
          <LeadCaptureBody components={leadCaptureMdxComponents} />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 p-5 lg:py-28 min-[1100px]:pl-36">
          <div className="bg-linear-to-b from-neutral-800 to-neutral-900 h-full rounded-md flex flex-col text-balance text-center p-10 gap-10 min-[560px]:max-[1262px]:w-100">
            <h2 className="text-xl lg:text-2xl font-medium flex-1">{heading}</h2>

            <NewsletterBox text={buttonText} />
            <p
              className={`${crimson.className} text-neutral-300 flex-1 text-sm lg:text-base`}
            >
              {subheading}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NewsletterBoxProps {
  text?: string;
}

export const NewsletterBox = ({
  text = siteContent.shared.leadCapture.buttonText,
}: NewsletterBoxProps) => {
  return (
    <div className="min-[760px]:max-[1262px]:flex min-[760px]:max-[1262px]:flex-col min-[760px]:max-[1262px]:items-center">
      <input
        type="email"
        placeholder="Email Address"
        className="flex-1 w-72 border px-4 py-4 outline-none border-neutral-800 placeholder:text-center"
      />
      <button className="flex-1 w-72 px-4 py-4 cursor-pointer bg-linear-to-b from-neutral-100 to-neutral-300 text-neutral-700 hover:text-black font-semibold text-lg">
        {text}
      </button>
    </div>
  );
};
