import { useEffect, useState } from "react";
import { useStore } from "@/utils/store";

export default function ModeToggle() {
  const { setCurrentMode } = useStore();

  const [darkMode, setDarkMode] = useState(
    !localStorage.getItem("h-dark-theme") ||
      JSON.parse(localStorage.getItem("h-dark-theme"))
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      setCurrentMode("dark");
    }
  }, []);

  const handleToggle = ({ target }) => {
    setDarkMode(target.checked);
    setCurrentMode(target.checked ? "dark" : "light");
    localStorage.setItem("h-dark-theme", target.checked);
    document.body.classList.toggle("darkTheme");
  };

  return (
    <label className="theme-toggle-wrap cursor-pointer">
      <input onChange={handleToggle} type="checkbox" checked={darkMode} />
      <div className="theme-toggle-thumb">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
      </div>
    </label>
  );
}
