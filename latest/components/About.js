import styles from './About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>{"About Me"}</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image
            src="/images/me.jpg"  
            width={300}
            height={300}
          />
        </div>
        <div className={styles.aboutText}>
          <p>{`
            Hi, I'm Maggie!
          `}</p>
          <p>{`
            I'm a student at Carnegie Mellon studying ECE, Robotics, and CS. 
            In my free time, I enjoy building random things —
            some of them useful, most of them just for fun —
            but I aim to learn something new with each one. 

            I document my projects here partly for my future self, 
            and partly because I hope someone else will find them interesting 
            (or at least entertaining).
          `}</p>
          <p>{`
            When I'm not studying, working on research, or tinkering, 
            I enjoy mountain biking, running, and rock climbing. 
          `}</p>
          <p>{`
            Feel free to look around and reach out if you'd like to chat!
          `}</p>
        </div>
      </div>
    </section>
  )
}