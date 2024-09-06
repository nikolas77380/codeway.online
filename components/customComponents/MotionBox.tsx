'use client';

import React from "react";
import { motion, MotionProps } from "framer-motion";

interface MotionBoxProps extends MotionProps {
  children: React.ReactNode;
}

const MotionBox = ({ children, ...motionProps }: MotionBoxProps) => {
  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
};

export default MotionBox;