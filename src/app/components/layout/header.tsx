"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const NAV_LINKS = [
  "Home",
  "Services", // active
  "About",
  "Online Accounting",
  "Blog",
  "Resources",
  "Contact",
];

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className={`max-md:fixed w-full inset-x-0 ${
          scrolled ? "top-0 bg-surface-2/70 backdrop-blur" : "bg-transparent"
        }`}>
        <div className="container flex items-center justify-between gap-10">
          <Link href="/" aria-label="Genio Accountants">
          <Image
            src="/svgs/genio-logo-white.svg"
            width={141}
            height={49}
            alt="Genio Accountants Logo"
            priority
          />
        </Link>

        <MobileNav navLinks={NAV_LINKS} />
        </div>
      </div>

      <nav
        className={`max-md:hidden md:fixed inset-x-0 transition ${
          scrolled ? "top-0 bg-surface-2/70 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="w-full md:flex items-center gap-4 lg:gap-16 xl:gap-20">
            <nav
              aria-label="Primary"
              className="flex flex-1 items-center rounded-full bg-white/5 px-2 lg:px-6 py-2 backdrop-blur"
            >
              <ul className="flex items-center gap-2 justify-around w-full">
                {NAV_LINKS.map((label) => {
                  const isActive = label === "Services";
                  return (
                    <li key={label}>
                      <Link
                        href="#"
                        className={[
                          "block rounded-full px-3 py-1.5 text-sm transition duration-200 ",
                          isActive
                            ? "bg-gradient-to-b from-white/20 to-white/5 text-white shadow-sm"
                            : "text-white/80 hover:bg-gradient-to-b hover:from-white/15 hover:to-white/5 hover:text-white",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="lg:min-w-1/4 max-lg:hidden">
              <label htmlFor="site-search" className="sr-only">
                Search
              </label>
              <div className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 backdrop-blur">
                <Image
                  src="/svgs/search-icon.svg"
                  width={24}
                  height={24}
                  alt="Search Icon"
                />
                <input
                  id="site-search"
                  placeholder="Search..."
                  className="w-full bg-transparent text-sm text-white placeholder-white/90 outline-none"
                />
              </div>
            </div>

            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="lg:hidden flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
              aria-label="Toggle search"
            >
              <Image
                src="/svgs/search-icon.svg"
                width={28}
                height={28}
                alt="Search Icon"
              />
            </button>
          </div>

          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden mt-4"
              >
                <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 backdrop-blur">
                  <Image
                    src="/svgs/search-icon.svg"
                    width={24}
                    height={24}
                    alt="Search Icon"
                  />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-transparent text-white placeholder-white/80 outline-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
