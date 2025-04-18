import React from 'react'
import Navbar from "./components/navbar/navbar.jsx"
import Hero from './components/hero/hero.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Services from './components/services/Services.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
