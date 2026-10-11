import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getSupportedLanguage, localizedPath } from "../../utils/localizedPath";

const SITE_URL = "https://bernardo.dev";
const OG_IMAGE_URL = `${SITE_URL}/og-image.webp`;

function setMeta(
  attribute: "name" | "property",
  value: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    value
      ? `meta[${attribute}="${value}"]`
      : `meta[${attribute}="description"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value || "description");
    document.head.appendChild(element);
  }

  element.content = content;
}

export default function SEO() {
  const { t, i18n } = useTranslation("seo");
  const { pathname } = useLocation();

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const language = getSupportedLanguage(segments[0]);
    const page =
      segments[0] === "pt" || segments[0] === "en" ? segments[1] : segments[0];
    const pageKey = page === "about" || page === "projects" ? page : "home";
    const routePath = pageKey === "home" ? "/" : `/${pageKey}`;
    const canonicalPath = localizedPath(routePath, language);
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    const title = t(`${pageKey}.title`);
    const description = t(`${pageKey}.description`);

    document.title = title;
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", OG_IMAGE_URL);
    setMeta("property", "og:image:type", "image/webp");
    setMeta("property", "og:image:width", "1201");
    setMeta("property", "og:image:height", "631");
    setMeta("property", "og:locale", language === "en" ? "en_US" : "pt_BR");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", OG_IMAGE_URL);

    document.head
      .querySelectorAll('link[rel="alternate"][data-seo-language]')
      .forEach((element) => element.remove());

    for (const alternateLanguage of ["pt", "en"] as const) {
      const alternate = document.createElement("link");
      alternate.rel = "alternate";
      alternate.hreflang = alternateLanguage;
      alternate.href = `${SITE_URL}${localizedPath(routePath, alternateLanguage)}`;
      alternate.dataset.seoLanguage = alternateLanguage;
      document.head.appendChild(alternate);
    }

    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = `${SITE_URL}${localizedPath(routePath, "pt")}`;
    xDefault.dataset.seoLanguage = "x-default";
    document.head.appendChild(xDefault);
  }, [i18n.language, pathname, t]);

  return null;
}
