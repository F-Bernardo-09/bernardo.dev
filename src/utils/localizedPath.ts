export type SupportedLanguage = "pt" | "en";

export function getSupportedLanguage(
  value: string | undefined,
): SupportedLanguage {
  return value === "en" ? "en" : "pt";
}

export function localizedPath(
  path: string,
  language: SupportedLanguage | string,
): string {
  const normalizedPath =
    path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${getSupportedLanguage(language)}${normalizedPath}`;
}
