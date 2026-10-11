import styled from "styled-components";
import { getOverallRange } from "../../utils/dateRange";
import { RangeText } from "./RangeText";
import type { Company } from "../../types/models";

type Role = Company["roles"][number];

const Row = styled.article`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  align-items: baseline;
  row-gap: var(--spacing-xs);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Period = styled.span`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-heading);
  color: var(--text-secondary);
  white-space: nowrap;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const RoleTitle = styled.h3`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-heading);
  color: var(--text-primary);
  text-align: left;
`;

const Separator = styled.span`
  margin: 0 0.4em;
  color: var(--text-secondary);
`;

const CompanyName = styled.span`
  color: var(--accent-green);
`;

const CompanyLink = styled.a`
  color: var(--accent-green);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;

  transition: opacity var(--transition-fast);

  &:hover,
  &:focus-visible {
    opacity: 0.8;
  }
`;

const Description = styled.p`
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  opacity: 0.7;
  text-align: left;
`;

interface CompanyCardProps {
  company: Company;
  role: Role;
}

export default function CompanyCard({ company, role }: CompanyCardProps) {
  const range = getOverallRange([role]);

  return (
    <Row aria-label={role.ariaLabel}>
      <Period>
        <RangeText {...range} />
      </Period>

      <Content>
        <RoleTitle>
          {role.title}
          <Separator aria-hidden="true">—</Separator>
          {company.link ? (
            <CompanyLink
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.name}
            </CompanyLink>
          ) : (
            <CompanyName>{company.name}</CompanyName>
          )}
        </RoleTitle>
        <Description>{role.description}</Description>
      </Content>
    </Row>
  );
}
