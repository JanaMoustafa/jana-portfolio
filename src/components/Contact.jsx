import { profile } from '../data/content'
import { useMagnetic, useReveal } from '../lib/hooks'
import { Download, GitHub, LinkedIn, Mail, Phone } from './Icons'

export default function Contact() {
  const ref = useReveal()
  const mail = useMagnetic(0.12)
  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <h2 className="contact__title" data-split>
          Let's build something that works.
        </h2>
        <p className="contact__lead" data-reveal>
          I am looking for a team where I can own models end to end, from the data to the product. If that sounds like yours, write to me.
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`} data-reveal ref={mail}>
          <Mail />
          <span>{profile.email}</span>
        </a>
        <ul className="contact__links" data-reveal-group>
          <li data-reveal>
            <a className="btn btn--ghost" href={profile.phoneHref}>
              <Phone />
              {profile.phone}
            </a>
          </li>
          <li data-reveal>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn />
              LinkedIn
            </a>
          </li>
          <li data-reveal>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
              <GitHub />
              GitHub
            </a>
          </li>
          <li data-reveal>
            <a className="btn btn--primary" href={profile.cv} download="Jana_Sabry_CV.pdf">
              <Download />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
