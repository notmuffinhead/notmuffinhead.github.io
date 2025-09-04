import styles from './Landing.module.css'

export default function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles.content}>
        <h1>{"Hi, I'm Maggie"}</h1>
        <p>{"Welcome to my website, where I try to document the projects I pursue for fun!"}</p>
      </div>
    </section>
  )
}