"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/app/components/ui/button";

export default function TaxPlanning() {
  return (
    <section className="relative isolate">
      <div className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[42px] bg-[#F7F4EA] px-6 py-8 md:px-10 md:py-12 lg:px-20 lg:py-24"
        >
          <div className="grid items-center gap-10 lg:grid-cols-12">

            <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-4">
              <div className="mx-auto max-w-[520px]">
                <div className="rounded-[28px] bg-white p-3">
                  <div className="relative overflow-hidden rounded-[22px] aspect-[4/3]">
                    <Image
                      src="/images/tax-meeting.jpg"
                      alt="Two people in a tax planning meeting"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-8 text-background space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Tax Planning Meetings
              </h2>

              <div className="space-y-6 text-lg md:text-xl leading-snug">
                <p>
                  Most accountants now are proactive in their tax planning and advice
                </p>
                <p>
                  We demonstrate this with our clients benefiting from tax advice and
                  planning during the financial year – not after it…!
                </p>
                <p>
                  This service also includes an estimate of your potential tax liabilities
                  to ensure there are no nasty surprises.
                </p>
              </div>

              <div className="!mt-16">
                <Button variant="solid-muted">
                  Enquire now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
