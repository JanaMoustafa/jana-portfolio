import { certifications, education } from '../data/content'
import { useReveal } from '../lib/hooks'
import { ArrowUpRight } from './Icons'

export default function Education() {
  const ref = useReveal()
  return (
    <section className="section edu" id="education" ref={ref}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title" data-reveal>
            Education
          </h2>
        </div>

        <ul className="edu__list" data-reveal-group>
          {education.map((e) => (
            <li className="edu__item" key={e.school} data-reveal>
              <div>
                <h3>{e.school}</h3>
                <p className="edu__degree">{e.degree}</p>
                <p className="edu__note">{e.note}</p>
              </div>
              <p className="edu__period">{e.period}</p>
            </li>
          ))}
        </ul>

        <div className="section__head section__head--sub">
          <h3 className="projects__subtitle" data-reveal>
            Certifications
          </h3>
          <p className="section__lead" data-reveal>
            Thirteen certificates from IBM, NVIDIA, Nokia, the Ministry of Communications and others. Each opens the original document.
          </p>
        </div>
        <ul className="certs" data-reveal-group>
          {certifications.map((c) => (
            <li key={c.url} data-reveal>
              <a className="cert" href={c.url} target="_blank" rel="noopener noreferrer">
                <span className="cert__issuer">{c.issuer}</span>
                <span className="cert__title">{c.title}</span>
                <span className="cert__date">{c.date}</span>
                <span className="cert__view">
                  View certificate
                  <ArrowUpRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
