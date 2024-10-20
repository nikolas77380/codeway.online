import { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import style from "./CountdownTimer.style";

interface CountdownTimerProps {
  endDate: string;
}

const CountdownTimer = ({ endDate }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const endTime = new Date(endDate).getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeRemaining(
          `${days == 0 ? "" : `${days}д`} ${hours
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );
      }
    },);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <Box sx={style.countdownTimerContainer}>
      <Typography variant="body1" component="span">
        {timeRemaining}
      </Typography>
    </Box>
  );
};

export default CountdownTimer;
