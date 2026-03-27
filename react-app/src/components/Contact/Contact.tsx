import { SectionHeader } from "../SectionHeader/SectionHeader";
import SocialNetworkCard from "../SocialNetwork/SocialNetworkCard";

import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <SectionHeader />

        <div className="social-networks-grid">
          <SocialNetworkCard />
        </div>
      </div>
    </section>
  );
}
