import { Box, Typography } from "@mui/material";

import dynamic from "next/dynamic";

import { classesData } from "@/src/mocks/AboutUsPage/dataPopularClasses";

import MotionBox from "@/src/components/customComponents/MotionBox";
import { scrollRightToLeft, textContainer } from "@/src/utils/motionVariants";

import TextAnimation from "./TextAnimation";

import { useTranslations } from "next-intl";
import style from "./OurPopularClasses.style";

const ScrollAnimationWrapper = dynamic(
  () =>
    import("@/src/hooks/useScrollAnimationWrapper").then(
      (mod) => mod.ScrollAnimationWrapper
    ),
  { ssr: false }
);

interface IPopularClasses {
  t: ReturnType<typeof useTranslations>;
}

const OurPopularClasses = ({ t }: IPopularClasses) => {
  const numRows = Math.ceil(classesData.length / 3);
  const rows = Array(Math.ceil(classesData.length / 3)).fill(null);

  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.popularClassesContainer}>
        <ScrollAnimationWrapper threshold={0.2}>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={textContainer()}
          >
            <TextAnimation text={t("popular-classes.title")} />
          </MotionBox>
        </ScrollAnimationWrapper>
        <Box sx={style.separatorShort} />
        {rows.map((_, rowIndex) => (
          <ScrollAnimationWrapper key={rowIndex} threshold={0.5}>
            <MotionBox
              initial="hidden"
              animate={"visible"}
              variants={scrollRightToLeft(rowIndex * 0.3, 1.6)}
            >
              <Box sx={style.classesRow}>
                {classesData
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((item, index) => {
                    const IconComponent = item.icon;
                    const isLeftBorder =
                      index === 0 || (index === 3 && rowIndex === 1);
                    const isBottomBorder = rowIndex < numRows - 1;

                    const leftBottomStyles = {
                      ...style.classesDataWrapper,
                      ...(isLeftBorder ? style.leftBorder : {}),
                      ...(isBottomBorder ? style.bottomBorder : {}),
                    };

                    const gradientStyles = {
                      ...style.gradientOverlay,
                      ...(isBottomBorder
                        ? style.gradientBottom
                        : style.gradientTop),
                    };

                    return (
                      <Box key={index} sx={leftBottomStyles}>
                        <Box
                          sx={style.iconContainer}
                          className="gradientOverlay"
                        >
                          <IconComponent />
                        </Box>
                        <Box sx={style.titleContainer}>
                          <Box
                            sx={style.highlightBar}
                            className="highlightBar"
                          />
                          <Typography
                            component="span"
                            sx={style.title}
                            className="title-hover"
                          >
                            {item.title}
                          </Typography>
                        </Box>
                        <Typography component="p" sx={style.description}>
                          {item.description}
                        </Typography>
                        <Box sx={gradientStyles} />
                      </Box>
                    );
                  })}
              </Box>
            </MotionBox>
          </ScrollAnimationWrapper>
        ))}
      </Box>
    </Box>
  );
};

export default OurPopularClasses;
