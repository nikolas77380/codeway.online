import CookieDialog from "@/components/cookieDialog/CookieDialog";
import Header from "@/components/header/Header";
import MySection from "@/components/mySection/MySection";
import OfferWay from "@/components/offerWay/OfferWay";
import { lazy } from "react";

interface IHome {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: IHome) {
  const CoursesListBlock = lazy(
    () => import("@/components/coursesListBlock/CoursesListBlock")
  );
  const ChooseUs = lazy(() => import("@/components/ChooseUs/ChooseUs"));
  const Testimonials = lazy(
    () => import("@/components/Testimonials/Testimonials")
  );
  const Faq = lazy(() => import("@/components/Faq/Faq"));
  const ContactUs = lazy(() => import("@/components/contactUs/ContactUs"));

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
