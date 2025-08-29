"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import GradientBorder from "@/app/components/ui/gradient-border";

type Item = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
};

export default function NewsList({ items }: { items: Item[] }) {
  return (
    <motion.ul
      className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
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
      {items.map((item) => (
        <motion.li
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
          className="flex flex-col"
        >
          <Link href={item.href} aria-label={item.title} className="group block">
            <GradientBorder
              radius="rounded-3xl"
              innerClassName="rounded-3xl overflow-hidden relative aspect-square"
            >
               <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       25vw"
                priority={false}
              />
            </GradientBorder>
          </Link>

          {/* Text */}
          <div className="mt-5">
            <Link href={item.href} className="no-underline hover:underline">
              <h3 className="text-brand-gradient text-2xl leading-tight">
                {item.title}
              </h3>
            </Link>

            <p className="mt-2">
              {item.date} - {item.excerpt} <Link href={item.href} className="underline">More…</Link>
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
