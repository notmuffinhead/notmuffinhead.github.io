import Hero from '../components/Hero'
import TempBanner from '../components/TempBanner'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <TempBanner />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}