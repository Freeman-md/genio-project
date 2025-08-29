import NewsList from "./news-list";

type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
};

const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Tax-free child care",
    date: "21/03/2024",
    excerpt:
      "HMRC is reminding parents that they may be eligible for Tax-Free Childcare (TFC) to help pay for Easter school holidays …",
    image: "/images/news/1.jpg",
    href: "#",
  },
  {
    id: "2",
    title: "Invest and save tax",
    date: "21/03/2024",
    excerpt:
      "The Annual Investment Allowance (AIA) is a generous tax relief that allows for the total amount of qualifying …",
    image: "/images/news/2.jpg",
    href: "#",
  },
  {
    id: "3",
    title: "Check your National Insurance record",
    date: "21/03/2024",
    excerpt:
      "There is an online service available on HMRC to check your National Insurance Contributions (NIC) record online. The …",
    image: "/images/news/3.jpg",
    href: "#",
  },
  {
    id: "4",
    title: "Workplace pension responsibilities",
    date: "21/03/2024",
    excerpt:
      "Automatic enrolment for workplace pensions has helped many employees make provision for their retirement, with employers …",
    image: "/images/news/4.jpg",
    href: "#",
  },
];

export default function LatestNews() {
  return (
    <section className="relative isolate">
      <div className="container !-mt-10 pb-16 md:pb-24">
        <h2 className="text-brand-gradient text-center text-4xl md:text-5xl">
          Latest news
        </h2>

        <NewsList items={NEWS} />
      </div>
    </section>
  );
}
