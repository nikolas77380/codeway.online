"use client";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { cookieName, getOptions, languages } from "./settings";

const runsOnServerSide = typeof window === "undefined";

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation(ns: string, options?: {}) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const { lang } = useParams<{ lang: string }>();
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lang || i18n.resolvedLanguage === lang) return;
      i18n.changeLanguage(lang);
    }, [lang, i18n]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies[cookieName] === lang) return;
      setCookie(cookieName, lang, { path: "/" });
    }, [lang, cookies, setCookie]);
  }
  return ret;
}
