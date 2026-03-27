import HeroImage from "../HeroImage/HeroImage";
import HeroContent from "../HeroContent/HeroContent";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-container">
          <HeroImage />
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
