import pt from "../../locales/pt-br.json";

export default function HeroContent() {
  return (
    <div className="hero-content">
      <h1 className="hero-greeting">{pt.hero.greeting}</h1>

      <div className="hero-specialties">{pt.hero.specialties}</div>

      <div className="hero-description">
        <p>{pt.hero.description}</p>
      </div>

      <button className="btn-primary">{pt.hero.aboutButton}</button>
    </div>
  );
}
