import styled from "styled-components";
import pt from "../../locales/pt-br.json";
import { SectionHeader } from "../SectionHeader/SectionHeader";

interface TimelineProps {
  section: "experience" | "education";
}

const EducationSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const EducationItem = styled.article`
  display: flex;
  padding: var(--spacing-md);
  background-color: var(--bg-dark-accent);
  border-left: var(--border-accent);
  border-radius: var(--radius-card);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EducationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const EducationCourse = styled.span`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  flex: 1;
`;

const EducationOrganization = styled.span``;

const EducationDate = styled.span`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  white-space: nowrap;

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

const EducationDescription = styled.p``;

export default function TimelineSection({ section }: TimelineProps) {
  const sectionData = (pt as any)[section];

  const sortedItems = [...sectionData.items].reverse();

  return (
    <EducationSection id={section}>
      <div className="container">
        <SectionHeader
          title={sectionData.title}
          subtitle={sectionData.subtitle}
        />
        <EducationList>
          {sortedItems.map((item: any) => (
            <EducationItem key={item.id} aria-label={item.ariaLabel}>
              <EducationBar>
                <EducationCourse>{item.role}</EducationCourse>
                <EducationOrganization>
                  {item.organization}
                </EducationOrganization>
                <EducationDate>{item.period.label}</EducationDate>
              </EducationBar>
              <EducationDescription>{item.description}</EducationDescription>
            </EducationItem>
          ))}
        </EducationList>
      </div>
    </EducationSection>
  );
}
