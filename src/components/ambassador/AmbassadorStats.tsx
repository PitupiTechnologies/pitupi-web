import { RevealOnScroll } from "../animations/RevealOnScroll";

const stats = [
  {
    value: "1000+",
    label: "Active community members across campuses and cities",
  },
  {
    value: "100",
    label: "Universities and institutions represented nationwide",
  },
  {
    value: "₦50M+",
    label: "Paid out in referral bonuses to ambassadors",
  },
];

export function AmbassadorStats() {
  return (
    <section className="w-full bg-[#F8F5FF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[120px]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 lg:gap-16">
          {stats.map((stat, i) => (
            <RevealOnScroll key={i} direction="up" delay={i * 0.12} className="flex flex-col items-center text-center max-w-[280px]">
              <h2 className="text-5xl lg:text-[56px] font-bold text-[#130D13] tracking-[-0.04em] leading-[1.2] mb-4">
                {stat.value}
              </h2>
              <p className="text-lg font-medium text-[#4F464F] leading-[1.45]">
                {stat.label}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
