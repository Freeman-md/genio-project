"use client";

import { useState } from "react";
import GradientBorder from "@/app/components/ui/gradient-border";
import Button from "@/app/components/ui/button";
import Image from "next/image";

type TestimonialItem = {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
};

export default function TestimonialSlider({
  items,
}: {
  items: TestimonialItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = items.length;

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const goToPrevious = () => setActiveIndex(prevIndex);
  const goToNext = () => setActiveIndex(nextIndex);

  return (
    <div className="relative container py-8 max-sm:overflow-x-hidden">
      <div className={`flex justify-center gap-6 sm:gap-8 lg:gap-12 `}>
        <Card item={items[prevIndex]} isActive={false} />

        <Card item={items[activeIndex]} isActive={true} />

        <Card item={items[nextIndex]} isActive={false} />
      </div>

      <button
        onClick={goToPrevious}
        aria-label="Previous testimonial"
        className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition"
      >
        <Image
          src="/svgs/left-arrow.svg"
          alt="Previous"
          width={15}
          height={15}
        />
      </button>

      <button
        onClick={goToNext}
        aria-label="Next testimonial"
        className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full transition"
      >
        <Image src="/svgs/right-arrow.svg" alt="Next" width={15} height={15} />
      </button>
    </div>
  );
}

function Card({
  item,
  isActive,
}: {
  item: TestimonialItem;
  isActive: boolean;
}) {
  return (
    <GradientBorder
      radius="rounded-4xl"
      className={`flex-none shrink-0
+                 min-w-[260px] w-[65vw] sm:w-[50vw] lg:w-1/3 max-w-[360px]
min-h-[460px] ${
        isActive ? "scale-100 opacity-100 z-10" : "scale-95 opacity-60 z-0"
      }`}
      innerClassName="flex flex-col items-center justify-between text-center h-full px-8 py-12 bg-muted"
    >
      <div className="space-y-8">
        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src="/svgs/star.svg"
              alt="Star"
              width={25}
              height={25}
              className={`${
                index < item.rating ? "opacity-100" : "opacity-30"
              }`}
            />
          ))}
        </div>

        <div>
          <h3 className="mt-5 text-brand-gradient text-2xl">{item.name}</h3>
          <p className="mt-4 leading-relaxed max-w-[38ch]">{item.text}</p>
        </div>
      </div>

      {!isActive && (
        <p className="mt-6 text-sm text-foreground/60">{item.date}</p>
      )}

      {isActive && (
        <div className="mt-6">
          <Button variant="solid-white">Contact Us</Button>
        </div>
      )}
    </GradientBorder>
  );
}
