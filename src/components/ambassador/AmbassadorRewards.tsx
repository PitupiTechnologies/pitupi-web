import { DollarSign, TrendingUp, Gift } from "lucide-react";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const rewards = [
  {
    icon: <DollarSign size={20} className="text-white" strokeWidth={2.5} />,
    title: "Instant Payouts",
    description: "Get paid ₦200 instantly when someone signs up with your link",
  },
  {
    icon: <TrendingUp size={20} className="text-white" strokeWidth={2.5} />,
    title: "Recurring Commission",
    description: "Earn a percent as tokens on every transaction your referral makes for the first 3 months",
  },
  {
    icon: <Gift size={20} className="text-white" strokeWidth={2.5} />,
    title: "Exclusive Perks",
    description: "Premium rates, early feature access, and quarterly bonuses",
  },
];

export function AmbassadorRewards() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[120px] flex flex-col items-center">
        {/* Header */}
        <RevealOnScroll direction="up" className="flex flex-col items-center text-center gap-3 mb-16">
          <RevealText
            text="What's in it for you"
            as="h2"
            className="text-4xl md:text-[44px] font-bold text-[#111111] tracking-[-0.04em] leading-[1.2] justify-center"
          />
          <p className="text-[16px] md:text-[18px] font-medium text-[#666666] leading-[1.5]">
            Real rewards for real impact
          </p>
        </RevealOnScroll>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
          {/* Left Column - List */}
          <div className="flex flex-col gap-10 w-full lg:max-w-[383px] shrink-0">
            {rewards.map((reward, i) => (
              <RevealOnScroll key={i} direction="left" delay={i * 0.1} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#8F0091] flex items-center justify-center shrink-0 shadow-sm">
                  {reward.icon}
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <h3 className="text-[18px] font-bold text-[#111111] leading-tight">
                    {reward.title}
                  </h3>
                  <p className="text-[15px] font-normal text-[#666666] leading-relaxed">
                    {reward.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Right Column - Image */}
          <RevealOnScroll direction="right" delay={0.2} className="w-full lg:max-w-[791px]">
            <div className="w-full h-[400px] lg:h-[440px] rounded-[32px] overflow-hidden relative shadow-lg">
              <img 
                src="/images/ambassadors/whatsinIt.png" 
                alt="Ambassador Rewards" 
                className="w-full h-full object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
