import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Header from "@/components/header/Header";
import CoursesList from "@/components/coursesListBlock/CoursesList/CoursesList";
export default function Home() {
  return (
    <main>
      <Header />
      <CoursesList />
      <ChooseUs />
    </main>
  );
}
