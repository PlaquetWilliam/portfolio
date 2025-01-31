import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"
import Background from "./components/Background";

function App() {
  return (
    <>
      <div className="fixed h-screen z-0">
        <Background />
      </div>

      <div className="max-w-8/12 m-auto z-10">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
