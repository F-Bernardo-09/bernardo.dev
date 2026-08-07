import pt from "../../locales/pt-br.json";

export default function Footer() {
  const { footer } = pt;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
