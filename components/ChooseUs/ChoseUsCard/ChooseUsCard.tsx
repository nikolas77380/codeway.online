import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import style from "./../ChooseUs.style";

interface ChooseUsCardProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
  [key: string]: any;
}

const ChooseUsCard = ({
  IconComponent,
  title,
  description,
  ...rest
}: ChooseUsCardProps) => {
  return (
    <Paper sx={style.cardContainer} {...rest}>
      <Box sx={style.cardWrapper}>
        <Box sx={style.iconWrapper}>
          <IconComponent />
        </Box>
        <Box sx={style.cardTitle}>
          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {description}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ChooseUsCard;
