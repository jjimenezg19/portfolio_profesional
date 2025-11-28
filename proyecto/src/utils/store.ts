import { create } from "zustand";

type AppState = {
  currentMode: "dark" | "light";
  setCurrentMode: (mode: "dark" | "light") => void;

  currentLanguage: "En" | "Es";
  setCurrentLanguage: (lang: "En" | "Es") => void;

  activeSection:
    | "about-me"
    | "projects"
    | "experience"
    | "skills"
    | "education"
    | "contact"
    | "ideals"
    | "contact";

  setActiveSection: (section: AppState["activeSection"]) => void;
};

export const useStore = create<AppState>((set) => ({
  currentMode: "light",
  setCurrentMode: (currentMode) => set({ currentMode }),

  currentLanguage: "En",
  setCurrentLanguage: (currentLanguage) => set({ currentLanguage }),

  activeSection: "about-me",
  setActiveSection: (activeSection) => set({ activeSection }),
}));
