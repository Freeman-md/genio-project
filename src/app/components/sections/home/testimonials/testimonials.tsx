import Image from "next/image";
import TestimonialList from "./testimonial-slider";

type Testimonial = {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Dave Hughes",
    date: "—",
    rating: 5,
    text: "Jeremy was superb. He explained exactly what his services offered and listened to any questions I had. Set my worries at ease. I look forward to the future under Genio’s.",
  },
  {
    id: "testimonial-2",
    name: "Leanne",
    date: "25/03/2024",
    rating: 5,
    text: "Jeremy and his staff are very professional; easy communication, always available and willing to go the extra mile to help. Running a business is no easy task but with Genio Accountants on your side it makes life so much easier.",
  },
  {
    id: "testimonial-3",
    name: "Sophie Turner",
    date: "02/04/2024",
    rating: 5,
    text: "Swift advice and clear planning. Our finance ops feel organised for the first time in years.",
  },
  {
    id: "testimonial-4",
    name: "James Porter",
    date: "18/04/2024",
    rating: 5,
    text: "Great experience from start to finish. Practical guidance that saved us time and tax.",
  },
  {
    id: "testimonial-5",
    name: "Mark Crowley",
    date: "15/02/2024",
    rating: 5,
    text: "Jeremy has been doing my partners accounts for over 3 years now and we are very happy with the top level of service he provides.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 bg-gradient" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 edge-fade" />

      <div className="container relative z-10 py-16 md:py-24">
        <h2 className="text-brand-gradient text-center text-4xl md:text-5xl font-bold">
          Customer testimonials
        </h2>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/svgs/star.svg"
                alt=""
                width={40}
                height={40}
              />
            ))}
          </div>
          <p className="text-xl text-brand-gradient">Excellent</p>
          <p className="text-sm text-center">
            Based on 125 reviews
            <br />
            Google Maps
          </p>
        </div>

        <TestimonialList items={TESTIMONIALS} />
      </div>
    </section>
  );
}
