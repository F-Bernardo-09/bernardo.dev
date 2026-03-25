import profile from "../../assets/profile-photo.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-container">
          <img
            className="profile-image"
            src={profile}
            alt="Bernardo Alencar Profile Photo"
          />

          <div className="hero-content">
            <h1 className="hero-greeting">Hello, I'm Bernardo</h1>

            <div className="hero-specialties">
              Graphic Designer Freelancer | Systems Analysis Student | Web
              Designer | UI & UX Design
            </div>

            <div className="hero-description">
              <p>
                I'm a graphic designer studying Systems Analysis and
                Development. I love transforming ideas into visual and
                functional projects.
              </p>
            </div>

            <button className="btn-primary">About Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
