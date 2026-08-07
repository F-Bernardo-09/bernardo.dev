import styled from "styled-components";
import pt from "../../locales/pt-br.json";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";

const AboutSection = styled.section``;

const AboutContent = styled.div``;

export default function About() {
  const { about } = pt;

  return (
    <AboutSection id="about">
      <div className="container">
        <SectionHeader
          title={pt.projects.title}
          subtitle={pt.projects.subtitle}
        />
        <AboutContent>
          {about.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <Button
            href={about.cvButton.link}
            download
            aria-label={about.cvButton.ariaLabel}
          >
            {about.cvButton.label}
          </Button>
        </AboutContent>
      </div>
    </AboutSection>
  );
}
