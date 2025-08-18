import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function WifiLab() {
  return (
    <div className={styles.projectDetail}>
      <Link href="/" className={styles.backButton}>
        ← Back to Portfolio
      </Link>
      
      <div className={styles.projectHeader}>
        <h1>Wifi Lab</h1> 
      </div>

      <div className={styles.projectContent}>
        <section>
          <h2>Overview</h2>
          <p>
            For Science Olympiad 2023, I designed and built a double biquad antenna 
            for WiFi signal transmission. This project involved RF engineering principles, 
            antenna theory, and practical construction techniques.
          </p>
        </section>

        <section>
          <h2>Materials</h2>
          <ul>
            <li>12 AWG copper wire</li>
            <li>Female BNC panel mount connector </li>
            <li>BNC male to SMA male connector</li>
            <li>Electrical tape</li>
            <li>0.8mm thick aluminum reflector </li>
          </ul> 
        </section>

        <section>
          <h2>Labeled Diagram</h2>
          <Image
            src="/images/wifi-lab-diagram.jpg"
            width={600}
            height={600}
          /> 
        </section>

        <section>
          <h2>The Process</h2>
          <p>
            Section not done yet but planning to write about the other antennas i tried to make and why this one ended up being the best,
            remember to mention andrew mcneil 
          </p>
        </section>
      </div>
    </div>
  )
}