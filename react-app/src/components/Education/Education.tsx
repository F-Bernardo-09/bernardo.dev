import pt from "../../locales/pt-br.json";
import "./Education.css";

export default function Education() {
  const { timeline } = pt;

  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title">{timeline.title}</h2>
        <div className="education-list">
          {timeline.items.map((item: any) => (
            <article
              className="education-item"
              key={item.id}
              aria-label={item.ariaLabel}
            >
              <div className="education-bar">
                <span className="education-course">{item.role}</span>
                <span className="education-organization">
                  {item.organization}
                </span>
                <span className="education-date">{item.period.label}</span>
              </div>
              <p className="education-description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
