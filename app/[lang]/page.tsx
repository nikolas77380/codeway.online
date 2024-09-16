import DynamicProvider from "@/components/common/dynamicProvider/DynamicProvider";
import Header from "@/components/header/Header";
import MySection from "@/components/mySection/MySection";
import dynamic from "next/dynamic";

interface IHome {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: IHome) {
  const OfferWay = dynamic(() => import("@/components/offerWay/OfferWay"));
  const CoursesListBlock = dynamic(
    () => import("@/components/coursesListBlock/CoursesListBlock")
  );
  const ChooseUs = dynamic(() => import("@/components/ChooseUs/ChooseUs"));
  const Testimonials = dynamic(
    () => import("@/components/Testimonials/Testimonials")
  );
  const Faq = dynamic(() => import("@/components/Faq/Faq"));
  const ContactUs = dynamic(() => import("@/components/contactUs/ContactUs"));
  const CookieDialog = dynamic(
    () => import("@/components/cookieDialog/CookieDialog")
  );

  return (
    <main style={{ overflow: "hidden" }}>
      <Header lang={lang} />
      <MySection lang={lang} />
      <DynamicProvider>
        <OfferWay lang={lang} />
        <CoursesListBlock lang={lang} />
        <ChooseUs />
        <Testimonials lang={lang} />
        <Faq />
        <ContactUs />
        <CookieDialog />
      </DynamicProvider>
    </main>
  );
}
