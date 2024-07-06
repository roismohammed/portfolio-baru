import { Fragment } from 'react'
import './App.css'
import Index from './Index'
import '@tabler/core/dist/css/tabler.css'
import '@tabler/core/dist/js/tabler.js'
import About from './pages/users/About'
import Project from './pages/users/Project'
import Education from './pages/users/Education'
import Skill from './pages/users/Skill'
import Contact from './pages/users/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from './pages/users/Experience'
AOS.init();

function App() {
  return (
    <Fragment>
      <Index />
      <About />
      <Project />
      <Education/>
      <Experience/>
      <Skill/>
      <Contact/>
    </Fragment>
  )
}

export default App
