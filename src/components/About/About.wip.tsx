import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import Button from "../Button/Button.wip";
import HeroImage from "../HeroImage/HeroImage.wip";

const AboutSection = styled.section``;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: flex-start;

  a {
    margin-top: var(--spacing-md);
  }
`;

export default function About() {
  const { t } = useTranslation(["common", "projects"]);
  const paragraphs = t("about.paragraphs", {
    ns: "common",
    returnObjects: true,
  }) as string[];

  return (
    <AboutSection id="about">
      <div className="container">
        <HeroImage />

        <SectionHeader
          title={t("about.title", { ns: "common" })}
          subtitle={t("about.subtitle", { ns: "common", defaultValue: "" })}
        />
        <AboutContent>
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <Button
            href={t("about.cvButton.link", { ns: "common" })}
            download
            aria-label={t("about.cvButton.ariaLabel", { ns: "common" })}
          >
            {t("about.cvButton.label", { ns: "common" })}
          </Button>
        </AboutContent>
      </div>
    </AboutSection>
  );
}
