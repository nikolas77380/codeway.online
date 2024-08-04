import { Box } from "@mui/material";

import HeaderAboutUs from "@/components/AboutUsPage/HeaderAboutUs/HeaderAboutUs";
import MeetOurTeam from "@/components/AboutUsPage/MeetOurTeam/MeetOurTeam";
import OurPopularClasses from "@/components/AboutUsPage/OurPopularClasses/OurPopularClasses";
import OurValueSection from "@/components/AboutUsPage/OurValueSection/OurValueSection";
import WhoWeAre from "@/components/AboutUsPage/WhoWeAre/WhoWeAre";

import { getTranslation } from "@/app/i18n";
import style from "./AboutUs.style";

interface IAboutUs {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params: { lang } }: IAboutUs) {
  const { t } = await getTranslation(lang, "AboutUsPage");

  return {
    title: t("meta.title"),
  };
}

const  AboutUsPage = async ({ params: { lang } }: IAboutUs) => {

  const { t } = await getTranslation(lang, "AboutUsPage");

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
