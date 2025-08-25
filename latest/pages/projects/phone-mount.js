import Hero from '../../components/Hero'
import ProjectFooter from "../../components/ProjectFooter"
import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PhoneMount() {
  return (
    <div> 
        <Hero/>
        <div className={styles.projectDetail}> 

            <h2>{"Phone Mount"}</h2> 

            <div className={styles.projectContent}>
            <section>
            <h2>{"Inspiration?"}</h2>
            <p>{`
                I've always wanted a hands-free way to record POV mountain biking clips, but didn't want to buy a GoPro or separate camera.
                However, not many suitable phone mounts exist; chest mounts are large and expensive, and helmet mounts don't have a great angle. 
                There exist bite mounts for smaller action cameras, but having one for something as heavy as a modern phone wouldn't be too smart.
                One ride, I had been drinking Gatorade and occasionally had to hold the bottle with just my mouth while my hands were occupied with steering. 
                Random ideas flowed into my mind for the rest of the ride, and not too long after, I had ... this (again, wouldn't call it a smart idea).
                As a result, I don't recommend making this for utility; it's just the aftermath of an intrusive thought taken seriously. 
            `}</p>
            </section>

            <section>
            <h2>{"A Video I Took with It"}</h2> 
            <p>
                {"Insert video here somehow"}
            </p>
            </section>

            <section>
            <h2>{"Materials"}</h2>
            <ul>
                <li>{"Gatorade bottle (just the top third of it)"}</li>
                <li>{"Strong glue idk"}</li>
                <li>{"3 screws"}</li>
                <li>{"2 strips of double-sided Velcro (each a few cm more than the circumference of your phone)"}</li>
                <li>{"3D printing stuff"}</li>
            </ul> 
            </section>

            <section>
            <h2>{"Construction"}</h2>
            <p>
                {"I lost the original CAD files, but making this was pretty easy. CAD the following parts:"}
            </p> 
            <ul>
                <li>{"A phone tray (flat on the bottom, with raised edges so that your phone can't slide out; consider adding a lanyard loop to this so that you can wear it around your neck when not using it)"}</li>
                <li>{"Something that the Gatorade bottle can screw onto, with a wider base that has slots for two velcro straps"}</li>
            </ul> 
            <p>
                {"Then, referencing the picture, glue the two parts together and screw on the cut Gatorade bottle."} 
                {"Congrats on making something that can film POV mountain biking videos but also maybe destroy your teeth if you aren't careful!"}
            </p> 
            </section>
            </div>
        </div>
        <ProjectFooter/>
    </div>
  )
}