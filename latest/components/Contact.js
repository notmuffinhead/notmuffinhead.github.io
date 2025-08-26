import styles from './Contact.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>{"Links"}</h2>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <a href="mailto:maggiew2@andrew.cmu.edu">
            {"Email: maggiew2@andrew.cmu.edu"}
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="https://linkedin.com/in/maggiewu2" target="_blank">
            {"LinkedIn"}
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="/pdfs/Maggie-Wu-Resume-Public-082625.pdf" target="_blank">
              {"Résumé"}
          </a>
        </div>
        <div className={styles.contactItem}>
          <Link href="https://github.com/notmuffinhead" target="_blank">
            {"GitHub"}
          </Link>
        </div> 
      </div>
    </section>
  )
}