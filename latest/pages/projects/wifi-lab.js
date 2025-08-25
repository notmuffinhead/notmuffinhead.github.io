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
              Wifi Lab is a Science Olympiad event where teams "construct an antenna device prior to the tournament 
              that is designed to transmit/receive a signal at 2.4 GHz
              and complete a written test on the principles of EM wave propagation." 
              I made the antenna, and my partner and I assembled a binder for the written portion together. 
              This antenna achieved the maximum transmission distance (22m) at the NY State Tournament in 2023.
              `}
            </p>
            <div className={styles.pdfLink}>
              <Link href="/pdfs/Wifi-Lab-Rules-Manual-2023.pdf" target="_blank">
                Full Event Guidelines
              </Link>
            </div>
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
            </p>
            <ul>
              <li>{"Cloverleaf antenna"}</li>
              <li>{"Single biquad antenna"}</li>
              <li>{"Double biquad antenna (using thinner wire)"}</li>
              <li>{"Parabolic double biquad antenna"}</li> 
            </ul>
            <p> 
              {"Andrew McNeil's YouTube videos were really helpful for learning to build these antennas."} 
              {"I got the idea to use the BNC connector from somewhere else, but can't find the source looking back."} 
            </p>
          </section>

          <section>
            <h2>{"Study Guide"}</h2>
            <p>
              {"The binder that my partner and I put together for the test-taking portion of the event!"} 
            </p>
            <div className={styles.pdfLink}>
              <a href="/pdfs/Wifi-Lab-Scioly-Study-Guide-3.0.pdf" target="_blank">
                Wifi Lab Scioly Study Guide 3.0
              </a>
            </div>
          </section>

          <section>
            <h2>{"Medals"}</h2>
            <ul>
              <li>{"1st Place - Battle at Valley Forge Invitational (41 teams)"}</li>
              <li>{"5th Place - Long Island Science Olympiad Invitational (53 teams)"}</li> 
              <li>{"1st Place - Nassau West Regional Tournament (42 teams)"}</li>
              <li>{"4th Place - Science Olympiad at UPenn Invitational (57 teams)"}</li>
              <li>{"3rd Place - New York Science Olympiad State Tournament (60 teams)"}</li>
            </ul>
          </section>
        </div>
      </div>
      <ProjectFooter/> 
    </div>
  )
}