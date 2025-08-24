import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 'detector',
      emoji: '⚖️',
      image: '/images/detector.jpg',
      title: 'Detector',
      description: 'A strain gauge force scale (featuring a DIY load cell and breadboard HX711 replica) that accurately weighs objects from 30-1000g. I made this for Science Olympiad in 2023.',
      tags: ['Arduino']
    },
    {
      id: 'wifi-lab',
      emoji: '📶',
      image:'/images/wifi-lab.jpg',
      title: 'Wifi Lab',
      description: 'A double biquad antenna that transmits a 2.4 GHz Wifi signal. I made this for Science Olympiad in 2023.',
      tags: ['lol idk']
    },
    {
      id: 'amogus-gun',
      emoji: 'ඞ',
      title: 'Figurine Blaster',
      description: '... not suspicious at all',
      tags: ['lol idk']
    },
    {
      id: 'phone-mount',
      emoji: '📷',
      title: 'Bite Mount, but for a Phone',
      description: "Kind of large, probably shouldn't exist",
      tags: ['lol idk']
    },
    {
      id: 'website',
      emoji: '🍍',
      title: 'This Website :D',
      description: 'I created this website to document and showcase my side quests over the years, and to learn HTML, CSS, and JavaScript!',
      tags: ['HTML', 'CSS', 'JavaScript', 'Next.js']
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}