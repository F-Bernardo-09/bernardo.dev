import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import CompanyCard from "./CompanyCard";
import type { Company } from "../../types/models";

const Section = styled.section`
  padding: var(--spacing-xl) 0;
`;

const CompanyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export default function ExperienceSection() {
  const { t } = useTranslation("common");
  const companies = t("experience.companies", {
    returnObjects: true,
  }) as Company[];

  const [activeId, setActiveId] = useState<string | null>(null);

  function toggle(id: string) {
    setActiveId((current) => (current === id ? null : id));
  }

  return (
    <Section id="experience">
      <div className="container">
        <SectionHeader
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />
        <CompanyList>
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              expanded={activeId === company.id}
              onToggle={() => toggle(company.id)}
            />
          ))}
        </CompanyList>
      </div>
    </Section>
  );
}
