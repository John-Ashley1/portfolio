import education from "../data/education";
import Section, { SectionTitle } from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" label="education">
      <SectionTitle id="education-title">education</SectionTitle>
      <ol className="edu-list">
        {education.map((e, i) => (
          <Reveal as="li" key={e.school} className={`edu-row ${i === 0 ? "is-current" : ""}`} delay={i * 60}>
            <span className="edu-years label">{e.years}</span>
            <h3 className="edu-school">{e.school}</h3>
            <span className="edu-level">{e.level}</span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
