import { Box, Typography } from "@mui/material";

import TeamCard from "./TeamCard/TeamCard";

import { teamData } from "@/src/mocks/AboutUsPage/dataOurTeam";

import style from './MeetOurTeam.style'

const MeetOurTeam = () => {
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.teamContainer}>
        <Typography component='label'>
            Meet Our Team
        </Typography>
        <Typography variant="h3" component='span'>
          Alone we can do so little, together we can do so much.
        </Typography>
        <Box sx={style.teamCardContainer}>
          {teamData.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default MeetOurTeam