import pt from "../../locales/pt-br.json";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export default function About() {
  const { about } = pt;

  return (
    <section className="about-section" id="about">
      <div className="container">
        <SectionHeader
          title={pt.projects.title}
          subtitle={pt.projects.subtitle}
        />
        <div className="about-content">
          {about.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <a
            href={about.cvButton.link}
            className="btn-primary"
            download
            aria-label={about.cvButton.ariaLabel}
          >
            {about.cvButton.label}
          </a>
        </div>
      </div>
    </section>
  );
}
