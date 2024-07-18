import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Faq from "@/components/Faq/Faq";
import Testimonials from "@/components/Testimonials/Testimonials";
import Video from "@/components/Video/Video";
import ContactUs from "@/components/contactUs/ContactUs";
import CookieDialog from "@/components/cookieDialog/CookieDialog";
import CoursesListBlock from "@/components/coursesListBlock/CoursesListBlock";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import style from "./page.style";

export default function Home() {
  return (
    <main>
      <Box sx={style.mainSection}>
        <Header />
        <CoursesListBlock />
      </Box>
      <Box sx={style.chooseUs}>
        <Video />
        <ChooseUs />
        <ContactUs />
        <Testimonials />
        <Faq />
      </Box>
      <CookieDialog />
    </main>
  );
}
