import { profile } from "../data/content";
import Receipt from "./Receipt";
import SocialLinks from "./SocialLinks";
import "./Hero.css";

const [firstName, lastName] = profile.name.split(" ");

const Hero = () => (
  <section className="hero container" aria-labelledby="hero-title">
    <div className="hero__intro">
      <h1 id="hero-title" className="hero__title">
        {firstName}
        <br />
        {lastName}
      </h1>
      <p className="hero__headline">{profile.headline}</p>

      <div className="hero__actions">
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a className="button" href="#experience">
          See my experience
        </a>
        <SocialLinks />
      </div>
    </div>

    <Receipt />
  </section>
);

export default Hero;
