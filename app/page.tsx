import DynamicProvider from "@/src/components/common/dynamicProvider/DynamicProvider";
import ContactUsDialog from "@/src/components/contactUs/dialog/ContactUsDialog";
import Header from "@/src/components/header/Header";
import MySection from "@/src/components/mySection/MySection";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";

export async function generateMetadata() {
  const t = await getTranslations("MainPage");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords"),
    robots: "index, follow",
  };
}

export default function Home() {
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

  return (
    <main style={{ overflow: "hidden" }}>
      <Header />
      <MySection />
      <DynamicProvider>
        <OfferWay />
        <CoursesListBlock />
        <ChooseUs />
        <Testimonials />
        <Faq />
        <ContactUs />
      </DynamicProvider>
      <ContactUsDialog />
    </main>
  );
}
