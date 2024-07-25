import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  icons: Array<React.ElementType>;
};

export const teamData: TeamMember[] = [
  {
    name: "Everett Sandoval",
    role: "Founder",
    imageSrc: "/meetOurTeam/1.jpg",
    icons: [
      FacebookIcon,
      LinkedInIcon,
      YouTubeIcon,
      XIcon
    ],
  },
  {
    name: "William Taylor",
    role: "Co-Founder",
    imageSrc: "/meetOurTeam/2.jpg",
    icons: [
      FacebookIcon,
      LinkedInIcon,
      YouTubeIcon,
      XIcon
    ],
  },
  {
    name: "Georgina Wilkinson",
    role: "Business Manager",
    imageSrc: "/meetOurTeam/3.jpg",
    icons: [
      FacebookIcon,
      LinkedInIcon,
      YouTubeIcon,
      XIcon
    ],
  },
  {
    name: "Charlotte Webb",
    role: "Marketing Manager",
    imageSrc: "/meetOurTeam/4.jpg",
    icons: [
      FacebookIcon,
      LinkedInIcon,
      YouTubeIcon,
      XIcon
    ],
  },
];