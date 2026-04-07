import HomeNewsletterBoxCopy from "@/content/home/newsletter-box-copy.mdx";
import { NewsletterSignupBox } from "@/components/shared/newsletter-signup-box";
import { homeContent } from "@/lib/content/home";

interface HomeNewsletterBoxProps {
  buttonText?: string;
}

export const HomeNewsletterBox = ({
  buttonText = homeContent.newsletterBox.buttonText,
}: HomeNewsletterBoxProps) => {
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col gap-8 items-center justify-center text-center mt-36 lg:mt-56 mb-28 lg:mb-60">
      <div className="text-[16px] min-[760px]:max-[1262px]:text-xl lg:text-2xl font-medium tracking-tight leading-[1.4]">
        <HomeNewsletterBoxCopy />
      </div>
      <NewsletterSignupBox
        text={buttonText}
        variant="dark"
        className="flex flex-col lg:flex-row"
      />
    </div>
  );
};
