import { Check } from "lucide-react";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const audiences = [
  {
    title: "Content Creators",
    description: "Turn your audience into income. Perfect for YouTubers, TikTokers, and Instagram influencers.",
  },
  {
    title: "Community Leaders",
    description: "Church groups, student unions, professional networks—empower your people.",
  },
  {
    title: "Anyone with a Network",
    description: "If you know people who need crypto, you can earn. It's that simple.",
  },
];

export function AmbassadorAudience() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pb-[240px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <RevealText
            text="Who Should Join?"
            as="h2"
            className="text-4xl md:text-[48px] font-bold text-[#1A0B2E] tracking-[-0.04em] leading-[1.2] justify-center text-center"
          />
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="text-lg font-normal text-[#666666] leading-[1.45]">
              Real rewards for real impact
            </p>
          </RevealOnScroll>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Image Placeholder */}
          <RevealOnScroll direction="left" delay={0.1} className="w-full lg:max-w-[791px]">
            <div className="w-full h-[400px] lg:h-[440px] bg-[#F5F5F5] rounded-[32px] overflow-hidden flex items-center justify-center">
              <img src="/images/ambassadors/whoshouldjoin.png" alt="Who should join" className="w-full h-full object-cover" />
            </div>
          </RevealOnScroll>

          {/* List */}
          <div className="flex flex-col gap-8 w-full max-w-[383px] shrink-0">
            {audiences.map((audience, i) => (
              <RevealOnScroll key={i} direction="right" delay={i * 0.1} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3C003D] flex items-center justify-center shrink-0">
                  <Check className="text-white" size={24} />
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <h3 className="text-xl font-semibold text-[#130D13] leading-tight">
                    {audience.title}
                  </h3>
                  <p className="text-base font-normal text-[#6C646C] leading-[1.5]">
                    {audience.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
