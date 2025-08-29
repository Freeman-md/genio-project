"use client";

import Image from "next/image";
import { useState } from "react";
import GradientBorder from "../ui/gradient-border";

type Props = {
  placeholder?: string;
};

export default function NewsletterInput({
  placeholder = "Your email address",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");

      await new Promise((r) => setTimeout(r, 600));

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 1400);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[520px]">
      <GradientBorder
        radius="rounded-full"
        innerClassName="flex items-center gap-3 bg-muted px-4 py-2"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className="w-full bg-transparent text-white/90 placeholder-white/70 outline-none text-base"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className=""
        >
          <Image
            src="/svgs/right-arrow.svg"
            width={15}
            height={15}
            alt="Right Arrow"
          />
        </button>
      </GradientBorder>

      {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
      {status === "success" && (
        <p className="mt-2 text-sm text-emerald-300">
          Thanks! You’re subscribed.
        </p>
      )}
    </form>
  );
}
