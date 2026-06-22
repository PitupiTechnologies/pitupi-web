import { Zap } from "lucide-react";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { InstantTopupsPhysics } from "./InstantTopups";

export function Features() {
  return (
    <section id="features" className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[120px] flex flex-col items-center">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <RevealText
            text="Complete Financial Utility"
            as="h2"
            className="text-4xl md:text-[48px] font-bold text-violet-800 text-center tracking-[-0.04em] leading-[1.2] justify-center"
          />
        </div>

        <div className="flex flex-col gap-8 w-full max-w-[920px]">
          {/* Card 1: Crypto Your Way — full width, horizontal */}
          <RevealOnScroll direction="up" delay={0}>
            <div className="bg-pitupu-purple-50 rounded-[22px] p-8 flex flex-col lg:flex-row gap-8 items-stretch min-h-[300px]">
              <div className="flex-1 flex flex-col gap-4 justify-center max-w-[296px]">
                <h3 className="text-[28px] font-semibold text-violet-500 tracking-[-0.02em] leading-[1.2]">
                  Crypto Your Way
                </h3>
                <p className="text-lg font-medium text-violet-300 leading-[1.45]">
                  Buy and sell USDT, BTC, and more with Naira-first pricing and
                  instant bank payouts. No hidden fees, no delays.
                </p>
              </div>
              <div className="flex-[1.5] w-full bg-white/60 rounded-2xl border border-white/80 flex items-center justify-center min-h-[200px] overflow-hidden">
                <img src="/images/features/exchange.png" alt="Crypto Exchange" className="w-full h-full object-cover" />
              </div>
            </div>
          </RevealOnScroll>

          {/* Cards 2 & 3: side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Instant Top-ups */}
            <RevealOnScroll direction="left" delay={0.1}>
              <InstantTopupsPhysics />
            </RevealOnScroll>

            {/* No Gas Fees */}
            <RevealOnScroll direction="right" delay={0.1}>
            <div className="bg-pitupu-purple-50 rounded-[32px] p-8 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] font-semibold text-violet-500 tracking-[-0.02em] leading-[1.2]">
                  No Gas Fees
                </h3>
                <p className="text-lg font-medium text-violet-300 leading-[1.45]">
                  Forget about holding BNB or ETH for fees. We abstract the
                  complexity so you only pay for what you send.
                </p>
              </div>
              {/* Stacked gas cards */}
              <div className="flex-1 w-full bg-white rounded-[32px] p-6 relative flex flex-col items-center justify-center gap-[-8px] min-h-[280px]">
                {[
                  {
                    bg: "bg-light-purple-50",
                    text: "text-violet-500",
                    shadow:
                      "shadow-[0_26px_52px_0px_rgba(0,0,0,0.18)]",
                    rotate: "",
                    width: "w-[208px]",
                  },
                  {
                    bg: "bg-light-purple-600",
                    text: "text-pitupu-purple-50",
                    shadow:
                      "shadow-[0_25px_50px_0px_rgba(0,0,0,0.18)]",
                    rotate: "",
                    width: "w-[234px]",
                  },
                  {
                    bg: "bg-light-purple-900",
                    text: "text-pitupu-purple-50",
                    shadow: "shadow-[0_24px_48px_0px_rgba(0,0,0,0.18)]",
                    rotate: "",
                    width: "w-[262px]",
                  },
                ].map((card, i) => (
                  <RevealOnScroll key={i} direction="up" delay={0.2 + i * 0.15} className="-mt-2">
                    <div
                      className={`${card.width} ${card.bg} ${card.shadow} rounded-xl px-4 py-3 flex items-center justify-between`}
                    >
                      <div className="flex items-center gap-2">
                        <Zap className={card.text} size={16} />
                        <span
                          className={`font-semibold text-sm ${card.text}`}
                        >
                          Gas Fee
                        </span>
                      </div>
                      <span
                        className={`font-semibold text-sm ${card.text}`}
                      >
                        $0.0
                      </span>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
            </RevealOnScroll>
          </div>

          {/* Card 4: Gift Card Exchange — full width, horizontal */}
          <RevealOnScroll direction="up" delay={0.15}>
          <div className="bg-pitupu-purple-50 rounded-[22px] p-8 flex flex-col lg:flex-row gap-8 md:gap-32 items-stretch min-h-[300px]">
            <div className="flex-1 flex flex-col gap-4 justify-center max-w-[296px]">
              <h3 className="text-[28px] font-semibold text-violet-500 tracking-[-0.02em] leading-[1.2]">
                Automated Gift Card Exchange
              </h3>
              <p className="text-lg font-medium text-violet-300 leading-[1.45]">
                Buy | Sell your favourites giftcards seamlessly. Every giftcard
                you sell to us is reviewed by a real person to ensure your asset
                safety.
              </p>
            </div>
            <div className="w-full md:w-[318px]! relative rounded-2xl flex items-center justify-center overflow-hidden">
              <img src="/images/features/giftcard.png" alt="Gift Card Exchange" className="w-full" />
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
