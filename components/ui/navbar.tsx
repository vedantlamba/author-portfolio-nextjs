"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu03Icon } from "@hugeicons/core-free-icons";

const Links = [
  { name: "Books", href: "/books" },
  { name: "Articles", href: "/articles" },
  { name: "Newsletter", href: "/newsletter" },
];

export const Navbar = () => {
  return (
    <div className="bg-neutral-900 text-neutral-100">
      <div className="max-w-6xl w-full mx-auto flex items-center py-9 px-8 min-[1100px]:px-1 text-[17px]">
        <div className="flex-1">
          <Link
            href="/"
            className="text-sm md:text-base font-medium tracking-widest uppercase"
          >
            Vedant Lamba
          </Link>
        </div>

        <div className="hidden lg:flex gap-7 items-center justify-center">
          {Links.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block flex-1 text-right font-medium">
          <Link href="/about">About</Link>
        </div>

        <MenuMobileButton />
      </div>
    </div>
  );
};

export const MenuMobileButton = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="block lg:hidden">
      <button
        className="flex gap-2 items-center relative z-50"
        onClick={() => setOpen((state) => !state)}
      >
        <div className="relative w-8 h-8">
          <motion.div
            animate={{
              opacity: open ? 0 : 1,
              scale: open ? 0.6 : 1,
              filter: open ? "blur(5px)" : "blur(0px)",
            }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <HugeiconsIcon icon={Menu03Icon} />
          </motion.div>

          <motion.div
            animate={{
              opacity: open ? 1 : 0,
              scale: open ? 1 : 0.6,
              filter: open ? "blur(0px)" : "blur(5px)",
            }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <HugeiconsIcon icon={Cancel01Icon} />
          </motion.div>
        </div>

        <span>Menu</span>
      </button>
      {/* <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={
              "fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-neutral-900 z-40 flex items-center justify-center text-white"
            }
          >
            <div className="h-full w-full flex flex-col gap-8 justify-center items-center text-2xl">
              {Links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link onClick={() => setOpen(false)} href="/about">
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <div
        className={`
    fixed top-[72px] left-0 w-full h-[calc(100vh-72px)]
    bg-neutral-900 z-40 flex items-center justify-center text-white

    transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
    will-change-transform

    ${open ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <div className="h-full w-full flex flex-col gap-8 items-center mt-36 text-2xl">
          {Links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};
