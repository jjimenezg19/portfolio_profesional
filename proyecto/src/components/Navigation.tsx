/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useStore } from "@/utils/store";

const SECTION_IDS = [
  "about-me",
  "projects",
  "experience",
  "skills",
  "education",
  "ideals",
  "contact",
] as const;

export default function Navigation() {
  const setActiveSection = useStore((state) => state.setActiveSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Nos quedamos con la sección más visible en pantalla
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id as any);
        }
      },
      {
        threshold: 0.4, // ~40% visible
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return null;
}
