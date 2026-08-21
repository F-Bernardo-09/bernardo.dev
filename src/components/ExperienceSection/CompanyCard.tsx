import styled from "styled-components";
import { getOverallRange } from "../../utils/dateRange";
import { RangeText } from "./RangeText";
import { CompanyLogo } from "./CompanyLogo";
import RoleTrajectory from "./RoleTrajectory";
import type { Company } from "../../types";

const Card = styled.article<{ $expanded: boolean }>`
  position: relative;
  display: flex;
  gap: var(--spacing-md);

  padding: var(--spacing-md);
  padding-right: 3.25rem;
  border: var(--border-default);
  border-radius: var(--radius-card);
  background-color: ${({ $expanded }) =>
    $expanded ? "var(--bg-dark-accent)" : "transparent"};

  transition:
    background-color var(--transition-slow),
    border-color var(--transition-slow);

  &:hover {
    border-color: var(--accent-green);
  }
`;

const CompanyBody = styled.div`
  flex: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const OverallPeriod = styled.span`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
`;

const CompanyNameLink = styled.a`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);

  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--text-secondary);

  transition:
    color var(--transition-fast),
    text-decoration-color var(--transition-fast);

  &:hover,
  &:focus-visible {
    color: var(--accent-green);
    text-decoration-color: var(--accent-green);
  }
`;

const CompanyNameText = styled.span`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
`;

const Summary = styled.p`
  margin-top: 0.25rem;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
`;

const ToggleButton = styled.button<{ $expanded: boolean }>`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);

  display: grid;
  place-items: center;

  width: 2rem;
  height: 2rem;

  background: none;
  border: var(--border-default);
  border-radius: var(--radius-circle);
  cursor: pointer;
  color: var(--text-secondary);

  transform: rotate(${({ $expanded }) => ($expanded ? "180deg" : "0deg")});

  transition:
    transform var(--transition-slow),
    border-color var(--transition-fast),
    color var(--transition-fast);

  &:hover,
  &:focus-visible {
    border-color: var(--accent-green);
    color: var(--accent-green);
  }
`;

interface CompanyCardProps {
  company: Company;
  expanded: boolean;
  onToggle: () => void;
}

export default function CompanyCard({
  company,
  expanded,
  onToggle,
}: CompanyCardProps) {
  const overall = getOverallRange(company.roles);
  const trajectoryId = `trajectory-${company.id}`;

  return (
    <Card $expanded={expanded}>
      <CompanyLogo company={company} />

      <CompanyBody>
        <OverallPeriod>
          <RangeText {...overall} />
        </OverallPeriod>

        {company.link ? (
          <CompanyNameLink
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.name}
          </CompanyNameLink>
        ) : (
          <CompanyNameText>{company.name}</CompanyNameText>
        )}

        <Summary>{company.summary}</Summary>

        <RoleTrajectory
          roles={company.roles}
          expanded={expanded}
          id={trajectoryId}
        />
      </CompanyBody>

      <ToggleButton
        type="button"
        $expanded={expanded}
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={trajectoryId}
        aria-label={`Ver trajetória em ${company.name}`}
      >
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 4.5L7 9.5L12 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ToggleButton>
    </Card>
  );
}
