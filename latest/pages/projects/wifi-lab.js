import Hero from '../../components/Hero'
import ProjectFooter from "../../components/ProjectFooter"
import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function WifiLab() {
  return (
    <div> 
      <Hero/>

      <div className={styles.projectDetail}>
        
        <h2>Wifi Lab</h2> 

        <div className={styles.projectContent}>
          <section>
            <h2>{"Overview"}</h2>
            <p>
              {` 
              Wifi lab is a Science Olympiad event where you construct a 2.4GHz antenna before the tournament, 
              and take a written test on the principles of EM wave propagation. 
              This antenna achieved max transmission distance (22m) at the New York State Science Olympiad Tournament in 2023, and I ended up getting Third Place.
              `}
            </p>
          </section>

          <section>
            <h2>{"Materials"}</h2>
            <ul>
              <li>{"12 AWG copper wire"}</li>
              <li>{"Female BNC panel mount connector"}</li>
              <li>{"BNC male to SMA male connector"}</li>
              <li>{"Electrical tape"}</li>
              <li>{"0.8mm thick aluminum reflector"}</li>
            </ul> 
          </section>

          <section>
            <h2>{"Labeled Diagram"}</h2>
            <Image
              src="/images/wifi-lab-diagram.jpg"
              width={600}
              height={600}
            /> 
          </section>

          <section>
            <h2>{"The Process"}</h2>
            <p>
              {"I also built and tested the following antennas (which didn't perform as well):"} 
              <ul>
                <li>{"Cloverleaf antenna"}</li>
                <li>{"Single biquad antenna"}</li>
                <li>{"Double biquad antenna (using thinner wire)"}</li>
                <li>{"Parabolic double biquad antenna"}</li> 
              </ul>
              {"Andrew McNeil's YouTube videos were really helpful for learning to build these antennas."} 
            </p>
          </section>

          <section>
            <h2>{"Study Guide"}</h2>
            <p>
              {"The binder that my partner and I put together for the test-taking portion of the event!"} 
              {"(insert file here)"}
            </p>
          </section>
        </div>
      </div>
      <ProjectFooter/> 
    </div>
  )
}