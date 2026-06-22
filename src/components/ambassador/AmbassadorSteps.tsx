import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

const steps = [
  {
    number: "1",
    title: "Apply",
    description: "Fill out a quick form\non WhatsApp",
  },
  {
    number: "2",
    title: "Get Your Link",
    description: "Receive your unique\nreferral link instantly",
  },
  {
    number: "3",
    title: "Share & Earn",
    description: "Post it everywhere (Twitter,\nIG, WhatsApp status)",
  },
  {
    number: "4",
    title: "Track & Withdraw",
    description: "Watch earnings grow,\nwithdraw anytime",
  },
];

export function AmbassadorSteps() {
  return (
    <section className="w-full bg-[#FEF9E6]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[64px] pb-[120px] flex flex-col items-center">
        <RevealText
          text="How it Works"
          as="h2"
          className="text-4xl md:text-[40px] font-bold text-[#333333] tracking-[-0.04em] leading-[1.2] mb-16 text-center justify-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {steps.map((step, i) => (
            <RevealOnScroll key={i} direction="up" delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-4 h-full">
                <div className="w-[68px] h-[68px] rounded-full bg-[#F9C701] flex items-center justify-center shrink-0">
                  <span className="text-[24px] font-bold text-[#231823] leading-none">
                    {step.number}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1.5 items-center">
                  <h3 className="text-[16px] font-bold text-[#333333] leading-[1.45]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-normal text-[#666666] leading-[1.6] max-w-[190px] whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
