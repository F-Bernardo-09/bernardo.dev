import styled from "styled-components";
import type { FormattedRange } from "../../utils/dateRange";

const CurrentLabel = styled.span`
  color: var(--accent-green);
  font-weight: var(--font-weight-medium);
`;

export function RangeText({ startYear, endYear, sameYear }: FormattedRange) {
  if (sameYear) return <>{startYear}</>;
  if (endYear === null)
    return (
      <>
        {startYear} — <CurrentLabel>momento</CurrentLabel>
      </>
    );
  return (
    <>
      {startYear} — {endYear}
    </>
  );
}
