import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PhoneMount() {
  return (
    <div className={styles.projectDetail}>
      <Link href="/" className={styles.backButton}>
        ← Back to Portfolio
      </Link>
      
      <div className={styles.projectHeader}>
        <h1> Phone Bite Mount</h1> 
      </div>

      <div className={styles.projectContent}>
        <section>
          <h2>Inspiration?</h2>
          <p>
            I've always wanted a hands-free way to record POV mountain biking clips, but didn't want to buy a GoPro or separate camera.
            However, not many suitable phone mounts exist; chest mounts are large and expensive, and helmet mounts seem pretty sketchy. 
            There exist bite mounts for smaller action cameras, but having one for something as heavy as a modern phone wouldn't be too smart.
            One ride, I had been drinking Gatorade and occasionally had to hold the bottle with just my mouth while my hands were occupied with steering. 
            Random ideas flowed into my mind for the rest of the ride, and not too long after, I had ... this.
            As a result, I don't recommend making this for utility; it's just the aftermath of an intrusive thought taken seriously. 
          </p>
        </section>

        <section>
          <h2>A Video I Took with It</h2> 
          <p>
            Insert video here somehow
          </p>
        </section>

        <section>
          <h2>Materials</h2>
          <ul>
            <li>Gatorade bottle </li>
            <li>3 screws </li>
            <li>Velcro </li>
            <li>3D printing supplies </li>
          </ul> 
        </section>

        <section>
          <h2>The Process</h2>
          <p>
            Maybe put down some stl files idk 
          </p>
        </section>
      </div>
    </div>
  )
}