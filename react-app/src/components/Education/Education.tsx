import pt from "../../locales/pt-br.json";
import "./Education.css";

export default function Education() {
  const { education } = pt;

  return (
    <section className="education-section">
      <div className="container">
        <div className="education-list">
          {education.items.map((item: any) => (
            <article className="education-item" key={item.course}>
              <div className="education-bar">
                <span className="education-course">{item.course}</span>
                <span className="education-date">{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
