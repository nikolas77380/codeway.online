"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface IMotionDivByScroll {
  children: React.ReactNode;
}

const MotionDivByScroll = ({ children }: IMotionDivByScroll) => {
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start center", "end end"],
  });

  // const xTransform = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0 }}
      style={{ opacity: opacityTransform }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDivByScroll;
