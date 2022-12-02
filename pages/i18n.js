import i18n from "i18next";
import languagedetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next"
import translationEN from '../public/locales/en/common.json';
import translationTH from '../public/locales/th/common.json';
import translationde from '../public/locales/de/common.json';
// the translations
const resources = {
  en: {
    translation: translationEN
  },
  th: {
    translation: translationTH
  },
/*   de: {
    translation: translationde
  } */
};


i18n
  .use(languagedetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng:'th',
    debug:true,
    fallbackLng: "th", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;