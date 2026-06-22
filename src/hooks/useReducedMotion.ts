import { useReducedMotion } from "framer-motion";

export function useSafeMotion() {
  const shouldReduce = useReducedMotion();
  return shouldReduce;
}
