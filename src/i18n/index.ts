import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import projectsPt from "../locales/pt/projects.json";
import projectsUiPt from "../locales/pt/projectsUi.json";
import systemErrorsPt from "../locales/pt/systemErrors.json";
import systemUiPt from "../locales/pt/systemUi.json";
import aboutPt from "../locales/pt/about.json";
import contactPt from "../locales/pt/contact.json";
import educationPt from "../locales/pt/education.json";
import experiencePt from "../locales/pt/experience.json";
import footerPt from "../locales/pt/footer.json";
import headerPt from "../locales/pt/header.json";
import heroPt from "../locales/pt/hero.json";
import highlightsPt from "../locales/pt/highlights.json";
import seoPt from "../locales/pt/seo.json";
import toolsPt from "../locales/pt/tools.json";
import projectsEn from "../locales/en/projects.json";
import projectsUiEn from "../locales/en/projectsUi.json";
import systemErrorsEn from "../locales/en/systemErrors.json";
import systemUiEn from "../locales/en/systemUi.json";
import aboutEn from "../locales/en/about.json";
import contactEn from "../locales/en/contact.json";
import educationEn from "../locales/en/education.json";
import experienceEn from "../locales/en/experience.json";
import footerEn from "../locales/en/footer.json";
import headerEn from "../locales/en/header.json";
import heroEn from "../locales/en/hero.json";
import highlightsEn from "../locales/en/highlights.json";
import seoEn from "../locales/en/seo.json";
import toolsEn from "../locales/en/tools.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      projects: projectsPt,
      projectsUi: projectsUiPt,
      systemErrors: systemErrorsPt,
      systemUi: systemUiPt,
      about: aboutPt,
      contact: contactPt,
      education: educationPt,
      experience: experiencePt,
      footer: footerPt,
      header: headerPt,
      hero: heroPt,
      highlights: highlightsPt,
      seo: seoPt,
      tools: toolsPt,
    },
    en: {
      projects: projectsEn,
      projectsUi: projectsUiEn,
      systemErrors: systemErrorsEn,
      systemUi: systemUiEn,
      about: aboutEn,
      contact: contactEn,
      education: educationEn,
      experience: experienceEn,
      footer: footerEn,
      header: headerEn,
      hero: heroEn,
      highlights: highlightsEn,
      seo: seoEn,
      tools: toolsEn,
    },
  },
  lng: localStorage.getItem("lang") || "pt",
  fallbackLng: "pt",
  ns: [
    "projects",
    "projectsUi",
    "systemErrors",
    "systemUi",
    "about",
    "contact",
    "education",
    "experience",
    "footer",
    "header",
    "hero",
    "highlights",
    "seo",
    "tools",
  ],
  defaultNS: "about",
  interpolation: { escapeValue: false },
});

export default i18n;
