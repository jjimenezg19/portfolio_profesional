import { useEffect, useState } from "react";
import { useStore } from "@/utils/store";

export default function LanguageToggle() {
  const { setCurrentLanguage } = useStore();

  const languageList = {
    Es: { lang: "Es", flag: "Costa Rica", img: "costa_rica" },
    En: { lang: "En", flag: "United States of America", img: "usa" },
  };

  const [language, setLanguage] = useState(
    languageList[localStorage.getItem("h-language") || "En"]
  );

  useEffect(() => {
    setCurrentLanguage(language.lang);
    setTitle(language.lang);
  }, []);

  const handleValue = () => {
    const lang = language.lang === "Es" ? "En" : "Es";

    setLanguage(languageList[lang]);
    setCurrentLanguage(lang);
    localStorage.setItem("h-language", lang);
    setTitle(lang);

    document
      .getElementById("language-toggle-img")
      .classList.add("scaled-explosion");
    setTimeout(() => {
      document
        .getElementById("language-toggle-img")
        .classList.remove("scaled-explosion");
    }, 700);
  };

  const setTitle = (lang) => {
    document.title = `Johan Jimenez | ${
      lang === "Es" ? "Portafolio Profesional" : "Professional Portfolio"
    }`;
  };

  return (
    <div
      onClick={handleValue}
      className="h-6 md:h-7 overflow-hidden flex gap-1 cursor-pointer select-none"
    >
      <div
        className={`flex flex-col text-base md:text-lg font-bold transition-transform duration-300 ${
          language.lang === "Es" ? "-translate-y-6 md:-translate-y-7" : ""
        }`}
      >
        <div className="h-6 md:h-7 w-6">En</div>
        <div className="h-6 md:h-7 w-6">Es</div>
      </div>
      <img
        id="language-toggle-img"
        src={`./flags/${language.img}.svg`}
        alt={language.flag}
        className="w-6 md:w-7 h-auto rounded-sm"
      />
    </div>
  );
}
