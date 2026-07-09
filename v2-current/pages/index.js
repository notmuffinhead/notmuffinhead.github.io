import Head from 'next/head'
import Hero from '../components/Hero'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{"Maggie Wu"}</title>
        <meta
          name="description"
          content="Maggie Wu's portfolio — an ECE student at Carnegie Mellon documenting projects in robotics, embedded systems, and whatever else seems fun to build."
        />
      </Head>
      <Hero />
      <Landing />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}