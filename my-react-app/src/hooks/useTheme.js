import { useCallback, useState } from "react";

const STORAGE_KEY = "theme";

// The initial theme is applied by the inline script in index.html (to avoid a
// flash of the wrong theme), so we only read it back from the <html> element.
const currentTheme = () => document.documentElement.dataset.theme ?? "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = useCallback(() => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
    setTheme(next);
  }, []);

  return { theme, toggleTheme };
};
