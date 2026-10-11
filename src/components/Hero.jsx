import { useEffect, useRef } from 'react'
import FieldCanvas from './FieldCanvas'
import { ArrowDown, Download } from './Icons'
import { profile } from '../data/content'
import { gsap, reducedMotion, scrollToId } from '../lib/motion'
import { useMagnetic } from '../lib/hooks'

export default function Hero() {
  const root = useRef(null)
  const primary = useMagnetic(0.25)

  useEffect(() => {
    const el = root.current
    if (!el) return
    if (reducedMotion()) {
      el.classList.add('is-ready')
      return
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero__field', { opacity: 0, duration: 1.8, ease: 'power2.out' }, 0)
        .from('.hero__line-in', { yPercent: 112, duration: 1.15, stagger: 0.14 }, 0.15)
      // Role titles decode out of random characters, like data resolving into a label.
      gsap.utils.toArray('.hero__roles li').forEach((li, i) => {
        const at = 0.75 + i * 0.14
        tl.fromTo(li, { opacity: 0 }, { opacity: 1, duration: 0.2 }, at).to(
          li,
          { duration: 1.2, scrambleText: { text: li.textContent, chars: '01<>/#_', speed: 0.55, revealDelay: 0.3 } },
          at,
        )
      })
      tl.from(['.hero__lede', '.hero__meta', '.hero__actions'], { opacity: 0, y: 26, duration: 0.9, stagger: 0.1 }, 0.9)
        .from('.hero__scroll', { opacity: 0, y: -10, duration: 0.8 }, 1.5)
        .add(() => el.classList.add('is-ready'), 1.2)

      // Scrolling away: the name drifts up faster than the page, the copy fades out,
      // and the field behind it swells and dims.
      const away = { trigger: el, start: 'top top', end: 'bottom 15%', scrub: true }
      gsap.to('.hero__name', { yPercent: -14, ease: 'none', scrollTrigger: { ...away, end: 'bottom top' } })
      gsap.fromTo('.hero__inner', { opacity: 1, y: 0 }, { opacity: 0, y: -70, ease: 'none', immediateRender: false, scrollTrigger: away })
      gsap.fromTo(
        '.hero__field',
        { scale: 1, opacity: 1 },
        { scale: 1.12, opacity: 0.3, ease: 'none', immediateRender: false, scrollTrigger: { ...away, end: 'bottom top' } },
      )
    }, el)
    return () => ctx.revert()
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    scrollToId(id)
  }

  return (
    <section className="hero" id="home" ref={root} aria-label="Introduction">
      <FieldCanvas className="hero__field" />
      <div className="hero__veil" aria-hidden="true" />
      <div className="container hero__inner">
        <h1 className="hero__name">
          {profile.nameLines.map((line) => (
            <span className="hero__line" key={line}>
              <span className="hero__line-in">{line}</span>
            </span>
          ))}
        </h1>

        <ul className="hero__roles" aria-label="Roles">
          {profile.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>

        <div className="hero__row">
          <p className="hero__lede">{profile.intro}</p>
          <dl className="hero__meta">
            <div>
              <dt>Now</dt>
              <dd>{profile.status}</dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Next</dt>
              <dd>{profile.availability}</dd>
            </div>
          </dl>
        </div>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects" onClick={go('projects')} ref={primary}>
            See my work
          </a>
          <a className="btn btn--ghost" href={profile.cv} download="Jana_Sabry_CV.pdf">
            <Download />
            Download CV
          </a>
        </div>

        <a className="hero__scroll" href="#about" onClick={go('about')}>
          <ArrowDown />
          <span>Scroll</span>
        </a>
      </div>
    </section>
  )
}
