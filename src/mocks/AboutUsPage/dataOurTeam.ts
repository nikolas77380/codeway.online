import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  icons: Array<React.ElementType>;
}

export const teamData: TeamMember[] = [
  {
    name: "Everett Sandoval",
    role: "Founder",
    imageSrc: "/assets/meetOurTeam/1.jpg",
    icons: [FacebookIcon, LinkedInIcon, YouTubeIcon, XIcon],
  },
  {
    name: "William Taylor",
    role: "Co-Founder",
    imageSrc: "/assets/meetOurTeam/2.jpg",
    icons: [FacebookIcon, LinkedInIcon, YouTubeIcon, XIcon],
  },
  {
    name: "Georgina Wilkinson",
    role: "Business Manager",
    imageSrc: "/assets/meetOurTeam/3.jpg",
    icons: [FacebookIcon, LinkedInIcon, YouTubeIcon, XIcon],
  },
  {
    name: "Charlotte Webb",
    role: "Marketing Manager",
    imageSrc: "/assets/meetOurTeam/4.jpg",
    icons: [FacebookIcon, LinkedInIcon, YouTubeIcon, XIcon],
  },
];
