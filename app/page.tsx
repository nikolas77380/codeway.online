import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Video from "@/components/Video/Video";
import CookieDialog from "@/components/cookieDialog/CookieDialog";
import CoursesList from "@/components/coursesListBlock/CoursesList/CoursesList";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import style from "./page.style";
import Faq from "@/components/Faq/Faq";
import Testimonials from "@/components/Testimonials/Testimonials";


export default function Home() {
  return (
    <main>
      <Box sx={style.mainSection}>
        <Header />
        <CoursesList />
      </Box>
      <Box sx={style.chooseUs}>
        <Video />
        <ChooseUs />
        <Testimonials />
        <Faq />
      </Box>
      <CookieDialog />
    </main>
  );
}
