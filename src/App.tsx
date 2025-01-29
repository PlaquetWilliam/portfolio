import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Contact } from "./components/Contact"

function App() {
  return (
    <>
      <div className="max-w-8/12 m-auto">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
