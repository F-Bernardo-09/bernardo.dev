import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import ContactForm from "./ContactForm";

const ContactSection = styled.section`
  padding: var(--spacing-xl) 0;

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
  max-width: 620px;
  margin: 0 auto;
  width: 100%;
`;

export default function Contact() {
  const { t } = useTranslation("common");

  return (
    <ContactSection id="contact">
      <div className="container">
        <ContactContainer>
          <Wrapper>
            <SectionHeader
              title={t("contact.title")}
              subtitle={t("contact.subtitle")}
            />
            <ContactForm />
          </Wrapper>
        </ContactContainer>
      </div>
    </ContactSection>
  );
}
