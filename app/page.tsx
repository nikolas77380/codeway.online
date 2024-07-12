import ChooseUs from "@/components/ChooseUs/ChooseUs";
import CoursesList from "@/components/coursesListBlock/CoursesList/CoursesList";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import style from "./page.style";
import Video from "@/components/Video/Video";
import Faq from "@/components/Faq/Faq";

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
        <Faq />
      </Box>
    </main>
  );
}
