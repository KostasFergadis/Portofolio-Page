import { useEffect, useRef } from "react";

const MAX_ANGLE = 4; // degrees

// Tilts an element toward the pointer by writing a `--sway` CSS variable.
// Skipped for touch devices and for people who prefer reduced motion.
export const useSway = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const canSway = matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)");
    if (!element || !canSway.matches) return;

    let frame = 0;
    const onPointerMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { left, width } = element.getBoundingClientRect();
        const offset = (event.clientX - (left + width / 2)) / (window.innerWidth / 2);
        const angle = Math.max(-1, Math.min(1, offset)) * MAX_ANGLE;
        element.style.setProperty("--sway", `${angle.toFixed(2)}deg`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
};
