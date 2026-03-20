const Links = ["Books", "Articles", "Newsletter", "App", "Speaking"];

export const Navbar = () => {
  return (
    <div className="flex items-center py-7 px-3 text-[17px]">
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
  );
};
