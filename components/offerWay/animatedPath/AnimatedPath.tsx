"use client";

import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedPath = () => {
  const MobilePath = dynamic(() => import("./MobilePath"), { ssr: false });
  const DesktopPath = dynamic(() => import("./DesktopPath"), { ssr: false });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return <Box>{isMobile ? <MobilePath /> : <DesktopPath />}</Box>;
};

export default AnimatedPath;
