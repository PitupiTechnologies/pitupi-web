import { MessageCircle } from "lucide-react";
import { RevealText } from "../animations/RevealText";
import { RevealOnScroll } from "../animations/RevealOnScroll";
import { ParallaxLayer } from "../animations/ParallaxLayer";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSafeMotion } from "../../hooks/useReducedMotion";

const LEFT_TOKENS = [
  { name: "Tron", size: 90, top: "15%", left: "-2%", img: "/images/hero/252_833.png", speed: 0.1 },
  { name: "Xbox", size: 80, top: "25%", left: "12%", img: "/images/hero/252_849.png", speed: -0.15 },
  { name: "Solana", size: 86, top: "45%", left: "8%", img: "/images/hero/solana.svg", speed: 0.2 },
  { name: "Bitcoin", size: 96, bottom: "35%", left: "18%", img: "/images/hero/btc.png", speed: -0.1 },
  { name: "Base", size: 84, bottom: "25%", left: "2%", img: "/images/hero/base.svg", speed: 0.25 },
  { name: "Steam", size: 70, bottom: "12%", left: "15%", img: "/images/hero/252_842.png", speed: 0.05 },
];

const RIGHT_TOKENS = [
  { name: "BlueCircle", size: 80, top: "15%", right: "-2%", img: "/images/hero/usdt.png", speed: 0.1 }, // Adjust if this isn't the blue circle
  { name: "Amazon", size: 80, top: "22%", right: "18%", img: "/images/hero/252_858.png", speed: -0.2 },
  { name: "Play", size: 86, top: "45%", right: "12%", img: "/images/hero/252_864.png", speed: 0.15 },
  { name: "Binance", size: 96, bottom: "40%", right: "22%", img: "/images/hero/bnb.svg", speed: -0.1 },
  { name: "Polygon", size: 84, bottom: "30%", right: "5%", img: "/images/hero/matic.png", speed: 0.25 },
  { name: "Apple", size: 70, bottom: "15%", right: "18%", img: "/images/hero/252_833.png", speed: 0.12 }, // Using 833 as placeholder if Apple isn't there
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useSafeMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-pitupu-purple-500 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] pt-16 pb-[120px] min-h-[700px] flex flex-col items-center justify-center relative">

        {/* Floating Token Circles */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {LEFT_TOKENS.map((token, i) => (
            <ParallaxLayer key={token.name} speed={token.speed} className="absolute inset-0">
              <RevealOnScroll direction="left" delay={0.2 + i * 0.1} className="absolute inset-0">
                <div
                  className="absolute flex items-center justify-center shadow-2xl rounded-full"
                  style={{
                    width: token.size,
                    height: token.size,
                    top: token.top,
                    left: token.left,
                    bottom: token.bottom,
                  }}
                >
                  <img src={token.img} alt={token.name} className="w-full h-full object-contain" />
                </div>
              </RevealOnScroll>
            </ParallaxLayer>
          ))}

          {RIGHT_TOKENS.map((token, i) => (
            <ParallaxLayer key={token.name} speed={token.speed} className="absolute inset-0">
              <RevealOnScroll direction="right" delay={0.2 + i * 0.1} className="absolute inset-0">
                <div
                  className="absolute flex items-center justify-center shadow-2xl rounded-full"
                  style={{
                    width: token.size,
                    height: token.size,
                    top: token.top,
                    right: token.right,
                    bottom: token.bottom,
                  }}
                >
                  <img src={token.img} alt={token.name} className="w-full h-full object-contain" />
                </div>
              </RevealOnScroll>
            </ParallaxLayer>
          ))}
        </div>

        {/* Content */}
        <m.div 
          className="relative z-10 flex flex-col items-center text-center max-w-[750px] gap-6"
          style={{ y: shouldReduce ? 0 : contentY, opacity: shouldReduce ? 1 : contentOpacity }}
        >
          <RevealText
            text="No Apps, No Insufficient Storage Wahala"
            as="h1"
            className="text-4xl sm:text-5xl md:text-[64px] font-extrabold text-white leading-[1.15] tracking-[-0.04em] justify-center"
            delay={0.2}
          />

          <RevealOnScroll direction="up" delay={0.4}>
            <p className="text-lg md:text-xl font-medium text-violet-50 max-w-[500px]">
              Works faster than your everyday bank!
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.5}>
            <a
              href="#"
              className="mt-4 bg-pitupi-gold-500 text-violet-800 font-semibold text-base h-[60px] px-8 rounded-[16px] flex items-center gap-3 hover:brightness-105 transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              <span>Get Started on WhatsApp</span>
            </a>
          </RevealOnScroll>
        </m.div>
      </div>
    </section>
  );
}
