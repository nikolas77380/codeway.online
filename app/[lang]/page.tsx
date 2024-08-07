import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Faq from "@/components/Faq/Faq";
import Testimonials from "@/components/Testimonials/Testimonials";
import Video from "@/components/Video/Video";
import ContactUs from "@/components/contactUs/ContactUs";
import CookieDialog from "@/components/cookieDialog/CookieDialog";
import CoursesListBlock from "@/components/coursesListBlock/CoursesListBlock";
import Header from "@/components/header/Header";

  interface IHome {
    params: {
      lang: string;
    };
  }

export default function Home({ params: { lang } }: IHome) {
  return (
    <main style={{ maxWidth: 1700, margin: "auto" }}>
      <Header lang={lang} />
      <CoursesListBlock lang={lang} />
      <Video />
      <ChooseUs />
      <Testimonials lang={lang} />
      <Faq />
      <ContactUs />
      <CookieDialog />
    </main>
  );
}
