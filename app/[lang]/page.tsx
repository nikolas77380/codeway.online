import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Faq from "@/components/Faq/Faq";
import Video from "@/components/Video/Video";
import ContactUs from "@/components/contactUs/ContactUs";
import CookieDialog from "@/components/cookieDialog/CookieDialog";
import CoursesListBlock from "@/components/coursesListBlock/CoursesListBlock";
import Header from "@/components/header/Header";
import TestimonialsBlock from "@/components/testimonialsBlock/TestimonialsBlock";

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
      <TestimonialsBlock lang={lang} />
      <Faq />
      <ContactUs />
      <CookieDialog />
    </main>
  );
}
