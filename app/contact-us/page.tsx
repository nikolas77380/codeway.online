import ContactUsHeader from "@/src/components/ContactUsPage/ContactUsHeader/ContactUsHeader";
import GetInTouch from "@/src/components/ContactUsPage/GetInTouch/GetInTouch";
import { Box } from "@mui/material";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import style from "./ContactUsPage.style";

const GoogleMapItemWithNoSSR = dynamic(
  () => import("@/src/components/ContactUsPage/GoogleMapItem/GoogleMapItem"),
  { ssr: false }
);

export async function generateMetadata() {
  const t = await getTranslations("ContactUsPage");

  return {
    title: t("meta.title"),
  };
}

const ContactUsPage = async () => {
  const t = await getTranslations("ContactUsPage");

  return (
    <Box sx={style.mainPageContainer}>
      <ContactUsHeader t={t} />
      <GetInTouch t={t} />
      <GoogleMapItemWithNoSSR />
    </Box>
  );
};

export default ContactUsPage;
