import { useEffect, useRef } from 'react'
import { experience } from '../data/content'
import { gsap, ScrollTrigger, reducedMotion, revealWithin } from '../lib/motion'
import { ArrowUpRight } from './Icons'

export default function Experience() {
  const root = useRef(null)

  useEffect(() => {
    const el = root.current
    const cleanupReveal = revealWithin(el)
    if (!el || reducedMotion()) {
      el?.querySelectorAll('.xp__item').forEach((i) => i.classList.add('is-active'))
      return cleanupReveal
    }
    const ctx = gsap.context(() => {
      // The timeline rail draws itself as you read down the list.
      gsap.fromTo(
        '.xp__rail-fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.xp__list', start: 'top 62%', end: 'bottom 62%', scrub: 0.5 },
        },
      )
      gsap.utils.toArray('.xp__item').forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 62%',
          end: 'bottom 62%',
          toggleClass: { targets: item, className: 'is-active' },
        })
      })
    }, el)
    return () => {
      ctx.revert()
      cleanupReveal()
    }
  }, [])

  return (
    <section className="section xp" id="experience" ref={root}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title" data-reveal>
            Experience
          </h2>
          <p className="section__lead" data-reveal>
            Products I have shipped and teams I have worked with, most recent first.
          </p>
        </div>

        <div className="xp__layout">
          <div className="xp__rail" aria-hidden="true">
            <div className="xp__rail-fill" />
          </div>
          <ol className="xp__list">
            {experience.map((job) => (
              <li className="xp__item" key={`${job.org}-${job.role}`}>
                <div className="xp__dot" aria-hidden="true" />
                <div className="xp__head" data-reveal>
                  <div className="xp__title">
                    <h3>
                      {job.role}
                      <span className="xp__org">
                        {job.link ? (
                          <a href={job.link} target="_blank" rel="noopener noreferrer">
                            {job.org}
                            <ArrowUpRight />
                          </a>
                        ) : (
                          job.org
                        )}
                      </span>
                    </h3>
                    <p className="xp__summary">{job.summary}</p>
                  </div>
                  <p className="xp__period">{job.period}</p>
                </div>
                <ul className="xp__bullets" data-reveal>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul className="chips" data-reveal aria-label="Technologies">
                  {job.stack.map((s) => (
                    <li className="chip" key={s}>
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
