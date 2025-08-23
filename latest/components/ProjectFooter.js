import styles from './ProjectFooter.module.css'
import Link from 'next/link'

export default function ProjectFooter() {
  return (
    <footer className={styles.footer}>
        <Link href="/" className={styles.backButton}>
            Back to Home
        </Link> 
    </footer>
  )
}
