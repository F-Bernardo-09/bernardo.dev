interface Period {
  start: string;
  end: string | null;
}

export interface FormattedRange {
  startYear: string;
  endYear: string | null;
  sameYear: boolean;
}

function yearOf(isoDate: string) {
  return isoDate.split("-")[0];
}

export function formatRange(start: string, end: string | null): FormattedRange {
  const startYear = yearOf(start);
  if (end === null) {
    return { startYear, endYear: null, sameYear: false };
  }
  const endYear = yearOf(end);
  return { startYear, endYear, sameYear: startYear === endYear };
}

export function getOverallRange(roles: { period: Period }[]): FormattedRange {
  const startYears = roles.map((role) => Number(yearOf(role.period.start)));
  const startYear = Math.min(...startYears).toString();

  const mostRecentRole = roles[0];
  const endYear = mostRecentRole.period.end
    ? yearOf(mostRecentRole.period.end)
    : null;

  return formatRange(startYear, endYear === null ? null : `${endYear}-01`);
}
