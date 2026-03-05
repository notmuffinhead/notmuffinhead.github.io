import Hero from '../../components/Hero'
import ProjectFooter from "../../components/ProjectFooter"
import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HeartPrinter() {
  return (
    <div> 
      <Hero/>

      <div className={styles.projectDetail}> 

        <h2>{"HeartPrinter"}</h2> 

        <div className={styles.projectContent}>
          <section>
            <h2>{"Overview"}</h2>
            <p>{`
              I joined this project in May 2025, and worked on developing components for it all summer. 
              I created the power distribution system from the ground up and prototyped the cable driving system. 
              Additionally, I wrote some validation code for the suction base positions.
              I also wrote the paper (as a first coauthor) and created all the figures, which our lab recently submitted. 
              I thoroughly enjoyed the whole experience, and intend to continue pursuing medical robotics. 
            `}</p>
          </section>

          <section>
            <h2>{"More to come!"}</h2>
          </section>

        </div> 
      </div> 
      
      <ProjectFooter/>
    </div>
  )
}