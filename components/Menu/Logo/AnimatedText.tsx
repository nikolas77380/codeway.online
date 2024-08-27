import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import { motion } from "framer-motion";

import style from "../Menu.style";

export const AnimatedText = () => {
  const text = "Codeway";
  const [displayText, setDisplayText] = useState<string>("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
  
    const typeText = () => {
      if (currentIndex < text.length) {
        const currentChar = text[currentIndex];
        if (currentChar !== undefined) {
          setDisplayText(prev => (prev || "") + currentChar);
        }
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    };
  
    const intervalId = setInterval(typeText, 200);

    const cursorBlinking = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
  
    return () => {
      clearInterval(intervalId);
      clearInterval(cursorBlinking);
    };
  }, [text]);

  return (
    <Typography sx={style.logo} component={motion.div}>
      {displayText}
      <Typography
        component="span"
        className="cursor-blink"
      >
        {showCursor ? "_" : ""}
      </Typography>
    </Typography>
  );
};