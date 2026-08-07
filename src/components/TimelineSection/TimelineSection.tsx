import pt from "../../locales/pt-br.json";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./TimelineSection.css";

interface TimelineProps {
  section: "experience" | "education";
}

export default function TimelineSection({ section }: TimelineProps) {
  const sectionData = (pt as any)[section];

  const sortedItems = [...sectionData.items].reverse();

  return (
    <section className="education-section" id={section}>
      <div className="container">
        <SectionHeader
          title={sectionData.title}
          subtitle={sectionData.subtitle}
        />
        <div className="education-list">
          {sortedItems.map((item: any) => (
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
