import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import ContactForm from "./ContactForm";

const ContactSection = styled.section`
  box-sizing: border-box;
  min-height: calc(100vh - var(--header-height, 80px));
  min-height: calc(100svh - var(--header-height, 80px));

  display: flex;
  align-items: center;

  padding: clamp(1.5rem, 4vh, 3rem) 0;
  scroll-margin-top: var(--header-height, 80px);

  @media (max-height: 800px) and (min-width: 769px) {
    align-items: flex-start;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: var(--spacing-lg) 0;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
`;

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <ContactSection id="contact" aria-label={t("ariaLabel")}>
      <div className="container">
        <ContactContainer>
          <Wrapper>
            <SectionHeader title={t("title")} subtitle={t("subtitle")} />
            <ContactForm />
          </Wrapper>
        </ContactContainer>
      </div>
    </ContactSection>
  );
}
