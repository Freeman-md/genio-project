import Hero from "./components/sections/home/hero";
import LatestNews from "./components/sections/home/latest-news/latest-news";
import TaxPlanning from "./components/sections/home/tax-planning";

export default function Home() {
  return (
    <div>
      <Hero />

      <TaxPlanning />

      <LatestNews />
    </div>
  );
}
