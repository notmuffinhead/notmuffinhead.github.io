import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const handleClick = () => {
    if (project.id !== 'website') {
      console.log(`Opening ${project.id}`)
    }
  }

  return (
    <div className={styles.projectCard} onClick={handleClick}>
      <div className={styles.projectImage}>{project.emoji}</div>
      <div className={styles.projectContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}