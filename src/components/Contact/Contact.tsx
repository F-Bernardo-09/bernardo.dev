import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import SocialNetworkCard from "../SocialNetwork/SocialNetworkCard";

const ContactSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SocialNetworksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md) var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
`;

export default function Contact() {
  const { t } = useTranslation("common");
  const social = t("contact.social", { returnObjects: true }) as any[];

  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionHeader
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />
        <SocialNetworksGrid>
          {social.map((network: any, index: number) => (
            <SocialNetworkCard
              key={index}
              name={network.name}
              label={network.label}
              link={network.link}
              ariaLabel={network.ariaLabel}
            />
          ))}
        </SocialNetworksGrid>
      </div>
    </ContactSection>
  );
}
