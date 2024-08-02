export const fallbackLang = "en";
export const languages = [fallbackLang, "ua"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lang = fallbackLang, ns = defaultNS) {
  return {
    supportedLangs: languages,
    fallbackLng: fallbackLang,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
