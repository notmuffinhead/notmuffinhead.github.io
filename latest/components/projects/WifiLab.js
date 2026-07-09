import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'

export default function WifiLab() {
  return (
    <div className={styles.projectContent}>
      <section>
        <h2>{"Overview"}</h2>
        <p>{`
          Wifi Lab is a Science Olympiad event where teams "construct an antenna device prior to the tournament
          that is designed to transmit/receive a signal at 2.4 GHz
          and complete a written test on the principles of EM wave propagation."
          I made the antenna, and my partner and I assembled a binder for the written portion together.
          This antenna achieved the maximum transmission distance (22m) at the NY State Tournament in 2023.
        `}</p>
        <div className={styles.fileLink}>
          <a href="/pdfs/Wifi-Lab-Rules-Manual-2023.pdf" target="_blank" rel="noopener noreferrer">
            {"Full Event Guidelines"}
          </a>
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
          alt="Hand-labeled photos of the double biquad antenna: copper wire soldered to a female BNC connector 15 mm above a 19 by 11 cm aluminum reflector, with a BNC male to SMA male adapter attached below"
          width={936}
          height={880}
          className={styles.projectImage}
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
          {"Andrew McNeil's YouTube videos were really helpful for learning to build these antennas. "}
          {"I think I got the idea to use the BNC connector from somewhere else, but can't recall the source."}
        </p>
      </section>

      <section>
        <h2>{"Study Guide"}</h2>
        <p>
          {"The binder that my partner and I put together for the test-taking portion of the event!"}
        </p>
        <div className={styles.fileLink}>
          <a href="/pdfs/Wifi-Lab-SciOly-Study-Guide-3.0.pdf" target="_blank" rel="noopener noreferrer">
            {"Wifi Lab SciOly Study Guide 3.0"}
          </a>
        </div>
        <p>
          {"I focused on learning about working principles and all the general knowledge, while my partner did most of the math."}
        </p>
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
  )
}
