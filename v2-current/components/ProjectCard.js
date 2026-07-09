import styles from './ProjectCard.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Card from './ui/Card'
import Chip from './ui/Chip'

export default function ProjectCard({ project }) {
  const router = useRouter()

  const handleClick = () => {
    if (!project.noModal) {
      router.push({ pathname: '/', query: { project: project.id } }, undefined, { shallow: true })
    }
  }

  return (
    <Card
      as={project.noModal ? 'div' : 'button'}
      type={project.noModal ? undefined : 'button'}
      className={styles.projectCard}
      onClick={handleClick}
    >
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
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>
    </Card>
  )
}
