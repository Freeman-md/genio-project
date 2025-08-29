import Hero from "./components/sections/home/hero";
import LatestNews from "./components/sections/home/latest-news/latest-news";
import ServicesHub from "./components/sections/home/services/services-hub";
import TaxPlanning from "./components/sections/home/tax-planning";
import Testimonials from "./components/sections/home/testimonials/testimonials";

export default function Home() {
  return (
    <main className="relative">
      

      <Hero />

      <ServicesHub />

      <TaxPlanning />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-x-0 top-0 -z-10
          h-[clamp(720px,100svh,1100px)]
          bg-gradient
          mask-bottom-fade
        "
      />

      <Testimonials />

      <LatestNews />
    </main>
  );
}
