import styles from './ProjectCard.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  const router = useRouter()
  
  const handleClick = () => {
    if (project.id !== 'website') {
      router.push(`/projects/${project.id}`)
    }
  }

  return (
    <div className={styles.projectCard} onClick={handleClick}>
      <div className={styles.projectImage}>
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <span style={{ fontSize: '5rem' }}>{project.emoji}</span>
        )}
      </div>
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