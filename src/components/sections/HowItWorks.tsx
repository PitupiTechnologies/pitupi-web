import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const STEPS = [
  {
    icon: "/images/how-it-works/say-hi-icon.svg",
    cardBg: "bg-[rgba(251,207,194,0.2)]",
    title: "Say Hi.",
    description:
      "Message our official number to instantly create your multi-chain wallet. No seed phrases to write down.",
  },
  {
    icon: "/images/how-it-works/secure-icon.svg",
    cardBg: "bg-[rgba(230,230,241,0.2)]",
    title: "Secure Your Bag.",
    description:
      "Set a private 4 - digit PIN via our secure in-app popup. Your keys, your control.",
  },
  {
    icon: "/images/how-it-works/transact-icon.svg",
    cardBg: "bg-[rgba(253,238,176,0.2)]",
    title: "Transact in Seconds.",
    description: null, // custom render below
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[120px] flex flex-col items-center">
        <RevealText
          text="How it Works"
          as="h2"
          className="text-4xl md:text-[48px] font-bold text-violet-800 text-center tracking-[-0.04em] leading-[1.2] mb-16 justify-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {STEPS.map((step, i) => {
            return (
              <RevealOnScroll key={i} direction="up" delay={i * 0.1}>
                <div className={`${step.cardBg} rounded-3xl p-8 flex flex-col gap-10 h-[340px] hover:-translate-y-1 transition-transform duration-300 w-full`}>
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-start justify-start">
                    <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
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
