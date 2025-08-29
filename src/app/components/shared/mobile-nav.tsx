"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu } from "@tabler/icons-react";

type Props = {
  navLinks: string[];
};

export default function MobileNav({ navLinks }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white/90"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <IconMenu />
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="absolute right-0 top-full z-50 mt-2 w-[min(80vw,18rem)] rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile Dropdown">
              <ul className="flex flex-col space-y-1">
                {navLinks.map((label) => {
                  const isActive = label === "Services";
                  return (
                    <li key={label}>
                      <a
                        href="#"
                        className={[
                          "block rounded-lg px-3 py-2 text-xs transition",
                          isActive
                            ? "bg-white/15 text-white"
                            : "text-white/80 hover:bg-white/10 hover:text-white",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Search Input */}
            <div className="mt-2">
              <label htmlFor="m-search" className="sr-only">
                Search
              </label>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                <Image
                  src="/images/search-icon.svg"
                  width={18}
                  height={18}
                  alt="Search Icon"
                />
                <input
                  id="m-search"
                  placeholder="Search..."
                  className="w-full bg-transparent text-xs text-white placeholder-white/70 outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
