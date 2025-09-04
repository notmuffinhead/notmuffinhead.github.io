import Hero from '../../components/Hero'
import VideoPlayer from '../../components/VideoPlayer'
import ProjectFooter from "../../components/ProjectFooter"
import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image' 

export default function PhoneMount() {
  return (
    <div> 
        <Hero/>

        <div className={styles.projectDetail}> 

            <h2>{"Phone Mount"}</h2> 

            <div className={styles.projectContent}>
            
            <p>{"(note: this one is pretty unserious, made it just for fun)"}</p>

            <section>
            <h2>{"Inspiration?"}</h2>
            <p>{`
                I've always wanted a hands-free way to record POV mountain biking clips, but didn't want to buy a GoPro or separate camera.
                However, not many suitable phone mounts exist; chest mounts are large and expensive, and helmet mounts don't offer a great angle. 
                There exist bite mounts for smaller action cameras, but having one for something as heavy as a modern phone wouldn't be too smart.
                One ride, I had been drinking Gatorade and occasionally had to hold the bottle with just my mouth while my hands were occupied with steering. 
                Not too long after, I had ... this (again, wouldn't call it a smart idea).
                As a result, I really don't recommend making this for utility; it's just the aftermath of an intrusive thought taken seriously. 
            `}</p>
            </section>

            <section>
            <h2>{"A Video I Took with It"}</h2> 
            <VideoPlayer src="/videos/mountain-biking-pov.mp4" /> 
            <p>
                {"This was at Redemption Center in Pittsburgh!"}
            </p>
            
            </section>

            <section>
            <h2>{"Materials"}</h2>
            <ul>
                <li>{"Gatorade bottle - just the top third of it"}</li>
                <li>{"Glue - I think I used E6000, not sure though"}</li>
                <li>{"3 screws"}</li>
                <li>{"2 strips of double-sided Velcro - each a few cm more than the circumference of your phone"}</li>
                <li>{"3D printer"}</li>
            </ul> 
            </section>

            <section>
            <h2>{"Construction"}</h2>
            <p>
                {"I lost the original CAD files, but making this was simple. CAD and 3D print the following parts:"}
            </p> 
            <div className={styles.flexContainer}>
                <div className={styles.flexText}>
                    <ul>
                        <li>{"A phone tray (flat on the bottom, with raised edges so that your phone can't slide out; consider adding a lanyard loop to this so that you can wear it around your neck when not using it)"}</li>
                        <li>{"Something that the Gatorade bottle can screw onto, with a wider base that has slots for two velcro straps"}</li>
                    </ul> 
                </div>
                <div className={styles.flexImage}>
                    <Image
                        src="/images/phone-mount-reference.jpeg"  
                        alt=""
                        width={3783}
                        height={2770}
                        style={{
                            width: '100%', 
                            height: 'auto' 
                        }}
                    />
                </div>
            </div>
            <p>
                {`
                Then, referencing the picture, glue the two parts together and screw on the cut Gatorade bottle. 
                Congrats on making something that can maybe film POV mountain biking videos (but also maybe destroy your teeth if you aren't careful)!
                `}
            </p> 
            </section>
            </div>
        </div>
        <ProjectFooter/>
    </div>
  )
}