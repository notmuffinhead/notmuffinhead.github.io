import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <a href="mailto:maggiew2@andrew.cmu.edu">
            Email: maggiew2@andrew.cmu.edu
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="https://linkedin.com/in/maggiewu2" target="_blank">
            LinkedIn
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="https://github.com/notmuffinhead" target="_blank">
            GitHub
          </a>
        </div> 
      </div>
    </section>
  )
}