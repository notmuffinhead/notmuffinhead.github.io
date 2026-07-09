import styles from './Contact.module.css'
import { contactLinks } from './contactLinks'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>{"Links"}</h2>
      <div className={styles.contactInfo}>
        {contactLinks.map(link => (
          <div key={link.label} className={styles.contactItem}>
            <a
              href={link.href}
              target={link.newTab ? '_blank' : undefined}
              rel={link.newTab ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
