import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";

export function AmbassadorCTA() {
  return (
    <section className="w-full bg-[#3C003D] py-[100px] flex flex-col items-center text-center px-6">
      <RevealText
        text="Ready to Make an Impact?"
        as="h2"
        className="text-4xl md:text-[44px] font-semibold text-white tracking-[-0.02em] leading-[1.2] mb-3 justify-center text-center"
      />
      <RevealOnScroll direction="up" delay={0.2}>
        <p className="text-[16px] md:text-[18px] font-normal text-[#B8A4B8] leading-[1.45] mb-10">
          Join 180+ ambassadors already earning with Pitupi
        </p>
      </RevealOnScroll>
      
      <RevealOnScroll direction="up" delay={0.3}>
        <button className="bg-[#F9C701] text-[#111111] font-bold text-[16px] px-10 py-4 rounded-[12px] hover:brightness-105 transition-all shadow-sm">
          Apply Now
        </button>
      </RevealOnScroll>
    </section>
  );
}
