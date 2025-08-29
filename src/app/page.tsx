import Hero from "./components/sections/home/hero";
import LatestNews from "./components/sections/home/latest-news/latest-news";
import ServicesHub from "./components/sections/home/services/services-hub";
import TaxPlanning from "./components/sections/home/tax-planning";
import Testimonials from "./components/sections/home/testimonials/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />

      <ServicesHub />

      <TaxPlanning />

      {/* <Testimonials /> */}

      <LatestNews />
    </div>
  );
}
