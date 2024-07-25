import React from "react";

import { Box, Typography } from "@mui/material";

import { classesData } from "@/src/mocks/AboutUsPage/dataPopularClasses";

import style from './OurPopularClasses.style';

const OurPopularClasses = () => {

  const numRows = Math.ceil(classesData.length / 3);

  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.popularClassesContainer}>
        <Typography variant="h3" component='span'>
          Our Popular Classes
        </Typography>
        <Box sx={style.separatorShort} />
        {Array(3).fill(null).map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <Box sx={style.classesDataContainerFirst}>
              {classesData.slice(rowIndex * 3, rowIndex * 3 + 3).map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Box sx={style.classesDataWrapper} key={index}>
                    <IconComponent />
                    <Typography component='span'>
                      {item.title}
                    </Typography>
                    <Typography component='p'>
                      {item.description}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            {rowIndex < numRows - 1 && <Box sx={style.separatorLong} />}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default OurPopularClasses;