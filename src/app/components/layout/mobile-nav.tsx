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
        className="inline-flex h-9 w-9 items-center justify-center rounded-md cursor-pointer text-foreground/90"
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
            className="absolute right-0 top-full z-50 mt-2 w-[min(80vw,18rem)] rounded-xl border border-foreground/10 bg-surface-2/90 p-2 backdrop-blur"
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
                            ? "bg-gradient-to-b from-foreground/20 to-foreground/5 text-foreground shadow-sm"
                            : "text-foreground/80 hover:bg-gradient-to-b hover:from-foreground/15 hover:to-foreground/5 hover:text-foreground",
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
              <div className="flex items-center gap-2 rounded-lg bg-foreground/5 px-3 py-2">
                <Image
                  src="/svgs/search-icon.svg"
                  width={18}
                  height={18}
                  alt="Search Icon"
                />
                <input
                  id="m-search"
                  placeholder="Search..."
                  className="w-full bg-transparent text-xs text-foreground placeholder-foreground/70 outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
