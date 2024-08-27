"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimatedPath = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  const MobilePath = dynamic(() => import("./MobilePath"));
  const DesktopPath = dynamic(() => import("./DesktopPath"));

  useEffect(() => {
    if (width && width < 900) {
      setIsMobile(true);
    }
  }, [width]);

  return (
    <Box>
      {isMobile && <MobilePath />}
      {!isMobile && <DesktopPath />}
    </Box>
  );
};

export default AnimatedPath;
