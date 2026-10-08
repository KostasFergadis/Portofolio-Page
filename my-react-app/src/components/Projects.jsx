import { projects } from "../data/content";
import Icon from "./Icon";
import Section from "./Section";
import "./Projects.css";

const Project = ({ title, image, description, note, stack, links }) => (
  <article className="project">
    <img
      className="project__image"
      src={image}
      alt={`Screenshot of ${title}`}
      width="1200"
      height="630"
      loading="lazy"
      decoding="async"
    />

    <div className="project__body">
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
      {note && <p className="project__note">{note}</p>}
      <p className="stack">
        <span>Built with</span> {stack.join(", ")}
      </p>

      <div className="project__links">
        {links.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            <Icon name={href.includes("github.com") ? "github" : "external"} size={15} />
            {label}
          </a>
        ))}
      </div>
    </div>
  </article>
);

const Projects = () => (
  <Section id="projects" title="Projects" intro={projects.intro}>
    <div className="projects">
      {projects.items.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  </Section>
);

export default Projects;
