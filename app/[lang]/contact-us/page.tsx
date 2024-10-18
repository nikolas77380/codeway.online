import { Box } from "@mui/material";

import dynamic from "next/dynamic";

import ContactUsHeader from "@/src/components/ContactUsPage/ContactUsHeader/ContactUsHeader";
import GetInTouch from "@/src/components/ContactUsPage/GetInTouch/GetInTouch";

import { getTranslation } from "@/app/i18n";
import { languages } from "@/app/i18n/settings";
import style from "./ContactUsPage.style";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const GoogleMapItemWithNoSSR = dynamic(
  () => import("@/src/components/ContactUsPage/GoogleMapItem/GoogleMapItem"),
  { ssr: false }
);

interface IContactUs {
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params: { lang } }: IContactUs) {
  const { t } = await getTranslation(lang, "ContactUsPage");

  return {
    title: t("meta.title"),
  };
}

const ContactUsPage = async ({ params: { lang } }: IContactUs) => {
  const { t } = await getTranslation(lang, "ContactUsPage");
  return (
    <Box sx={style.mainPageContainer}>
      <ContactUsHeader t={t} />
      <GetInTouch t={t} />
      <GoogleMapItemWithNoSSR />
    </Box>
  );
};

export default ContactUsPage;
