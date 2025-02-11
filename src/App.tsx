import { useState } from "react";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import Background from "./components/Background";

import { PiSelectionBackgroundBold, PiSelectionAllBold } from "react-icons/pi"; // Import des icônes

function App() {
  const [showBackground, setShowBackground] = useState(true);

  return (
    <>
      <div className="fixed inset-0 z-0 transition-opacity duration-500" style={{ opacity: showBackground ? 1 : 0 }}>
        <Background />
      </div>

      <div className="fixed bottom-0 right-0 m-8 w-16 h-16 border border-[#3a3d40] bg-[#23282f] rounded duration-100 hover:bg-[#303740] z-20">
        <button
          className="flex justify-center items-center w-full h-full cursor-pointer"
          onClick={() => setShowBackground(!showBackground)}
        >
          {showBackground ? (
            <PiSelectionBackgroundBold className="text-[#a9b4be] text-4xl" />
          ) : (
            <PiSelectionAllBold className="text-[#a9b4be] text-4xl" />
          )}
        </button>
      </div>

      <div className="max-w-11/12 m-auto z-10 xl:max-w-8/12">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;