import { Box } from "@mui/material";

import HeaderAboutUs from "@/src/components/AboutUsPage/HeaderAboutUs/HeaderAboutUs";
import MeetOurTeam from "@/src/components/AboutUsPage/MeetOurTeam/MeetOurTeam";
import OurPopularClasses from "@/src/components/AboutUsPage/OurPopularClasses/OurPopularClasses";
import OurValueSection from "@/src/components/AboutUsPage/OurValueSection/OurValueSection";
import WhoWeAre from "@/src/components/AboutUsPage/WhoWeAre/WhoWeAre";

import { getTranslations } from "next-intl/server";
import style from "./AboutUs.style";

export async function generateMetadata() {
  const t = await getTranslations("AboutUsPage");

  return {
    title: t("meta.title"),
  };
}

const AboutUsPage = async () => {
  const t = await getTranslations("AboutUsPage");

  return (
    <Box sx={style.mainPageContainer}>
      <HeaderAboutUs t={t} />
      <WhoWeAre t={t} />
      <OurValueSection />
      <OurPopularClasses t={t} />
      <MeetOurTeam t={t} />
    </Box>
  );
};

export default AboutUsPage;
