'use client'

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationProps {
  threshold?: number;
  delay?: number;
  duration?: number;
}

export function useScrollAnimation({
  threshold = 0.5,
  delay = 0,
  duration = 1,
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
  }, [inView, controls, delay, duration]);

  return { ref, controls };
};