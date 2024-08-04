import { Box, Typography } from "@mui/material";

import TeamCard from "./TeamCard/TeamCard";

import { teamData } from "@/src/mocks/AboutUsPage/dataOurTeam";

import { TFunction } from "i18next";
import style from "./MeetOurTeam.style";
import { useTranslation } from "@/app/i18n/client";

interface IMeetOurTeam {
  t: TFunction;
}

const MeetOurTeam = ({ t }: IMeetOurTeam) => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.teamContainer}>
        <Typography component="label">{t("our-team.title")}</Typography>
        <Typography variant="h3" component="span">
          {t("our-team.desc")}
        </Typography>
        <Box sx={style.teamCardContainer}>
          {teamData.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MeetOurTeam;
