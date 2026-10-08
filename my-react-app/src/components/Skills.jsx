import { skills } from "../data/content";
import Section from "./Section";
import "./Skills.css";

const Skills = () => (
  <Section id="skills" title="Skills" intro="Tagged in yellow: what I work with every day.">
    <dl className="skills">
      {skills.groups.map(({ title, items }) => (
        <div key={title} className="skills__row">
          <dt className="skills__title">{title}</dt>
          <dd className="skills__items">
            <ul>
              {items.map((item) => (
                <li key={item} className={skills.core.includes(item) ? "is-core" : undefined}>
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
