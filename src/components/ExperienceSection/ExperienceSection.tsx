import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import CompanyCard from "./CompanyCard";
import type { Company } from "../../types/models";

const Section = styled.section`
  padding: var(--spacing-xl) 0;
`;

const CompanyList = styled.div`
  display: grid;
  grid-template-columns: minmax(10rem, 30%) 1fr;
  row-gap: var(--spacing-xl);
  column-gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function ExperienceSection() {
  const { t } = useTranslation("experience");
  const companies = t("companies", {
    returnObjects: true,
  }) as Company[];

  const experiences = companies
    .flatMap((company) => company.roles.map((role) => ({ company, role })))
    .sort((a, b) => b.role.period.start.localeCompare(a.role.period.start));

  return (
    <Section id="experience">
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <CompanyList>
          {experiences.map(({ company, role }) => (
            <CompanyCard key={role.id} company={company} role={role} />
          ))}
        </CompanyList>
      </div>
    </Section>
  );
}
