import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1>{"Maggie Wu"}</h1>
      </div>

      <nav className={styles.heroNav}>
        <Link href="/#about" className={styles.navLink}>
          {"About Me"}
        </Link> 
        <Link href="/#contact" className={styles.navLink}>
          {"Find Me Online"}
        </Link>
      </nav>
    </section>
  )
}
