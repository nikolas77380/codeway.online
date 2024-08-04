'use client'

import { Box } from "@mui/material";

import { cloneElement, ReactElement, useEffect } from "react";

import { useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

interface ScrollAnimationWrapperProps {
  children: ReactElement;
  threshold?: number;
}

export const ScrollAnimationWrapper = ({
  children,
  threshold = 0.1,
}: ScrollAnimationWrapperProps) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <Box ref={ref}>
      {cloneElement(children as ReactElement, { animate: controls })}
    </Box>
  );
};