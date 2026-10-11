import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import type { EducationItem } from "../../types/models";

const EducationSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const EducationList = styled.div`
  display: grid;
  grid-template-columns: minmax(10rem, 30%) 1fr;
  row-gap: var(--spacing-xl);
  column-gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationRow = styled.article`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  align-items: baseline;
  row-gap: var(--spacing-xs);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationPeriodLabel = styled.span`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-heading);
  color: var(--text-secondary);
  white-space: nowrap;
`;

const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const EducationRole = styled.h3`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-heading);
  color: var(--text-primary);
  text-align: left;
`;

const EducationOrganization = styled.span`
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  opacity: 0.7;
`;

export default function Education() {
  const { t } = useTranslation("education");

  const items = t("items", {
    returnObjects: true,
  }) as EducationItem[];
  const sortedItems = [...items].reverse();

  return (
    <EducationSection id="education">
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <EducationList>
          {sortedItems.map((item) => (
            <EducationRow key={item.id} aria-label={item.ariaLabel}>
              <EducationPeriodLabel>{item.period.label}</EducationPeriodLabel>
              <EducationContent>
                <EducationRole>{item.role}</EducationRole>
                <EducationOrganization>
                  {item.organization}
                </EducationOrganization>
              </EducationContent>
            </EducationRow>
          ))}
        </EducationList>
      </div>
    </EducationSection>
  );
}
