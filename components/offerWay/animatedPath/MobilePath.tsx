"use client";

import { Box } from "@mui/material";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const MobilePath = () => {
  const pathRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pathRef,
    offset: ["start 1.4", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const pointLength = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const smoothPathLength = useSpring(pathLength, {
    stiffness: 50,
    damping: 40,
  });

  const smoothPointLength = useSpring(pointLength, {
    stiffness: 50,
    damping: 40,
  });

  return (
    <Box
      ref={pathRef}
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: 1,
        height: 1,
        textAlign: "center",
        "& svg": {
          display: "inline-block",
          width: "100%",
          height: "100%",
        },
      }}
    >
      <svg
        className="mobilePath"
        viewBox="0 0 430 1200"
        fill="none"
        // preserveAspectRatio="xMidYMax "
        preserveAspectRatio="none"
      >
        <motion.path
          id="mainMobile"
          d="M36 98.1969V101.892C36 101.892 36.5 112.517 21 137C-12 179.498 62.1072 188.808 62.5 231.235C62.9356 278.281 38.2314 265.727 21 310C-10.5 421.789 358 370.277 377 484.838C396 599.398 9.81987e-06 568.448 10 743.984C20 919.52 270.5 688.5 203.5 1253.5"
          stroke="#A855F7"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ pathLength: smoothPathLength }}
        />
        <motion.path
          id="pointMobile"
          d="M58 28.6781C58 51.8562 37.5 65.633 36 96.1208C33 64.2472 13.5 52.3562 13.5 28.6781C13.5 5 33.5 4.50003 36 4.5C38.5 4.49997 58 5.5 58 28.6781Z"
          stroke="#A855F7"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ pathLength: smoothPointLength }}
        />
        <path
          id="centerPoint"
          d="M35.5 17.5C30.5 17.5 26 22 26 27.5C26 33 29 37.5 35.5 37.5C42 37.5 45 32.5 45 27.5C45 22.5 40.5 17.5 35.5 17.5Z"
          fill="#A855F7"
        />
        <path
          id="dashedMobile"
          d="M36 98.1969V101.892C36 101.892 36.5 112.517 21 137C-12 179.498 62.1072 188.808 62.5 231.235C62.9356 278.281 38.2314 265.727 21 310C-10.5 421.789 358 370.277 377 484.838C396 599.398 9.81987e-06 568.448 10 743.984C20 919.52 270.5 688.5 203.5 1253.5"
          stroke="#12141D"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeDasharray="4 8"
        />
        <motion.path
          id="rightMobile"
          d="M37 1.5C55.5 2 63.5 16.5 62.5 31C62 52.5 36 76 38.5 99.5C38.5 99.5 41.5 116 28 136.5C-5 178.998 70.2932 188.611 70.686 231.038C71.1215 278.084 46.4173 265.53 29.186 309.803C0.499663 415.5 364.099 357.5 385.186 484.641C405.314 606 4.49965 582 18.186 743.787C27 909.5 278.686 688.303 211.686 1253.3"
          stroke="#A855F7"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ pathLength: smoothPathLength }}
        />
        <motion.path
          id="leftMobile"
          d="M37 1.49997C37 1.49997 7.50001 0.999969 9.00001 32C10.3069 59.01 37.5 72.4999 32 104.5C32 104.5 31 114.607 14 136.5C-20.3198 180.698 54.8054 191.059 57 231C59.5 276.5 31.5 260 14 314C-18.7598 430.26 352.344 372.5 371.5 488C387.67 585.5 -8.4694 566 1.5 741C12.4379 933 261 695.5 194.5 1252.5"
          stroke="#A855F7"
          strokeWidth="2"
          strokeLinejoin="round"
          style={{ pathLength: smoothPathLength }}
        />
      </svg>
    </Box>
  );
};

export default MobilePath;
