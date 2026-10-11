import { about } from '../data/content'
import { useReveal } from '../lib/hooks'

export default function About() {
  const ref = useReveal()
  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title" data-reveal>
            About
          </h2>
        </div>
        <div className="about__grid">
          <p className="about__statement" data-reveal>
            {about.statement}
          </p>
          <dl className="about__facts" data-reveal-group>
            {about.facts.map((f) => (
              <div className="about__fact" key={f.label} data-reveal>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
