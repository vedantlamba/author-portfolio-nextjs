
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