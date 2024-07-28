import React from "react";

import { Box, Typography } from "@mui/material";

import { classesData } from "@/src/mocks/AboutUsPage/dataPopularClasses";

import style from './OurPopularClasses.style';

const OurPopularClasses = () => {

  const numRows = Math.ceil(classesData.length / 3);
  const rows = Array(Math.ceil(classesData.length / 3)).fill(null);

  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.popularClassesContainer}>
        <Typography variant="h3" component='span'>
          Our Popular Classes
        </Typography>
        <Box sx={style.separatorShort} />
        {rows.map((_, rowIndex) => (
          <Box key={rowIndex} sx={style.classesRow}>
            {classesData.slice(rowIndex * 3, rowIndex * 3 + 3).map((item, index) => {
              const IconComponent = item.icon;
              const isLeftBorder = index === 0 || (index === 3 && rowIndex === 1);
              const isBottomBorder = rowIndex < numRows - 1;

              const leftBottomStyles = {
                ...style.classesDataWrapper,
                ...(isLeftBorder ? style.leftBorder : {}),
                ...(isBottomBorder ? style.bottomBorder : {}),
              };

              const gradientStyles = {
                ...style.gradientOverlay,
                ...(isBottomBorder ? style.gradientBottom : style.gradientTop),
              };

              return (
                <Box
                  key={index}
                  sx={leftBottomStyles}
                >
                  <Box sx={style.iconContainer} className="gradientOverlay">
                    <IconComponent />
                  </Box>
                  <Box sx={style.titleContainer}>
                    <Box sx={style.highlightBar} className="highlightBar" />
                    <Typography component='span' sx={style.title} className="title-hover">
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography component='p' sx={style.description}>
                    {item.description}
                  </Typography>
                  <Box
                    sx={gradientStyles}
                  />
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurPopularClasses;