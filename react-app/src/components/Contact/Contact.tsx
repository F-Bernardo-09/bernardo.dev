import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact-section">
      <div className="container">
        <div className="social-networks-grid">
          <div className="social-network-card">
            <h3 className="social-network-title">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/bernardo-alencar"
              className="social-network-link"
            >
              linkedin.com/in/bernardo-alencar
            </a>
          </div>

          <div className="social-network-card">
            <h3 className="social-network-title">GitHub</h3>
            <a
              href="https://github.com/F-Bernardo-09"
              className="social-network-link"
            >
              github.com/F-Bernardo-09
            </a>
          </div>

          <div className="social-network-card">
            <h3 className="social-network-title">Instagram</h3>
            <a
              href="https://instagram.com/f.bernardo.09"
              className="social-network-link"
            >
              @f.bernardo.09
            </a>
          </div>

          <div className="social-network-card">
            <h3 className="social-network-title">Behance</h3>
            <a
              href="https://behance.net/bernardoalencar1"
              className="social-network-link"
            >
              behance.net/bernardoalencar1
            </a>
          </div>

          <div className="social-network-card">
            <h3 className="social-network-title">Email</h3>
            <a
              href="mailto:bernardoalen09@gmail.com"
              className="social-network-link"
            >
              bernardoalen09@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
