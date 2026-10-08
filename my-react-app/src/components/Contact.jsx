import { profile } from "../data/content";
import Section from "./Section";
import SocialLinks from "./SocialLinks";
import "./Contact.css";

const Contact = () => (
  <div className="band band--tag">
    <Section
      id="contact"
      title="Contact"
      intro="I'm always happy to talk about new roles, projects or anything web. Email is the fastest way to reach me."
    >
      <div className="contact">
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <SocialLinks />
      </div>
    </Section>
  </div>
);

export default Contact;
