export const fallbackLang = "ua";
export const languages = [fallbackLang, "en"];
export const defaultNS = "translation";
export const cookieName = "i18nextLang";

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
