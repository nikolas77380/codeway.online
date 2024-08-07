import { Box, Typography } from "@mui/material";

import dynamic from "next/dynamic";

import TeamCard from "./TeamCard/TeamCard";

import { teamData } from "@/src/mocks/AboutUsPage/dataOurTeam";

import { TFunction } from "i18next";

import { MotionBox } from "@/utils/motionElements";
import { teamCardsZoomIn, teamScrollDown } from "@/utils/motionVariants";

import style from "./MeetOurTeam.style";

const ScrollAnimationWrapper = dynamic(
  () => import("@/hooks/useScrollAnimationWrapper").then((mod) => mod.ScrollAnimationWrapper),
  { ssr: false }
);

interface IMeetOurTeam {
  t: TFunction;
}

const MeetOurTeam = ({ t }: IMeetOurTeam) => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.teamContainer}>
        <ScrollAnimationWrapper threshold={0.3}>
          <MotionBox
            initial='hidden'
            animate='visible'
            variants={teamScrollDown(0, 1)}
            sx={style.title}
          >
            <Typography component="label">
              {t("our-team.title")}
            </Typography>
          </MotionBox>
          <MotionBox
            initial='hidden'
            animate='visible'
            variants={teamScrollDown(0, 1)}
            sx={style.desc}
          >
            <Typography variant="h3" component='span'>
              {t("our-team.desc")}
            </Typography>
          </MotionBox>
          <MotionBox 
            sx={style.teamCardContainer}
            initial='hidden'
            animate='visible'
            variants={teamCardsZoomIn()}
          >
            {teamData.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </MotionBox>
        </ScrollAnimationWrapper>
      </Box>
    </Box>
  );
};

export default MeetOurTeam;
