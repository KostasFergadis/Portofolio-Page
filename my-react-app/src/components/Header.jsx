import { navigation, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import Icon from "./Icon";
import "./Header.css";

const sectionIds = navigation.map((item) => item.id);

const Header = () => {
  const activeId = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top">
          {profile.name}
        </a>

        <nav className="header__nav" aria-label="Main">
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="header__link"
              aria-current={activeId === id ? "true" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="icon-button"
          onClick={toggleTheme}
          aria-label={`Switch to ${nextTheme} theme`}
          title={`Switch to ${nextTheme} theme`}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
      </div>
    </header>
  );
};

export default Header;
