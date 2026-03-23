import { Navbar } from "@/components/ui/navbar";
import { AuthorSection } from "../components/author-section";
import { LeadCaptureSection } from "../components/lead-capture-section";

export const HomeView = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <NewsletterBox />
      <AuthorSection />
      <LeadCaptureSection />
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="bg-neutral-900 text-neutral-100 pt-24 pb-40">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center gap-32">
        <p className="text-[40px] text-center font-semibold leading-[1.4] tracking-tight">
          They sealed us not because we were evil… <br />
          but because we were unstoppable.
        </p>
        <div className="-mb-40">
          <Book />
        </div>
      </div>
    </div>
  );
};

export const Book = () => {
  return (
    <div className="relative flex justify-center items-center h-[120px] translate-y-12">
      {/* Pages */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left */}
        <div className="absolute w-[220px] aspect-[1/1.414] bg-white border rounded-sm -translate-x-44">
          <img
            src="/book-page-1.png"
            className="w-full h-full object-cover object-top rounded-sm"
          />
        </div>

        {/* Right */}
        <div className="absolute w-[220px] aspect-[1/1.414] bg-white border rounded-sm translate-x-44">
          <img
            src="/book-page-2.png"
            className="w-full h-full object-cover object-top rounded-sm"
          />
        </div>
      </div>

      {/* Book */}
      <div className="absolute w-[250px] aspect-[1/1.414] rounded-sm overflow-hidden z-20">
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
    <div className="max-w-6xl w-full mx-auto flex flex-col gap-8 items-center justify-center text-center mt-60 mb-60">
      <p className="text-2xl font-medium tracking-tight leading-[1.4]">
        Download Chapter 1 of <span className="italic">The Bhairava Heir</span>{" "}
        , <br /> my #1 New York Times bestselling book.
      </p>
      <div className="flex">
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
