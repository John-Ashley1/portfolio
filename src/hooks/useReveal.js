import { useEffect, useRef, useState } from "react";

/** Returns [ref, visible]; visible flips to true once the element scrolls into view. */
export default function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    // Already on screen when mounted (e.g. content that arrives after a fetch): show right away.
    const rect = el.getBoundingClientRect();
    if (!("IntersectionObserver" in window) || (rect.top < window.innerHeight && rect.bottom > 0)) {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}
