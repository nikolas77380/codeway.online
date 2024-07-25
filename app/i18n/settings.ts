export const fallbackLang = "en";
export const languages = [fallbackLang, "uk"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lang = fallbackLang, ns = defaultNS) {
  return {
    debug: true,
    supportedLangs: languages,
    fallbackLng: fallbackLang,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}