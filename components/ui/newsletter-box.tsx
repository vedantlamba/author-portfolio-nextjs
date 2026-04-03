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
