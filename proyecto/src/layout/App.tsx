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

import { content } from "@/utils/dictionary";
import { useStore } from "@/utils/store";

export default function App() {
  const { currentLanguage } = useStore();

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

      <Footer content={content[currentLanguage].footer} />
    </section>
  );
}
