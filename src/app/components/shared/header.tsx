"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <div className="flex max-md:justify-between md:flex-col gap-10">
          <Link href="/" aria-label="Genio Accountants">
            <Image
              src="/images/genio-logo-white.svg"
              width={141}
              height={49}
              alt="Genio Accountants Logo"
              priority
            />
          </Link>

          <div className="hidden w-full md:flex items-center gap-4 lg:gap-20">
            <nav
              aria-label="Primary"
              className="flex flex-1 items-center rounded-full bg-white/5 px-4 py-2 backdrop-blur"
            >
              <ul className="flex items-center gap-2 justify-around w-full">
                {NAV_LINKS.map((label) => {
                  const isActive = label === "Services";
                  return (
                    <li key={label}>
                      <Link
                        href="#"
                        className={[
                          "block rounded-full px-3 py-1.5 text-sm transition",
                          isActive
                            ? "bg-white/15 text-white"
                            : "text-white/80 hover:bg-white/10 hover:text-white",
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

            <div className="lg:min-w-1/4">
              <label htmlFor="site-search" className="sr-only">
                Search
              </label>
              <div className="flex items-center gap-3 rounded-full bg-white/5 px-4 py-3 backdrop-blur">
                <Image
                  src="/images/search-icon.svg"
                  width={24}
                  height={24}
                  alt="Search Icon"
                />
                <input
                  id="site-search"
                  placeholder="Search..."
                  className="w-full bg-transparent max-lg:hidden text-sm text-white placeholder-white/90 outline-none"
                />
              </div>
            </div>
          </div>

          <MobileNav navLinks={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
