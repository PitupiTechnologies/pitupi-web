import { m, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { useSafeMotion } from "../../hooks/useReducedMotion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
};

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.6 },
  },
};

export function RevealText({ text, className, delay = 0, as = "h1" }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useSafeMotion();
  const Tag = as as any;

  if (shouldReduce) return <Tag className={className}>{text}</Tag>;

  return (
    <m.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", gap: "0 0.25em" }}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <m.span variants={wordVariants} style={{ display: "inline-block" }}>
            {word}
          </m.span>
        </span>
      ))}
    </m.div>
  );
}
