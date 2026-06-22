import { DollarSign, Gift, Star } from "lucide-react";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const benefits = [
  {
    icon: <DollarSign size={32} className="text-[#8F0091]" strokeWidth={2} />,
    title: "No Caps",
    description: "Unlimited earning potential; sky's the limit",
  },
  {
    icon: <Gift size={32} className="text-[#8F0091]" strokeWidth={2} />,
    title: "Quarterly Bonuses",
    description: "Top performers get extra cash rewards",
  },
  {
    icon: <Star size={32} className="text-[#8F0091]" strokeWidth={2} />,
    title: "VIP Support",
    description: "Direct line to our team, priority help",
  },
];

export function AmbassadorBenefits() {
  return (
    <section className="w-full bg-[#8F0091]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[100px] flex flex-col items-center">
        {/* Header */}
        <RevealText
          text="What do you get as an Ambassador?"
          as="h2"
          className="text-4xl md:text-[40px] font-bold text-white tracking-[-0.04em] justify-center leading-[1.2] text-center mb-16 max-w-[500px]"
        />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {benefits.map((benefit, i) => (
            <RevealOnScroll key={i} direction="up" delay={i * 0.1}>
              <div className="bg-white rounded-[16px] p-8 flex flex-col items-start gap-4 h-full shadow-sm">
                <div className="mb-2">
                  {benefit.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[#111111] leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-[14px] font-normal text-[#666666] leading-[1.5]">
                  {benefit.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
