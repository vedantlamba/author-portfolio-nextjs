import { Navbar } from "@/components/ui/navbar";
import { AuthorSection } from "../components/author-section";
import { LeadCaptureSection } from "../components/lead-capture-section";

export const HomeView = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <NewsletterBox />
      <AuthorSection />
      <LeadCaptureSection />
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="bg-neutral-900 text-neutral-100 pt-24 pb-36">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center gap-24 lg:gap-32">
        <p className="text-[18px] min-[760px]:max-[1262px]:text-2xl lg:text-[40px] text-center font-semibold leading-[1.4] tracking-tight max-w-xs min-[760px]:max-[1262px]:max-w-2xl lg:max-w-4xl text-balance">
          They sealed us not because we were evil… <br />
          but because we were unstoppable.
        </p>
        <div className="-mb-48 lg:-mb-36">
          <Book />
        </div>
      </div>
    </div>
  );
};

export const Book = () => {
  return (
    <div className="relative flex justify-center items-center h-[120px] lg:translate-y-10">
      {/* Pages */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left */}
        <div className="absolute w-[120px] lg:w-[190px] lg:aspect-[1/1.414] bg-white border rounded-sm -translate-x-20 lg:-translate-x-40 ">
          <img
            src="/book-page-1.png"
            className="w-full h-full object-cover object-top rounded-sm"
          />
        </div>

        {/* Right */}
        <div className="absolute w-[120px] lg:w-[190px] lg:aspect-[1/1.414] bg-white border rounded-sm translate-x-20 lg:translate-x-40 ">
          <img
            src="/book-page-2.png"
            className="w-full h-full object-cover object-top rounded-sm"
          />
        </div>
      </div>

      {/* Book */}
      <div className="absolute w-[140px] lg:w-[240px] lg:aspect-[1/1.414] rounded-sm overflow-hidden z-20">
        <img
          src="/bhairava-heir-1.png"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export const NewsletterBox = () => {
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col gap-8 items-center justify-center text-center mt-36 lg:mt-56 mb-28 lg:mb-60">
      <p className="text-[16px] min-[760px]:max-[1262px]:text-xl lg:text-2xl font-medium tracking-tight leading-[1.4]">
        Download Chapter 1 of <span className="italic">The Bhairava Heir</span>{" "}
        , <br /> my #1 New York Times bestselling book.
      </p>
      <div className="flex flex-col lg:flex-row">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-1 w-72 border px-4 py-4 outline-none border-neutral-800"
        />
        <button className="flex-1 w-72 border px-4 py-4 cursor-pointer bg-linear-to-b from-neutral-800 to-neutral-900 text-neutral-200 hover:text-white font-semibold text-lg border-neutral-800">
          Download The Free Chapter
        </button>
      </div>
    </div>
  );
};
