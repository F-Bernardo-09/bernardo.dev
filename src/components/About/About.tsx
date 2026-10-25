import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import HeroImage from "../HeroImage/HeroImage";

const AboutSection = styled.section``;

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: var(--spacing-lg);
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: flex-start;
  width: 100%;

  > a {
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
  }

  @media (max-width: 768px) {
    max-width: 220px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: stretch;

  > :first-child {
    margin: 0;
  }

  > :first-child h1,
  > :first-child h2 {
    margin: 0;
    text-align: left;
  }

  p {
    margin: 0;
    text-align: justify;
    hyphens: auto;
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
        <AboutLayout>
          <AboutAside>
            <HeroImage />
            <Button
              href={t("cvButton.link")}
              download
              iconDirection="down"
              aria-label={t("cvButton.ariaLabel")}
            >
              {t("cvButton.label")}
            </Button>
          </AboutAside>

          <AboutContent>
            <SectionHeader title={t("title")} subtitle={subtitle} />
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </AboutContent>
        </AboutLayout>
      </div>
    </AboutSection>
  );
}
