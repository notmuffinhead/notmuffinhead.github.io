import Hero from '../../components/Hero'
import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function WifiLab() {
  return (
    <div> 
      <Hero showBackButton={true} />

      <div className={styles.projectDetail}>
        
        <h2>Wifi Lab</h2> 

        <div className={styles.projectContent}>
          <section>
            <h2>Overview</h2>
            <p>
              talk a bit more here 
              This antenna achieved max distance (22m) at the New York State Science Olympiad Tournament in 2023. 
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
    </div>
  )
}