import { Box } from "@mui/material";

import dynamic from "next/dynamic";

import ContactUsHeader from "@/components/ContactUsPage/ContactUsHeader/ContactUsHeader";
import GetInTouch from "@/components/ContactUsPage/GetInTouch/GetInTouch";

import { getTranslation } from "@/app/i18n";
import style from "./ContactUsPage.style";
import { Suspense } from "react";

const GoogleMapItemWithNoSSR = dynamic(
  () => import("@/components/ContactUsPage/GoogleMapItem/GoogleMapItem"),
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
