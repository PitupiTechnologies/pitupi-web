import { m, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSafeMotion } from "../../hooks/useReducedMotion";

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface StickyFeaturesProps {
  features: Feature[];
  heading?: string;
  className?: string;
}

export function StickyFeatures({ features, heading, className }: StickyFeaturesProps) {
  const containerRef = useRef(null);
  const shouldReduce = useSafeMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const index = Math.min(
        Math.floor(v * features.length),
        features.length - 1
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress, features.length]);

  if (shouldReduce) {
    return (
      <section className={`w-full py-[120px] ${className || ""}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          {heading && <h2 className="text-4xl md:text-[48px] font-bold text-[#1A0B2E] tracking-[-0.04em] leading-[1.2] mb-16 text-center">{heading}</h2>}
          <div className="flex flex-col gap-12">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col gap-4">
                {f.icon && <div className="text-pitupu-purple-500">{f.icon}</div>}
                <h3 className="text-2xl font-semibold">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className={className} style={{ minHeight: `${features.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center bg-[#F8F5FF]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-[1440px] mx-auto px-6 lg:px-[120px]">

          {/* Left: heading + progress */}
          <div className="flex flex-col justify-center gap-8">
            {heading && <h2 className="text-4xl md:text-[48px] font-bold text-[#1A0B2E] tracking-[-0.04em] leading-[1.2]">{heading}</h2>}
            
            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => {}}
                  className={`text-left text-lg transition-colors duration-300 ${
                    i === activeIndex ? "text-pitupu-purple-500 font-semibold" : "text-gray-400 font-medium"
                  }`}
                >
                  {f.title}
                </button>
              ))}
            </div>

            {/* Scroll progress bar */}
            <div className="w-1 h-[200px] bg-gray-200 relative self-start ml-2 mt-4 rounded-full overflow-hidden">
              <m.div
                className="absolute top-0 left-0 w-full bg-pitupu-purple-500 origin-top rounded-full h-full"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
          </div>

          {/* Right: active feature panel */}
          <div className="flex items-center h-[500px]">
            <AnimatePresence mode="wait">
              <m.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-[32px] bg-white border border-gray-100 p-12 w-full h-full shadow-lg flex flex-col justify-center"
              >
                {features[activeIndex].icon && (
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-[#F8F5FF] flex items-center justify-center text-pitupu-purple-500">
                    {features[activeIndex].icon}
                  </div>
                )}
                <h3 className="text-[32px] font-bold text-[#1A0B2E] mb-4 leading-[1.2]">
                  {features[activeIndex].title}
                </h3>
                <p className="text-[18px] text-[#666666] leading-[1.6]">
                  {features[activeIndex].description}
                </p>
              </m.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
