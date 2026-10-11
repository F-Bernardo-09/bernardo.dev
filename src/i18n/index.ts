import i18n from "i18next";
import type { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const SUPPORTED_LANGS = ["pt", "en"] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

const DEFAULT_LANG: Lang = "pt";
const STORAGE_KEY = "lang";

const modules = import.meta.glob("../locales/*/*.json", {
  eager: true,
  import: "default",
});

const resources: Resource = {};

for (const [path, content] of Object.entries(modules)) {
  const match = path.match(/locales\/([^/]+)\/([^/]+)\.json$/);
  if (!match) continue;

  const [, lang, namespace] = match;
  resources[lang] ??= {};
  resources[lang][namespace] = content as Resource[string][string];
}

function isSupported(lang: string | null): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}

function getSavedLang(): Lang {
  try {
    if (typeof window === "undefined") return DEFAULT_LANG;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isSupported(saved) ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function syncHtmlLang(lang: string) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: getSavedLang(),
  fallbackLng: DEFAULT_LANG,
  supportedLngs: SUPPORTED_LANGS,
  load: "languageOnly",
  ns: Object.keys(resources[DEFAULT_LANG] ?? {}),
  defaultNS: "about",
  interpolation: { escapeValue: false },
});

syncHtmlLang(i18n.language);
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
