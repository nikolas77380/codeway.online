'use client'

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationProps {
  x?: number;
  y?: number;
  threshold?: number;
  delay?: number;
  duration?: number;
}

export function useScrollAnimation({
  x = 0,
  y = 0,
  threshold = 0.1,
  delay,
  duration,
}: UseScrollAnimationProps) {

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        x: 0,
        opacity: 1,
        transition: { delay, duration },
      });
    }
  }, [inView, controls, delay, duration, x, y, threshold]);

  return { ref, controls };
};