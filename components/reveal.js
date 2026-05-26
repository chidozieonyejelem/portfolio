"use client";

import { useEffect, useRef, useState } from "react";

// Fades + lifts its children into view the first time they enter the viewport.
// Works in every browser via IntersectionObserver. Users with reduced-motion
// preference get an instant reveal (no transition) via `motion-reduce`.
export function Reveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={`[transition:opacity_0.6s_ease,transform_0.6s_ease] motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
