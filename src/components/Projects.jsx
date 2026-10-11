import { clientSites, featuredProjects, moreProjects } from '../data/content'
import { useReveal, useTilt } from '../lib/hooks'
import { ArrowUpRight } from './Icons'

function FeatureCard({ project }) {
  const tilt = useTilt(5)
  const body = (
    <>
      <div className="feature__top">
        <p className="feature__kind">{project.kind}</p>
        {project.url && (
          <span className="feature__open" aria-hidden="true">
            <ArrowUpRight />
          </span>
        )}
      </div>
      <h3 className="feature__name">{project.name}</h3>
      <p className="feature__desc">{project.description}</p>
      <ul className="chips chips--quiet" aria-label="Technologies">
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
    <li data-reveal>
      {project.url ? (
        <a className={cls} href={project.url} target="_blank" rel="noopener noreferrer" ref={tilt} aria-label={`${project.name}, open live site`}>
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

export default function Projects() {
  const ref = useReveal()
  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title" data-reveal>
            Projects
          </h2>
          <p className="section__lead" data-reveal>
            Three products with real users, three client sites, and the research and systems work behind them.
          </p>
        </div>

        <ul className="features" data-reveal-group>
          {featuredProjects.map((p) => (
            <FeatureCard project={p} key={p.name} />
          ))}
        </ul>

        <div className="projects__sub">
          <h3 className="projects__subtitle" data-reveal>
            Client websites
          </h3>
          <ul className="sites" data-reveal-group>
            {clientSites.map((s) => (
              <li key={s.url} data-reveal>
                <a className="site" href={s.url} target="_blank" rel="noopener noreferrer">
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

        <div className="projects__sub">
          <h3 className="projects__subtitle" data-reveal>
            Research and systems work
          </h3>
          <ul className="more" data-reveal-group>
            {moreProjects.map((p) => (
              <li className="more__row" key={p.name} data-reveal>
                <h4>{p.name}</h4>
                <p>{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
