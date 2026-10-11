import styled from "styled-components";
import { useTranslation } from "react-i18next";
import type { FormattedRange } from "../../utils/dateRange";

const CurrentLabel = styled.span`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  color: var(--text-secondary);
`;

export function RangeText({ startYear, endYear, sameYear }: FormattedRange) {
  const { t } = useTranslation("experience");

  if (sameYear) return <>{startYear}</>;
  if (endYear === null)
    return (
      <>
        {startYear} — <CurrentLabel>{t("present")}</CurrentLabel>
      </>
    );
  return (
    <>
      {startYear} — {endYear}
    </>
  );
}
