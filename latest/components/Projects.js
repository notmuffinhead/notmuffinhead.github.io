import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 'detector',
      emoji: '⚖️',
      title: 'Detector',
      description: 'A strain gauge force scale (featuring a DIY load cell and breadboard HX711 replica) that accurately weighs objects from 0-1000g. I made this for Science Olympiad in 2023.',
      tags: ['Arduino']
    },
    {
      id: 'wifi-lab',
      emoji: '📶',
      title: 'Wifi Lab',
      description: 'A double biquad antenna that transmits a ??GHz Wifi signal. I made this for Science Olympiad in 2023.',
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
      description: 'kind of large',
      tags: ['lol idk']
    },
    {
      id: 'website',
      emoji: '🍍',
      title: 'This Website :D',
      description: 'I created this website to document and showcase my side quests over the years, and to learn HTML, CSS, and some JS!',
      tags: ['HTML', 'CSS', 'JavaScript']
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