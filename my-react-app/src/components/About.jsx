import { leads, about } from "../data/content";
import Section from "./Section";
import "./About.css";

const About = () => (
  <Section id="about" lead={leads.about} title="About">
    <div className="about">
      <div className="about__text">
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <dl className="about__facts">
        {about.facts.map(({ label, value }) => (
          <div key={label} className="about__fact">
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </Section>
);

export default About;
