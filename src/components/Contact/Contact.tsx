import styled from "styled-components";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import SocialNetworkCard from "../SocialNetwork/SocialNetworkCard";
import pt from "../../locales/pt-br.json";

const ContactSection = styled.section`
  padding: var(--spacing-xl) 0;
`;

const SocialNetworksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md) var(--spacing-xl);
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <div className="container">
        <SectionHeader
          title={pt.contact.title}
          subtitle={pt.contact.subtitle}
        />

        <SocialNetworksGrid>
          {pt.contact.social.map((network: any, index: number) => (
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
