import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'

export default function IntelliHeat() {
  return (
    <div className={styles.projectContent}>
      <section>
        <h2>{"Overview"}</h2>
        <p>{`
          IntelliHeat is a closed-loop temperature control system I built for Build18, CMU's ECE hackathon.
          You set a target temperature on a touchscreen, and the system physically turns the stove dial to maintain it, based on a temperature sensor inside the pot.
          I developed all of the software, while my teammates helped with CAD and designing the motor system.
        `}</p>

        <Image
          src="/images/intelliheat-polished.jpg"
          alt="The assembled IntelliHeat system: the motor unit mounted over a stove dial, the cylindrical temperature sensor pod, and the touchscreen controller displaying target temperature and status"
          width={1648}
          height={1002}
          className={styles.projectImage}
        />

        <div className={styles.fileLink}>
          <a href="https://github.com/notmuffinhead/intelliheat" target="_blank" rel="noopener noreferrer">
            {"GitHub Repo"}
          </a>
        </div>
      </section>

      <section>
        <h2>{"Main Components"}</h2>
        <ul>
          <li>{"Main Controller (ESP32-S3): The central hub featuring an LCD touchscreen. It runs the PID algorithm and hosts the LVGL-based user interface."}</li>
          <li>{"Temperature Sensor (ESP32-C3): A battery-powered remote node using a waterproof NTC thermistor to collect temperature data."}</li>
          <li>{"Motor Controller (ESP32-S3): Receives movement commands and drives a stepper motor through a harmonic drive."}</li>
        </ul>

        <Image
          src="/images/intelliheat-components.jpg"
          alt="IntelliHeat components laid out on a table: the breadboarded ESP32 main controller with battery pack, the stove dial motor unit, the wireless temperature sensor with thermistor probe, and the LCD touchscreen"
          width={1575}
          height={964}
          className={styles.projectImage}
        />
      </section>

      <section>
        <h2>{"The Process"}</h2>
        <p>{`
          Working on this project taught me how to develop a system from the ground up, specifically how to work with unfamiliar hardware.
          While it was definitely stressful at times, I really enjoyed the freedom of making all the high-level design choices for the software.
        `}</p>
        <p>{`
          Since I had never worked with ESP32s before, I knew I needed a head start.
          I spent my break familiarizing myself with programming them and looking for documentation on the LCD display.
          Once I got the display running on example sketches, I mapped out a control architecture, trying to keep the logic as simple as possible.
          To make sure the components could wirelessly communicate with each other before build week, I pre-tested the code (running on the three ESP32s) using "dummy" temperatures and movement commands.
        `}</p>
        <p>{`
          Build week was pretty hectic, especially since I was also competing in NexHacks that same weekend, but we managed to get the system fully operational by Thursday.
          I started by incorporating the temperature sensor; it was a relatively simple setup, though I had to invert the equation and add a constant to get the readings accurate.
        `}</p>
        <p>{`
          The biggest challenge was the LCD display.
          I hadn't finished the user interface over break and spent a long time troubleshooting why my code wouldn't run, only to realize some of my board configuration settings were wrong.
          After a day or two of struggling, I finally got the UI stable and integrated everything with the motor control my teammates had been working on.
        `}</p>
      </section>
    </div>
  )
}
