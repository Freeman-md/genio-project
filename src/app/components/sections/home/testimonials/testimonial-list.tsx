"use client";

import { motion } from "motion/react";
import GradientBorder from "@/app/components/ui/gradient-border";
import Button from "@/app/components/ui/button";
import Image from "next/image";

type Item = {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
};

export default function TestimonialList({ items }: { items: Item[] }) {
  
  const visible = items.slice(0, 3);

  return (
    <motion.ul
      className="mt-12 grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 items-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.08, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {visible.map((testimonial, idx) => {
        const dim = idx !== 1 ? "opacity-80" : "opacity-100";
        const showCta = idx === 1;

        return (
          <motion.li
            key={testimonial.id}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
          >
            <GradientBorder
              radius="rounded-[32px]"
              className={dim}
              innerClassName="bg-muted p-8 md:p-9 rounded-[32px] text-center"
            >
              <div className="flex justify-center gap-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Image key={i} src="/svgs/star.svg" alt="" width={20} height={20} />
                ))}
              </div>

              <h3 className="mt-5 text-brand-gradient text-2xl font-semibold">
                {testimonial.name}
              </h3>

              <p className="mt-4 text-white/90 max-w-[42ch] mx-auto leading-relaxed">
                “{testimonial.text}”
              </p>

              <p className="mt-6 text-sm text-white/60">{testimonial.date}</p>

              {showCta && (
                <div className="mt-7">
                  <Button variant="solid-white">
                    Contact Us
                  </Button>
                </div>
              )}
            </GradientBorder>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
