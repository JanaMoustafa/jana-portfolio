import { useEffect, useRef } from 'react'
import { about } from '../data/content'
import { useReveal } from '../lib/hooks'
import { scrubWords } from '../lib/motion'

export default function About() {
  const ref = useReveal()
  const statement = useRef(null)
  useEffect(() => scrubWords(statement.current), [])
  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title" data-split>
            About
          </h2>
        </div>
        <div className="about__grid">
          <p className="about__statement" ref={statement}>
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
