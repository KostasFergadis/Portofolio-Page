import { useEffect, useState } from "react";

// Returns the id of the section currently in the middle of the viewport.
export const useActiveSection = (ids) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
