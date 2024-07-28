import { Box, Typography, Paper } from "@mui/material";

import Image from 'next/image';

import { TeamMember } from '@/src/mocks/AboutUsPage/dataOurTeam';

import style from './../MeetOurTeam.style';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <Paper sx={style.teamCardWrapper}>
        <Box sx={style.cardImageContainer}>
          <Image src={member.imageSrc} alt="team member" objectFit="cover" fill />
        </Box>
        <Box sx={style.cardTextContainer}>
          <Typography variant="h5" component="label">
            {member.name}
          </Typography>
          <Typography variant="body1" component='p'>
            {member.role}
          </Typography>
          <Box sx={style.cardIconsContainer}>
            {member.icons.map((IconComponent, index) => (
              <IconComponent key={index} />
            ))}
          </Box>
        </Box>
    </Paper>
  );
};

export default TeamCard;