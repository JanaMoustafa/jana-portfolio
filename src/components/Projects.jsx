import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { clientSites, featuredProjects } from '../data/content'
import { categories, workProjects } from '../data/projects'
import { Flip, ScrollTrigger, gsap, reducedMotion } from '../lib/motion'
import { useReveal, useTilt } from '../lib/hooks'
import { ArrowUpRight } from './Icons'

function FeatureCard({ project }) {
  const tilt = useTilt(5)
  const body = (
    <>
      <div className="feature__top" data-clip-item>
        <p className="feature__kind">{project.kind}</p>
        {project.url && (
          <span className="feature__open" aria-hidden="true">
            <ArrowUpRight />
          </span>
        )}
      </div>
      <h3 className="feature__name" data-clip-item>
        {project.name}
      </h3>
      <p className="feature__desc" data-clip-item>
        {project.description}
      </p>
      <ul className="chips chips--quiet" aria-label="Technologies" data-clip-item>
        {project.stack.map((s) => (
          <li className="chip" key={s}>
            {s}
          </li>
        ))}
      </ul>
    </>
  )
  const cls = `feature feature--${project.accent}`
  return (
    <li data-clip>
      {project.url ? (
        <a
          className={cls}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          ref={tilt}
          aria-label={`${project.name}, open live site`}
          data-cursor="Open"
        >
          {body}
        </a>
      ) : (
        <div className={cls} ref={tilt}>
          {body}
        </div>
      )}
    </li>
  )
}

const counts = Object.fromEntries(
  categories.map((c) => [c.key, c.key === 'all' ? workProjects.length : workProjects.filter((p) => p.category === c.key).length]),
)
const labelFor = Object.fromEntries(categories.map((c) => [c.key, c.label]))
const LIMIT = 9

function WorkGrid() {
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)
  const grid = useRef(null)
  const bar = useRef(null)
  const pill = useRef(null)
  const pending = useRef(null)

  // Slide the highlight pill under the active filter button.
  const placePill = useCallback(() => {
    const active = bar.current?.querySelector('.filter.is-active')
    if (!active || !pill.current) return
    pill.current.style.width = `${active.offsetWidth}px`
    pill.current.style.height = `${active.offsetHeight}px`
    pill.current.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`
  }, [])

  useEffect(() => {
    placePill()
    const ro = new ResizeObserver(placePill)
    if (bar.current) ro.observe(bar.current)
    document.fonts?.ready.then(placePill)
    return () => ro.disconnect()
  }, [placePill])

  const capture = () => {
    if (!reducedMotion() && grid.current) {
      pending.current = {
        state: Flip.getState(grid.current.querySelectorAll('.work')),
        height: grid.current.offsetHeight,
      }
    }
  }

  const choose = (key) => {
    if (key === filter) return
    capture()
    setExpanded(false)
    setFilter(key)
  }

  const toggleExpanded = () => {
    capture()
    if (expanded && grid.current) {
      // Collapsing removes rows above the button; keep the grid in view.
      const top = grid.current.getBoundingClientRect().top
      if (top < 0) grid.current.scrollIntoView({ block: 'start' })
    }
    setExpanded((v) => !v)
  }

  useLayoutEffect(() => {
    placePill()
    const p = pending.current
    pending.current = null
    if (!p || !grid.current) {
      ScrollTrigger.refresh()
      return
    }
    const el = grid.current
    const newHeight = el.offsetHeight
    gsap.fromTo(el, { height: p.height }, { height: newHeight, duration: 0.6, ease: 'power3.inOut', clearProps: 'height' })
    Flip.from(p.state, {
      duration: 0.6,
      ease: 'power3.inOut',
      absolute: true,
      stagger: 0.02,
      onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.94, y: 16 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.15 }),
      onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.94, duration: 0.3, ease: 'power2.in' }),
      onComplete: () => ScrollTrigger.refresh(),
    })
  }, [filter, expanded, placePill])

  // Light that follows the pointer inside whichever card is hovered.
  const onPointerMove = (e) => {
    const card = e.target.closest('.work')
    if (!card) return
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const matching = workProjects.filter((p) => filter === 'all' || p.category === filter)
  const visibleNames = new Set(matching.slice(0, expanded ? matching.length : LIMIT).map((p) => p.name))
  const shown = visibleNames.size
  const hiddenCount = matching.length - LIMIT

  return (
    <>
      <div className="filters" ref={bar} role="group" aria-label="Filter projects by category" data-reveal>
        <span className="filters__pill" ref={pill} aria-hidden="true" />
        {categories.map((c) => (
          <button
            type="button"
            key={c.key}
            className={`filter${filter === c.key ? ' is-active' : ''}`}
            aria-pressed={filter === c.key}
            onClick={() => choose(c.key)}
          >
            {c.label}
            <span className="filter__count">{counts[c.key]}</span>
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        Showing {shown} of {matching.length} {filter === 'all' ? 'projects' : `${labelFor[filter].toLowerCase()} projects`}
      </p>

      <ul className="works" ref={grid} onPointerMove={onPointerMove} data-reveal-group>
        {workProjects.map((p) => (
          <li
            key={p.name}
            className={`work work--${p.category}${visibleNames.has(p.name) ? '' : ' is-hidden'}`}
            data-flip-id={p.name}
            data-reveal
          >
            <div className="work__top">
              <p className="work__kind">{p.kind}</p>
              {p.metric && <p className="work__metric">{p.metric}</p>}
            </div>
            <h4 className="work__name">{p.name}</h4>
            {p.context && <p className="work__context">{p.context}</p>}
            <p className="work__desc">{p.description}</p>
            {p.highlights.length > 0 && (
              <ul className="work__highlights" aria-label="Highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <ul className="chips chips--quiet work__stack" aria-label="Technologies">
              {p.stack.map((s) => (
                <li className="chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>
            {p.url && (
              <a className="work__link" href={p.url} target="_blank" rel="noopener noreferrer">
                {p.linkLabel || 'Open project'}
                <ArrowUpRight />
              </a>
            )}
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className="works__more">
          <button type="button" className="btn btn--ghost" onClick={toggleExpanded} aria-expanded={expanded}>
            {expanded ? 'Show fewer projects' : `Show all ${matching.length} projects`}
          </button>
        </div>
      )}
    </>
  )
}

export default function Projects() {
  const ref = useReveal()
  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title" data-split>
            Projects
          </h2>
          <p className="section__lead" data-reveal>
            Web products I have built and shipped, the machine learning and systems work behind them, and websites for clients.
          </p>
        </div>

        <ul className="features">
          {featuredProjects.map((p) => (
            <FeatureCard project={p} key={p.name} />
          ))}
        </ul>

        <div className="projects__sub">
          <h3 className="projects__subtitle" data-split>
            More projects
          </h3>
          <WorkGrid />
        </div>

        <div className="projects__sub">
          <h3 className="projects__subtitle" data-split>
            Client websites
          </h3>
          <ul className="sites" data-reveal-group>
            {clientSites.map((s) => (
              <li key={s.url} data-reveal>
                <a className="site" href={s.url} target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                  <span className="site__name">{s.name}</span>
                  <span className="site__kind">
                    {s.kind}, {s.stack}
                  </span>
                  <ArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
