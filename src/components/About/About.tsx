import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import HeroImage from "../HeroImage/HeroImage";

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
  const { t } = useTranslation("about");
  const paragraphs = t("paragraphs", {
    returnObjects: true,
  }) as string[];
  const subtitle = t("subtitle", { defaultValue: "" }) || undefined;

  return (
    <AboutSection id="about" aria-label={t("ariaLabel")}>
      <div className="container">
        <HeroImage />

        <SectionHeader title={t("title")} subtitle={subtitle} />
        <AboutContent>
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <Button
            href={t("cvButton.link")}
            download
            iconDirection="down"
            aria-label={t("cvButton.ariaLabel")}
          >
            {t("cvButton.label")}
          </Button>
        </AboutContent>
      </div>
    </AboutSection>
  );
}
