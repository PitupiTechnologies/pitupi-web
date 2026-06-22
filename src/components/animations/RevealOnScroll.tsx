import { m, useInView } from "framer-motion";
import { useRef } from "react";
import { useSafeMotion } from "../../hooks/useReducedMotion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useSafeMotion();

  const offsets = {
    up: { y: 40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  if (shouldReduce) return <div className={className}>{children}</div>;

  return (
    <m.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.8, delay }}
    >
      {children}
    </m.div>
  );
}
