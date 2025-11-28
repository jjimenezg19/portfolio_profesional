// src/layout/App.tsx
import Header from "@/components/Header";
import Banner from "@/sections/Banner";
import Navigation from "@/components/Navigation";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Ideals from "@/sections/Ideals";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ScrollTop from "@/components/ScrollTop";

import { content } from "@/utils/dictionary";
import { useStore } from "@/utils/store";
import { useEffect, useState } from "react";

export default function App() {
  const { currentLanguage } = useStore();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mostrar / ocultar el botón según el scroll
  useEffect(() => {
    const handleScroll = () => {
      // puedes ajustar el 400 si quieres que aparezca antes o después
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // para inicializar correctamente

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Acción al hacer click en el botón
  const handleScrollTop = () => {
    const main = document.getElementById("about-me");

    if (main) {
      // si quieres que suba el contenedor principal
      main.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // fallback: scroll de la ventana
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-full">
      <Navigation />
      <Header
        className="fixed top-0 inset-x-0 z-[10]"
        content={content[currentLanguage].header}
      />

      <main id="main" className="w-full overflow-x-clip">
        <Banner content={content[currentLanguage].banner} />
        <Projects content={content[currentLanguage].projects} />
        <Experience content={content[currentLanguage].experience} />
        <Skills content={content[currentLanguage].skills} />
        <Education content={content[currentLanguage].education} />
        <Ideals content={content[currentLanguage].ideals} />
        <Contact content={content[currentLanguage].contact} />
      </main>

      {/* Botón de scroll hacia arriba (posición fija, siempre encima del contenido) */}
      <ScrollTop show={showScrollTop} onClick={handleScrollTop} />

      <Footer content={content[currentLanguage].footer} />
    </section>
  );
}
