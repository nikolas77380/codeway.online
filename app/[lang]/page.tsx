import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Faq from "@/components/Faq/Faq";
import Testimonials from "@/components/Testimonials/Testimonials";
import Video from "@/components/Video/Video";
import ContactUs from "@/components/contactUs/ContactUs";
import CookieDialog from "@/components/cookieDialog/CookieDialog";
import CoursesList from "@/components/coursesListBlock/CoursesList/CoursesList";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import style from "./page.style";

interface IHome {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: IHome) {
  return (
    <main>
      <Box sx={style.mainSection}>
        <Header lang={lang} />
        <CoursesList />
      </Box>
      <Box sx={style.chooseUs}>
        <Video />
        <ChooseUs lang={lang} />
        <ContactUs lang={lang} />
        <Testimonials />
        <Faq />
      </Box>
      <CookieDialog />
    </main>
  );
}
