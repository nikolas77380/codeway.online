import MotionBox from "@/src/components/customComponents/MotionBox";
import { TCourseInfo } from "@/src/mocks/mocks";
import { Box } from "@mui/material";
import Image from "next/image";
import CourseItem from "./CourseItem/CourseItem";
import style from "./CoursesList.style";
import bgImage from "/public/assets/header/bg_header_1_.webp";
interface ICoursesList {
  coursesList: TCourseInfo[];
  lang: string;
}

const CoursesList = ({ coursesList, lang }: ICoursesList) => {
  return (
    <Box sx={style.listWrapper}>
      <Box sx={style.backgroundImage}>
        <Image
          src={bgImage}
          alt="Background Image"
          quality={1}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Box>
      {coursesList.map((item, i) => (
        <MotionBox
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ zIndex: 2 }}
          key={i}
        >
          <CourseItem {...item} lang={lang} />
        </MotionBox>
      ))}
    </Box>
  );
};

export default CoursesList;
