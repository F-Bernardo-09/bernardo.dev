import "./Contact.css";

export default function Contact() {
  return (
    <section class="contact-section" id="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contact</h2>
          <p class="section-subtitle">
            If you want to get in touch, you can contact me using the following
            methods.
          </p>
        </div>

        <div class="social-networks-grid">
          <div class="social-network-card">
            <h3 class="social-network-title">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/bernardo-alencar"
              class="social-network-link"
            >
              linkedin.com/in/bernardo-alencar
            </a>
          </div>

          <div class="social-network-card">
            <h3 class="social-network-title">GitHub</h3>
            <a
              href="https://github.com/F-Bernardo-09"
              class="social-network-link"
            >
              github.com/F-Bernardo-09
            </a>
          </div>

          <div class="social-network-card">
            <h3 class="social-network-title">Instagram</h3>
            <a
              href="https://instagram.com/f.bernardo.09"
              class="social-network-link"
            >
              @f.bernardo.09
            </a>
          </div>

          <div class="social-network-card">
            <h3 class="social-network-title">Behance</h3>
            <a
              href="https://behance.net/bernardoalencar1"
              class="social-network-link"
            >
              behance.net/bernardoalencar1
            </a>
          </div>

          <div class="social-network-card">
            <h3 class="social-network-title">Email</h3>
            <a
              href="mailto:bernardoalen09@gmail.com"
              class="social-network-link"
            >
              bernardoalen09@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
