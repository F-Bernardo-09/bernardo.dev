import TimelineSection from "../components/TimelineSection/TimelineSection";
import About from "../components/About/About";

function AboutPage() {
  return (
    <>
      <About />
      <TimelineSection section="experience" />
      <TimelineSection section="education" />
    </>
  );
}

export default AboutPage;
