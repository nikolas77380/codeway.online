import { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import style from "./CountdownTimer.style";

interface CountdownTimerProps {
  endDate: Date;
  onDiscountChange: (isActive: boolean) => void;
}

export const CountdownTimer = ({ endDate, onDiscountChange }: CountdownTimerProps) => {

  const calculateTimeLeft = () => Math.floor((endDate.getTime() - Date.now()) / 1000);

  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft());

  useEffect(() => {
    const storedDiscountStatus = localStorage.getItem('discount');
    
    if (storedDiscountStatus === 'off') {
      onDiscountChange(false);
    } else if (storedDiscountStatus === 'on') {
      onDiscountChange(true);
    } else {

      const isActive = timeLeft > 0;
      onDiscountChange(isActive);
      localStorage.setItem('discount', isActive ? 'on' : 'off');
    }
  }, [onDiscountChange, timeLeft]);

  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, onDiscountChange]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeout(() => {
        localStorage.setItem('discount', 'off');
        onDiscountChange(false);
      }, 0);
    } else {
      localStorage.setItem('discount', 'on');
      onDiscountChange(true);
    }
  }, [timeLeft, onDiscountChange]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hrs = Math.floor((seconds % (3600 * 24)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}д ${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Box sx={style.countdownTimerContainer}>
        <Typography variant="body1" component="span">
          {formatTime(timeLeft)}
        </Typography>
    </Box>
  );
}