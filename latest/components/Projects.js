import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 'detector',
      emoji: '⚖️',
      image: '/images/detector.jpg',
      title: 'Detector',
      description: "A strain gauge force scale (featuring a DIY load cell and breadboard HX711 replica) that accurately weighs objects from 30-1000g.",
      tags: ['Arduino', 'Strain Gauge', 'ADC', 'Science Olympiad', '2023']
    },
    {
      id: 'wifi-lab',
      emoji: '📶',
      image:'/images/wifi-lab.jpg',
      title: 'Wifi Lab',
      description: "A double biquad antenna that transmits a 2.4 GHz Wifi signal.",
      tags: ['Antennas!!!', 'Science Olympiad', '2023']
    },
    // {
    //   id: 'amogus-gun',
    //   emoji: 'ඞ',
    //   title: 'Figurine Blaster',
    //   description: '... not suspicious at all, page in progress',
    //   tags: ['???']
    // },
    {
      id: 'phone-mount',
      emoji: '📷',
      image: '/images/phone-mount.jpeg',
      title: 'Bite Mount, but for a Phone Camera (?)',
      description: "I made it to record short POV mountain biking videos but it's a bit questionable.",
      tags: ['Fusion 360', '3D Printing', '2023']
    },
    {
      id: 'website',
      emoji: '🍍',
      title: 'This Website :D',
      description: "I created this website to document and showcase my side quests over the years, and to learn about web development! Its first version only used HTML and CSS.",
      tags: ['React', 'Next.js', 'JavaScript', 'CSS', '2025']
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      <h2>{"My Projects"}</h2>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.bigCard}>
        <section>
          <h3>{"Currently Working On..."}</h3>
          <ul>
            <li>{"Learning PCB design on Fusion 360"}</li>
            <li>{"Improving a figurine launcher I half-completed in 2023 (with a custom PCB)"}</li>
            <li>{"Making a power meter and accompanying app for my bike using an Arduino Nano ESP32 (more of a long term project to learn about IoT and signal processing)"}</li>
          </ul>
        </section>
      </div>
    </section>
  )
}