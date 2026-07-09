import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import { projects } from './projects/projectList'
import { currentWork } from './projects/currentWork'

export default function Projects() {
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
            {currentWork.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}
