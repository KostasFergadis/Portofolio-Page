import { experience } from "../data/content";
import Section from "./Section";
import "./Experience.css";

const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="timeline">
      {experience.map((job) => (
        <li key={`${job.company}-${job.period}`} className="timeline__item">
          <h3 className="timeline__role">
            {job.role}, <span className="timeline__company">{job.company}</span>
          </h3>
          <p className="timeline__meta">
            {job.period}, {job.location}
          </p>

          <ul className="timeline__highlights">
            {job.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <p className="stack">
            <span>Built with</span> {job.stack.join(", ")}
          </p>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
