import styles from './ProjectFooter.module.css'
import Link from 'next/link'

export default function ProjectFooter() {
  return (
    <div className={styles.footer}>
      <Link href="/" className={styles.backButton}>
        {"Back to Home"}
      </Link> 
    </div>
  )
}
