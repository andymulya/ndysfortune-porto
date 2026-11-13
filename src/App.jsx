import Background3D from './components/Background3D.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Background3D />
      <div className="orb a" />
      <div className="orb b" />
      <div className="orb c" />
      <div className="grid-overlay" />
      <Navbar />
      <div className="wrap" id="top">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Services />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
