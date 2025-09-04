import Hero from '../components/Hero'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <Landing />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}