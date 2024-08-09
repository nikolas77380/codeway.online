import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Faq from "@/components/Faq/Faq";
import Video from "@/components/Video/Video";
import ContactUs from "@/components/contactUs/ContactUs";
import CookieDialog from "@/components/cookieDialog/CookieDialog";
import CoursesListBlock from "@/components/coursesListBlock/CoursesListBlock";
import Header from "@/components/header/Header";
import Testimonials from "@/components/testimonialsBlock/Testimonials";

interface IHome {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: IHome) {
  return (
    <main>
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
