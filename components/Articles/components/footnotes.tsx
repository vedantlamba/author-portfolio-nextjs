"use client";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef, useState } from "react";

interface FootnotesProps {
  items: string[];
}

export const Footnotes = ({ items }: FootnotesProps) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-start gap-6 lg:pb-28">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-1 px-10 text-sm font-medium uppercase tracking-wider min-[1100px]:px-0"
      >
        Footnotes
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        >
          <HugeiconsIcon icon={ArrowDown01Icon} size={20} />
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-all duration-400 ${
          open ? "opacity-100 ease-in-out" : "opacity-0 ease-in-out"
        }`}
      >
        <div
          ref={contentRef}
          className="flex flex-col gap-8 p-10 text-[16px] italic leading-[1.7] min-[1100px]:w-2xl min-[1100px]:p-0"
        >
          {items.map((item, index) => {
            return <p key={index}>{index + 1}. {item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
