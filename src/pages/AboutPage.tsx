import TimelineSection from "../components/TimelineSection/TimelineSection";
import About from "../components/About/About.wip";
import SkillsCarousell from "../components/SkillsCarousell/SkillsCarousell";

function AboutPage() {
  return (
    <>
      <About />
      <SkillsCarousell />
      <TimelineSection section="experience" />
      <TimelineSection section="education" />
    </>
  );
}

export default AboutPage;
