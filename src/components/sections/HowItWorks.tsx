import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const STEPS = [
  {
    icon: "/images/how-it-works/say-hi-icon.svg",
    cardBg:
      "bg-[#FBCFC2] bg-opacity-20 backdrop-blur-sm border border-white/50",
    title: "Say Hi.",
    description:
      "Message our official number to instantly create your multi-chain wallet. No seed phrases to write down.",
  },
  {
    icon: "/images/how-it-works/secure-icon.svg",
    cardBg:
      "bg-[#E6E6F1] bg-opacity-20 backdrop-blur-sm border border-white/50",
    title: "Secure Your Bag.",
    description:
      "Set a private 4 - digit PIN via our secure in-app popup. Your keys, your control.",
  },
  {
    icon: "/images/how-it-works/transact-icon.svg",
    cardBg:
      "bg-[#FDEEB0] bg-opacity-20 backdrop-blur-sm border border-white/50",
    title: "Transact in Seconds.",
    description: null, // custom render below
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white relative z-10">
      <div className="max-w-[1440px] mx-auto py-[120px] flex flex-col items-center">
        <div className="px-6 lg:px-[120px] w-full flex justify-center sticky top-[60px] md:static z-10 bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none pb-4 md:pb-0 mb-8 md:mb-16">
          <RevealText
            text="How it Works"
            as="h2"
            className="text-4xl md:text-[48px] font-bold text-violet-800 text-center tracking-[-0.04em] leading-[1.2] justify-center"
          />
        </div>

        {/* Mobile: Sticky vertical stack (gap-32 for scroll room) | Desktop: Grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-32 md:gap-8 px-6 lg:px-[120px] pb-8 w-full relative">
          {STEPS.map((step, i) => {
            return (
              <RevealOnScroll
                key={i}
                direction="up"
                delay={i * 0.1}
                className="sticky md:static w-full shadow-lg md:shadow-none rounded-3xl"
                style={{ top: `calc(160px + ${i * 24}px)` }}
              >
                <div
                  className={`${step.cardBg} rounded-3xl p-8 flex flex-col gap-10 min-h-[340px] transition-transform duration-300 w-full`}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-start justify-start shrink-0">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[28px] font-semibold text-violet-800 tracking-[-0.01em] leading-tight">
                      {step.title}
                    </h3>
                    {step.description ? (
                      <p className="text-lg font-medium text-violet-300 leading-[1.45]">
                        {step.description}
                      </p>
                    ) : (
                      <p className="text-lg font-medium text-violet-400 leading-[1.45]">
                        Type what you want in plain English or Pidgin.{" "}
                        <span className="font-bold text-violet-300">
                          "Abeg buy me 100k USDT"
                        </span>{" "}
                        — we handle the rest.
                      </p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
