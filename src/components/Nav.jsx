import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../data/content'
import { gsap, ScrollTrigger, reducedMotion, scrollToId } from '../lib/motion'
import { Close, Download, Menu } from './Icons'

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const bar = useRef(null)
  const panel = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bar.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
      })
      navItems.forEach(({ id }) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => self.isActive && setActive(id),
        })
      })
      ScrollTrigger.create({
        trigger: '#home',
        start: 'top top',
        end: 'bottom 45%',
        onToggle: (self) => self.isActive && setActive(''),
      })
      ScrollTrigger.create({
        start: 'top -40',
        end: 99999,
        onToggle: (self) => setScrolled(self.isActive),
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    if (!open || !panel.current || reducedMotion()) return
    gsap.from(panel.current.querySelectorAll('.nav__panel-link'), {
      opacity: 0,
      y: 22,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power3.out',
    })
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__progress" ref={bar} aria-hidden="true" />
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" onClick={go('home')} aria-label="Back to top">
          Jana Sabry
        </a>

        <nav className="nav__links" aria-label="Sections">
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={go(id)} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
              {label}
            </a>
          ))}
        </nav>

        <a className="btn btn--small nav__cv" href={profile.cv} download="Jana_Sabry_CV.pdf">
          <Download />
          CV
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-panel"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div id="nav-panel" className={`nav__panel${open ? ' is-open' : ''}`} ref={panel} aria-hidden={!open}>
        <nav aria-label="Sections">
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={go(id)} className="nav__panel-link" tabIndex={open ? 0 : -1}>
              {label}
            </a>
          ))}
          <a href={profile.cv} download="Jana_Sabry_CV.pdf" className="nav__panel-link nav__panel-link--cv" tabIndex={open ? 0 : -1}>
            Download CV
          </a>
        </nav>
      </div>
    </header>
  )
}
