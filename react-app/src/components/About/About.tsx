import pt from "../../locales/pt-br.json";

export default function About() {
  const { about } = pt;

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">Sobre mim</h2>
        <div className="about-content">
          {about.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <a href={about.cvLink} className="btn-primary" download>
            {about.cvButton}
          </a>
        </div>
      </div>
    </section>
  );
}
