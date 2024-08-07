'use client'

import { Box } from "@mui/material";

import React, { Children, cloneElement, isValidElement, ReactNode, useEffect } from "react";

import { AnimationControls, MotionProps, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

interface ScrollAnimationWrapperProps {
  children?: ReactNode;
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

  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const childWithProps = Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(child, {
          animate: controls,
          initial: 'hidden',
        } as MotionProps)
      : child
  );

  return (
    <Box ref={ref}>
      {childWithProps}
    </Box>
  );
};