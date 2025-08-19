import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero({ showBackButton = false }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1>Maggie Wu</h1>
      </div>

      {showBackButton && (
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <Link href="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            padding: '10px 20px', 
            transition: 'all 0.5s ease'
          }}>
            Back to Home
          </Link>
        </div>
      )}

      <nav className={styles.heroNav}>
        <a href={showBackButton ? "/#about" : "#about"} className={styles.navLink}>About</a> 
        <a href={showBackButton ? "/#contact" : "#contact"} className={styles.navLink}>Contact</a>
      </nav>
    </section>
  )
}
