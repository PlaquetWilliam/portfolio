import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import { Experiences } from './pages/Experiences'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='fixed flex flex-col items-center w-52 h-[100vh]'>
        <h1 className='flex justify-center items-center w-full h-[10vh] text-4xl font-bold bg-[#000000] text-white font-montserrat'>W.</h1>

        <nav className='flex flex-col justify-center items-center w-full h-[90vh] bg-[#171717]'>
          <NavLink className='p-2 font-montserrat' style={({isActive}) => ({color: isActive ? '#3B82F6' : '#6d6d6d'})} to={ '/portfolio' }>Présentation</NavLink>
          <NavLink className='p-2 font-montserrat' style={({isActive}) => ({color: isActive ? '#3B82F6' : '#6d6d6d'})} to={ '/skills' }>Compétences</NavLink>
          <NavLink className='p-2 font-montserrat' style={({isActive}) => ({color: isActive ? '#3B82F6' : '#6d6d6d'})} to={ '/projects' }>Mes projets</NavLink>
          <NavLink className='p-2 font-montserrat' style={({isActive}) => ({color: isActive ? '#3B82F6' : '#6d6d6d'})} to={ '/experiences' }>Expériences</NavLink>
          <NavLink className='p-2 font-montserrat' style={({isActive}) => ({color: isActive ? '#3B82F6' : '#6d6d6d'})} to={ '/contact' }>Me contacter</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path='/portfolio' element={ <Home/> }/>
        <Route path='/skills' element={ <Skills/> }/>
        <Route path='/projects' element={ <Projects/> }/>
        <Route path='/experiences' element={ <Experiences/> }/>
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>
    </div>
  );
}

export default App;