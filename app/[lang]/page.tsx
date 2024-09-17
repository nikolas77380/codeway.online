import DynamicProvider from "@/src/components/common/dynamicProvider/DynamicProvider";
import Header from "@/src/components/header/Header";
import MySection from "@/src/components/mySection/MySection";
import dynamic from "next/dynamic";

interface IHome {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: IHome) {
  const OfferWay = dynamic(() => import("@/src/components/offerWay/OfferWay"));
  const CoursesListBlock = dynamic(
    () => import("@/src/components/coursesListBlock/CoursesListBlock")
  );
  const ChooseUs = dynamic(() => import("@/src/components/ChooseUs/ChooseUs"));
  const Testimonials = dynamic(
    () => import("@/src/components/Testimonials/Testimonials")
  );
  const Faq = dynamic(() => import("@/src/components/Faq/Faq"));
  const ContactUs = dynamic(
    () => import("@/src/components/contactUs/ContactUs")
  );
  const CookieDialog = dynamic(
    () => import("@/src/components/cookieDialog/CookieDialog")
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
