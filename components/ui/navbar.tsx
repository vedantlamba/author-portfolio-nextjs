const Links = ["Books", "Articles", "Newsletter", "App", "Speaking"];

export const Navbar = () => {
  return (
    <div className="bg-neutral-900 text-neutral-100">
      <div className="max-w-6xl w-full mx-auto flex items-center py-9 px-3 text-[17px]">
        <div className="flex-1">
          <span className="font-medium tracking-widest uppercase">
            Vedant Lamba
          </span>
        </div>

        <div className="flex gap-7 items-center justify-center">
          {Links.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="flex-1 text-right font-medium">
          <span>About</span>
        </div>
      </div>
    </div>
  );
};
