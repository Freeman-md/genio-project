import Button from "@/app/components/ui/button";

export default function Hero() {
  return (
    <section className="relative isolate flex items-center justify-center text-center min-h-screen">
      <div className="absolute inset-0 bg-gradient" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 edge-fade" />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-24 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-[980px]">
          <h1 className="text-white font-bold leading-[1.1] text-[40px] md:text-[56px] lg:text-[64px] tracking-tight">
            Cracking Complexity:
          </h1>

          <h2 className="mt-2 text-brand-gradient font-bold leading-[1.1] text-[36px] md:text-[48px] lg:text-[64px] tracking-tight">
            Unravelling Financial Puzzles
          </h2>

          <p className="mx-auto mt-7 text-white/90 text-[18px] md:text-[22px] font-normal leading-[1.2] text-center">
            Whether you&apos;re a small startup, a growing SME, or a seasoned
            entrepreneur, we&apos;ve got you covered with a range of
            comprehensive accounting services.
          </p>

          <div className="mt-12 flex items-center justify-center gap-4">
            <Button variant="solid-white">Contact Us</Button>
            <Button variant="outline-white">Factsheets</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
