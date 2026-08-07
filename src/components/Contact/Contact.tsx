import { SectionHeader } from "../SectionHeader/SectionHeader";
import SocialNetworkCard from "../SocialNetwork/SocialNetworkCard";
import pt from "../../locales/pt-br.json";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <SectionHeader
          title={pt.contact.title}
          subtitle={pt.contact.subtitle}
        />

        <div className="social-networks-grid">
          {pt.contact.social.map((network: any, index: number) => (
            <SocialNetworkCard
              key={index}
              name={network.name}
              label={network.label}
              link={network.link}
              ariaLabel={network.ariaLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
