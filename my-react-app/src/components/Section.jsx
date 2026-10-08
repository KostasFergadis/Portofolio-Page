import "./Section.css";

const Section = ({ id, title, intro, children }) => (
  <section id={id} className="section container" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`} className="section__title section__header">
      {title}
    </h2>
    <div>
      {intro && <p className="section__intro">{intro}</p>}
      {children}
    </div>
  </section>
);

export default Section;
