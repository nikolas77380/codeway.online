import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Faq from "@/components/Faq/Faq";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactUs from "@/components/contactUs/ContactUs";
import CookieDialog from "@/components/cookieDialog/CookieDialog";
import CoursesListBlock from "@/components/coursesListBlock/CoursesListBlock";
import Header from "@/components/header/Header";
import MySection from "@/components/mySection/MySection";
import OfferWay from "@/components/offerWay/OfferWay";

interface IHome {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: IHome) {
  return (
    <main>
      <Header lang={lang} />
      <MySection lang={lang} />
      <OfferWay lang={lang} />
      <CoursesListBlock lang={lang} />
      <ChooseUs />
      <Testimonials lang={lang} />
      <Faq />
      <ContactUs />
      <CookieDialog />
    </main>
  );
}
