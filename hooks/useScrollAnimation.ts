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
  animateValues?: { x?: number, y?: number, scale?: number, rotate?: number };
  exit?: { x?: number, y?: number, opacity?: number, scale?: number, rotate?: number };
}

export function useScrollAnimation({
  x = 0,
  y = 0,
  threshold = 0.5,
  delay = 0,
  duration = 1,
  animateValues = { x: 0, y: 0, scale: 1, rotate: 0 },
  exit = { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }
}: UseScrollAnimationProps) {

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        ...animateValues,
        ...exit,
        y: 0,
        x: 0,
        opacity: 1,
        transition: { delay, duration },
      });
    }
  }, [inView, controls, delay, duration, x, y, animateValues, exit]);

  return { ref, controls };
};