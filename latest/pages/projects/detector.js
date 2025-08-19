import Hero from '../../components/Hero'
import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Detector() {
  return (
    <div> 
        <Hero showBackButton={true} />
        <div className={styles.projectDetail}> 

            <h2>Detector</h2> 

            <div className={styles.projectContent}>
                <section>
                <h2>Overview</h2>
                <p>
                    Most of this documentation comes from my Science Olympiad Design Log. 
                </p>
                </section>

                <section>
                <h2>Materials</h2>
                <ul>
                    <li>Elegoo Uno R3: microcontroller to connect sensor, LCD, and LEDs </li>
                    <li>LEDs: light up to represent different mass ranges (which are specified at the specific tournament)</li>
                    <li>Resistors: used to reduce current for LEDs, control contrast for the LCD, and create the wheatstone bridge </li>
                    <li>24-bit ADC (attached to surface mount adapter board with pin headers): amplifies the signal from the wheatstone bridge (after going through a network of resistors, capacitors, and a transistor), making it easier for the microcontroller to detect </li>
                    <li>Strain gauge: increases resistance (decreases voltage) based on the amount it bends (undergoing tension or compression when a load is applied)  </li>
                    <li>Strain gauge apparatus: has the piece of Lexan (mounted on wood) which bends when a load is applied; the strain gauge is attached to this. The 3D printed cover ensures consistency in centering the mass </li>
                    <li>16x2 LCD display module: displays mass readings from the microcontroller </li>
                </ul> 
                </section>

                <section>
                <h2>Labeled Diagram</h2>
                <Image
                    src="/images/detector-diagram.jpg"
                    width={800}
                    height={600}
                /> 
                </section>

                <section>
                <h2>The Process</h2>
                <p>
                    To construct the device, a strain gauge apparatus was first created using pieces of wood and a slab of Lexan (clear plastic). 
                    The strain gauge (350 ohms) was mounted using cyanoacrylate glue and sealed using silicon sealant. 
                    Next, it was added as a variable resistor in a wheatstone bridge, which consisted of two 220 ohm resistors and one 350 ohm resistor to keep it balanced. 
                    The resulting signal was put into a load cell amplifier (based on a typical HX711 board) consisting of a network of resistors, capacitors, one transistor, and a 24-bit ADC, which was first soldered to a surface mount adapter board with pin headers. 
                    Finally, the microcontroller interprets the signal and outputs a mass value based on a regression equation, indicating whether certain LEDs should light up and showing masses on the 16x2 LCD display. 
                </p>
                </section>

                <section>
                <h2>Previous Iterations</h2>
                <p>
                    yap
                </p>
                </section>
            </div> 
        </div>
    </div>
  )
}