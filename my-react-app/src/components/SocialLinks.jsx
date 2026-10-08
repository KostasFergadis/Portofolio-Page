import { profile } from "../data/content";
import Icon from "./Icon";

const links = [
  { icon: "github", label: "GitHub", href: profile.links.github },
  { icon: "linkedin", label: "LinkedIn", href: profile.links.linkedin },
  { icon: "mail", label: "Email", href: `mailto:${profile.email}` },
];

const SocialLinks = () => (
  <ul className="social-links">
    {links.map(({ icon, label, href }) => (
      <li key={label}>
        <a
          className="icon-button"
          href={href}
          aria-label={label}
          title={label}
          {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
        >
          <Icon name={icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
