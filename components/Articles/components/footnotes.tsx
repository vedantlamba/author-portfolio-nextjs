"use client";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

export const Footnotes = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-6 pb-8 lg:pb-28">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer text-sm font-medium uppercase tracking-wider flex gap-1 items-center"
      >
        Footnotes
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        >
          <HugeiconsIcon icon={ArrowDown01Icon} size={20}  />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={` text-[16px] italic w-2xl p-5 flex flex-col gap-8 leading-[1.7]`}
        >
          <p>
            1. This article shares a shortened version of Mikkinen's speech. I
            originally read the full commencement speech here.
          </p>
          <p>
            2. Minkkinen faced challenges similar to these in his own career.
            During his early years, he struggled to separate his photographic
            style from contemporaries like Ralph Gibson.
          </p>
          <p>
            3. I owe a debt of thanks to Venkatesh Rao and his fantastic post on
            grit, which is where I originally came across the idea of re-work
            being more important than more work. I'm basically just repeating
            his logic here.
          </p>
          <p>
            4. Let's be clear, showing up matters. It's better to go to class
            than to skip the lecture. It's better to respond to your emails than
            to not write them. It's better to go to the gym than to avoid
            working out. But for top performers the key is re-work, not simply
            more work.
          </p>
        </div>
      </div>
    </div>
  );
};
