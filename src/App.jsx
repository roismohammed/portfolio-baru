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
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <Fragment>
      <Index />
      <About />
      <Project />
      <Education/>
      <Skill/>
      <Contact/>
    </Fragment>
  )
}

export default App
