"use client";

import { div } from "motion/react-client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const ls =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (ls === "dark" || ls === "light") {
      setTheme(ls);
      document.documentElement.setAttribute("data-theme", ls);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  if (!mounted) return null;

  return (
    <div>
      <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-4 py-2 backdrop-blur hover:bg-foreground/15 transition"
    >
      <span className="text-sm text-foreground/90">
        {theme === "dark" ? "Dark" : "Light"} mode
      </span>
      <span className="text-lg">{theme === "dark" ? "🌙" : "☀️"}</span>
    </button>
    </div>
  );
}
