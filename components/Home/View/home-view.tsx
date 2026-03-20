import { Navbar } from "@/components/ui/navbar";

export const HomeView = () => {
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col gap-2">
      <Navbar />
      <Hero />
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-18 gap-18">
      <p className="text-4xl text-center leading-12 font-medium">
        They sealed us not because we were evil… <br /> but because we were
        unstoppable.
      </p>
      <Book />
    </div>
  );
};

export const Book = () => {
  return (
    <div className="flex justify-center relative">
      {/* Pages (background) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left page */}
        <div className="absolute w-[230px] aspect-[1/1.214] bg-white border rounded-sm opacity-80 -translate-x-38">
          <img
            src="/book-page-1.png"
            alt="book-page"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right page */}
        <div className="absolute w-[230px] aspect-[1/1.214] bg-white border rounded-sm opacity-80 translate-x-38">
          <img
            src="/book-page-2.png"
            alt="book-page"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      {/* Book  */}
      <div className="w-[250px] aspect-[1/1.414] rounded-sm overflow-hidden z-20">
        <img
          src="/bhairava-heir-1.png"
          alt="bhairava-heir"
          className="w-full h-full object-contain rounded-sm"
        />
      </div>
    </div>
  );
};
