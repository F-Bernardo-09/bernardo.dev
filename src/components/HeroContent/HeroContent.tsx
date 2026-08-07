import { Link } from "react-router-dom";
import pt from "../../locales/pt-br.json";

export default function HeroContent() {
  return (
    <div className="hero-content">
      <h1 className="hero-greeting">{pt.hero.greeting}</h1>

      <div className="hero-specialties">{pt.hero.specialties}</div>

      <div className="hero-description">
        <p>{pt.hero.description}</p>
      </div>

      <Link
        className="btn-primary"
        aria-label={pt.hero.aboutButton.ariaLabel}
        to={pt.hero.aboutButton.link}
      >
        {pt.hero.aboutButton.label}
      </Link>
    </div>
  );
}
