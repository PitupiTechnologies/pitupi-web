import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { ParallaxLayer } from "../animations/ParallaxLayer";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSafeMotion } from "../../hooks/useReducedMotion";

export function AmbassadorHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useSafeMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={containerRef} className="w-full bg-[#3C003D] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-[120px] pb-0 flex flex-col items-center text-center">
        {/* Text Content */}
        <m.div 
          className="flex flex-col items-center gap-8 max-w-[800px] z-10"
          style={{ y: shouldReduce ? 0 : contentY, opacity: shouldReduce ? 1 : contentOpacity }}
        >
          <div className="flex flex-col gap-4">
            <RevealText
              text="Join Nigeria's Top Crypto Ambassadors"
              as="h1"
              delay={0.2}
              className="text-5xl md:text-[64px] font-extrabold text-[#ECE6EC] tracking-[-0.04em] leading-[1.2] justify-center text-center"
            />
            <RevealOnScroll direction="up" delay={0.4}>
              <p className="text-lg md:text-[18px] font-medium text-[#C3B0C3] leading-[1.45] max-w-[624px] mx-auto">
                Earn while you empower. Get rewarded for spreading financial freedom in your community through WhatsApp.
              </p>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll direction="up" delay={0.5}>
            <button className="bg-[#F9C701] text-[#130D13] font-semibold text-lg px-8 py-4 rounded-2xl hover:brightness-105 transition-all shadow-sm">
              Apply Now
            </button>
          </RevealOnScroll>
        </m.div>

        {/* Hero Image / Graphic Placeholder */}
        <RevealOnScroll direction="up" delay={0.6} className="w-full my-20 mb-32 max-w-[1200px] relative z-10">
          <m.div 
            style={{ y: shouldReduce ? 0 : imageY }}
            className="w-full bg-[#1A0B2E]/20 flex items-center justify-center overflow-hidden"
          >
            <img src="/images/ambassadors/hero.png" alt="Ambassadors Hero" className="w-full h-full object-cover object-top" />
          </m.div>
        </RevealOnScroll>

        {/* Background glow effects */}
        <ParallaxLayer speed={0.3} className="absolute top-[20%] left-[10%] w-[470px] h-[450px] bg-[#FF88DC]/10 blur-[64px] rounded-full pointer-events-none" />
        <ParallaxLayer speed={0.4} className="absolute top-[25%] right-[10%] w-[470px] h-[450px] bg-[#FF88DC]/10 blur-[64px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
