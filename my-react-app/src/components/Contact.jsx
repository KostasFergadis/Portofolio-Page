import { useState } from "react";
import { profile } from "../data/content";
import Section from "./Section";
import SocialLinks from "./SocialLinks";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked; the address is still selectable text.
    }
  };

  return (
    <div className="band band--ink">
      <Section
        id="contact"
        title="Contact"
        lead="Have something to build?"
        intro="I'm open to full-stack roles. Email is the fastest way to reach me."
      >
        <div className="contact">
          <div className="contact__address">
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button type="button" className="contact__copy" onClick={copyEmail}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <SocialLinks />
        </div>
      </Section>
    </div>
  );
};

export default Contact;
