import i18nModule from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import "dayjs/locale/es";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import EN from "./Locales/En";
import ES from "./Locales/Es";

interface Translation {
  [key: string]: string[] | Translation | string;
}

dayjs.extend(relativeTime);
dayjs.locale("es");

const resources = {
  en: {
    translation: EN,
  },

  es: {
    translation: ES,
  },
};

const detectionOptions = {
  order: ["path", "querystring", "navigator"],
  caches: [],
};

void i18nModule
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: detectionOptions,
    resources,

    fallbackLng: "en",
    supportedLngs: ["es", "en"],
    interpolation: {
      escapeValue: false,
    },
  });

export type { Translation };
export default i18nModule;
