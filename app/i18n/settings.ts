export const fallbackLang = "uk";
export const languages = [fallbackLang];
export const defaultNS = "translation";
export const cookieName = "i18Lang";

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
