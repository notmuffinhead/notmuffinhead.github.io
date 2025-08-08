import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1>Maggie Wu</h1>
      </div>
      <nav className={styles.heroNav}>
        <a href="#about" className={styles.navLink}>About</a> 
        <a href="#contact" className={styles.navLink}>Contact</a>
      </nav>
    </section>
  )
}
