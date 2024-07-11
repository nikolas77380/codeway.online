import ChooseUs from "@/components/ChooseUs/ChooseUs";
import CoursesList from "@/components/coursesListBlock/CoursesList/CoursesList";
import Header from "@/components/header/Header";
import "./page.module.css";
export default function Home() {
  return (
    <main className="main">
      <Header />
      <CoursesList />
      <ChooseUs />
    </main>
  );
}
