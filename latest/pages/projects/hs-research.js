import Hero from '../../components/Hero'
import ProjectFooter from "../../components/ProjectFooter"
import SlidePlayer from "../../components/SlidePlayer"
import PDFViewer from "../../components/PDFViewer"
import styles from '../../styles/ProjectDetail.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HSResearch() {
  return (
    <div> 
      <Hero/>

      <div className={styles.projectDetail}>
        
        <h2>{"High School Research"}</h2> 

        <div className={styles.projectContent}>
          <section>
            <p>{` 
                Some projects here are definitely better than others, but the growth year to year was pretty cool to see:
                I went from writing five proposals in freshman year (and not enjoying it much) to making something I was super proud of in my senior year.  
                Research challenged me a lot, and I'm glad I stuck through it despite wanting to quit more than a few times. 
                This page has all my work, with my thoughts on the whole experience below.
            `}</p> 
          </section>

          <section>
            <h2>{"12th Grade - Big Year"}</h2>
            <p>{`
                Before the school year, I had spent the summer in the Lab of Dr. Xinwei Mao at Stony Brook University. 
                I had gotten this opportunity through cold-emailing, since I wanted to explore Civil & Environmental Engineering. 
                I was mentored by Siwei Chen, a PhD student, and I'm very grateful he gave me ways to contribute to his research. 
                During this year, I was named a Regeneron STS Semifinalist, attended LISEF (Long Island Science & Engineering Fair), and won 3rd Place at NYSSEF (New York Science & Engineering Fair). 
                Later, I was third author on the resulting publication. 
            `}</p> 
            <PDFViewer
                src="/pdfs/Senior-Poster-Board.pdf"
                buttonText="View Poster Board"
            />
            <PDFViewer
                src="/pdfs/12th-Grade-Regeneron-Paper.pdf"
                buttonText="View Regeneron Paper"
            />
            <div className={styles.fileLink}>
              <Link href="https://doi.org/10.1016/j.watres.2024.122562" target="_blank">
                Publication
              </Link>
              <Link href="/pdfs/My-Contributions.pdf" target="_blank">
                My Contributions
              </Link>
            </div>
          </section>

          <section>
            <h2>{"11th Grade - Brimagelle"}</h2>
            <p>{`
                This was a super fun year--I worked with a great team (we're still friends today) on a project I thought was super cool.
                I was very eager to learn the whole workflow around training and deploying ML models, and was excited to create the physical device. 
                This was the first year I got to work on a poster board as well; we presented it at the Long Island Science Congress, receiving the Achievement Award. 
                We were also Finalists in JYEM (Top 5%), a research paper competition, and were invited to the exposition in New Jersey, winning prizes (forgot which). 
                Earlier, we participated in the MIT BeaverWorks CRE[AT]E Assistive Technology Challenge and got $125 funding for our Raspberry Pi! 
            `}</p> 
            <PDFViewer
                src="/pdfs/Brimagelle-Poster-Board.pdf"
                buttonText="View Poster Board"
            />
            <PDFViewer
                src="/pdfs/11th-Grade-JEI-Paper.pdf"
                buttonText="View Manuscript"
            />
          </section>

          <section>
            <h2>{"10th Grade - PMFCs"}</h2>
            <p>{`
                We made slides and presented them at virtual science fairs and research competitions in 9th and 10th grade due to COVID. 
                Here are some materials we submitted to JYEM (we were named Finalists, top 5%): 
            `}</p> 
            <SlidePlayer
                src="https://docs.google.com/presentation/d/e/2PACX-1vT6k9u3PBQoi6PoUVdLZGqX8EzFQ0yyvtTTZXZsJ8iYqCStpJoJS6fJvUnwWe4GLA7a7eoKnAMmgiUm/pubembed?"
            />
            <PDFViewer
                src="/pdfs/10th-Grade-JYEM-Paper.pdf"
                buttonText="View Manuscript"
            />
          </section>

          <section>
            <h2>{"9th Grade - Lots of Flies"}</h2>
            <p>{"A research proposal I didn't go through with:"}</p>
            <SlidePlayer 
                src="https://docs.google.com/presentation/d/e/2PACX-1vT6ZcWGSFcviAfor31owoB6Rc7Dwqf5_4mt2To35n3JuJ3ioVOKdOcxrRoBdxo2rkwDsThqbw0xWCyZ/pubembed?"
            />
            <p>{"The actual project:"}</p>
            <SlidePlayer 
                src="https://docs.google.com/presentation/d/e/2PACX-1vQWhcPRzWkZEyitGehofXtY044Puz_MdijSTjtu-_zK_fWWbFbS9P6a75z9BWWF7KZ361PyE_oosLkR/pubembed?" 
            />
            <p>{"I recall writing a manuscript as well, but couldn't find it."}</p>
          </section>

          <section>
            <h2>{"The Experience"}</h2>
            <p>{`
                I wanted to expand on my thoughts about the whole experience, because I thought it would be nice for everything to be written down (regardless of whether anyone reads it lol). 
                I think I struggled way more with high school research than my friends did and didn't really have much clarity on what was going on. 
                However, I managed to figure it out; now, in my sophomore year of college, I enjoy doing research and hope to pursue graduate school. 
            `}</p>
            <p>{`
                The first two years were particularly rough; I had a difficult time working with my partner, doing most of the work myself, and the projects were inherently scuffed. 
                In freshman year, our flies kept dying, which made gathering data really hard. 
                Luckily, I pivoted away from that the second year, focusing my proposal on something more similar to engineering. 
                This was more enjoyable, but we still had to put in lots of extra time during the school day and after to gather continuous voltage data. 
            `}</p> 
            <p>{`
                I started to enjoy research a lot more during junior year. 
                I designed the physical assembly and programmed the Raspberry Pi to communicate data from the ML model to the user, which was a lot of fun. 
                I also helped with annotating the training data and gathering more training data (with my phone camera, from the streets). 
                And, since we started with nothing, it was super satisfying to see everything working at the end--kind of like "wow I can't believe we just made that". 
            `}</p>
            <p>{`
                My senior year, I felt like everything was coming together; I had done good work over the summer, and continued it. 
                Since data collection was a bit delayed, I sometimes drove to Stony Brook after school to help out; 
                we actually got all the data in late October, which didn't leave much time for me to write the Results, Discussion, and Conclusion of my manuscript before the Regeneron deadline.
                I was extremely proud of the paper; it was clear, with a good amount of data (enough to be reasonably confident when writing about it). 
                After writing the paper, I spent the rest of the year refining and practicing my presentation.
                I didn't have much experience with public speaking, so it was pretty difficult, and I unintentionally spent lots of time memorizing every word (out of stress).
                But things ended up turning out okay, and it culminated in a full-circle moment where I presented to the entire research program. 
                I watch the seniors' presentations every year before that, and didn't think I'd be presenting there until I was. 
            `}</p>
          </section>
        </div>
      </div>

      <ProjectFooter/> 
    </div>
  )
}