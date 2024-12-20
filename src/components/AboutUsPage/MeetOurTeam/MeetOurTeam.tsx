import { Box, Typography } from "@mui/material";

import dynamic from "next/dynamic";

import TeamCard from "./TeamCard/TeamCard";

import { teamData } from "@/src/mocks/AboutUsPage/dataOurTeam";

import MotionBox from "@/src/components/customComponents/MotionBox";
import { teamCardsZoomIn, teamScrollDown } from "@/src/utils/motionVariants";

import { useTranslations } from "next-intl";
import style from "./MeetOurTeam.style";

const ScrollAnimationWrapper = dynamic(
  () =>
    import("@/src/hooks/useScrollAnimationWrapper").then(
      (mod) => mod.ScrollAnimationWrapper
    ),
  { ssr: false }
);

interface IMeetOurTeam {
  t: ReturnType<typeof useTranslations>;
}

const MeetOurTeam = ({ t }: IMeetOurTeam) => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.teamContainer}>
        <ScrollAnimationWrapper threshold={0.3}>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={teamScrollDown(0, 1)}
          >
            <Box sx={style.title}>
              <Typography component="label">{t("our-team.title")}</Typography>
            </Box>
          </MotionBox>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={teamScrollDown(0, 1)}
          >
            <Box sx={style.desc}>
              <Typography variant="h3" component="span">
                {t("our-team.desc")}
              </Typography>
            </Box>
          </MotionBox>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={teamCardsZoomIn()}
          >
            <Box sx={style.teamCardContainer}>
              {teamData.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </Box>
          </MotionBox>
        </ScrollAnimationWrapper>
      </Box>
    </Box>
  );
};

export default MeetOurTeam;
