import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonPt from "../locales/pt/common.json";
import projectsPt from "../locales/pt/projects.json";
import commonEn from "../locales/en/common.json";
import projectsEn from "../locales/en/projects.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: { common: commonPt, projects: projectsPt },
    en: { common: commonEn, projects: projectsEn },
  },
  lng: localStorage.getItem("lang") || "pt",
  fallbackLng: "pt",
  ns: ["common", "projects"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
