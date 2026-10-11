import { useEffect, useRef } from 'react'
import { ScrollTrigger, gsap, reducedMotion } from '../lib/motion'

const ROWS = [
  ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Large Language Models', 'Data Science'],
  ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'React', 'Next.js', 'Supabase', 'Flutter'],
]

const Star = () => (
  <svg className="marquee__star" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 0c.7 6.4 5.6 11.3 12 12-6.4.7-11.3 5.6-12 12-.7-6.4-5.6-11.3-12-12C6.4 11.3 11.3 6.4 12 0Z" />
  </svg>
)

function Row({ words }) {
  // Two identical halves so the loop can wrap at -50% without a seam.
  const half = (key) => (
    <div className="marquee__half" key={key}>
      {words.map((w) => (
        <span className="marquee__item" key={w}>
          {w}
          <Star />
        </span>
      ))}
    </div>
  )
  return <div className="marquee__track">{[half('a'), half('b')]}</div>
}

/**
 * Two level bands of skills drifting in opposite directions. Scrolling speeds them up in
 * the direction of travel, then they ease back to their resting pace.
 */
export default function Marquee() {
  const root = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el || reducedMotion()) return
    const ctx = gsap.context(() => {
      const tracks = gsap.utils.toArray('.marquee__track')
      const loops = tracks.map((t, i) => {
        const loop = gsap.fromTo(
          t,
          { xPercent: i % 2 ? -50 : 0 },
          { xPercent: i % 2 ? 0 : -50, duration: 38 + i * 6, ease: 'none', repeat: -1 },
        )
        // Start deep into the loop so playing it backwards never reaches time zero.
        loop.totalTime(loop.duration() * 500)
        return loop
      })
      let direction = 1
      const settle = gsap
        .delayedCall(0.2, () => {
          loops.forEach((l) => gsap.to(l, { timeScale: direction, duration: 1.2, ease: 'power2.out', overwrite: true }))
        })
        .pause()
      ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (self) => loops.forEach((l) => l.paused(!self.isActive)),
        onUpdate: (self) => {
          const v = self.getVelocity()
          direction = self.direction
          const boost = 1 + Math.min(Math.abs(v) / 260, 5)
          loops.forEach((l) => gsap.to(l, { timeScale: direction * boost, duration: 0.25, overwrite: true }))
          settle.restart(true)
        },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="marquee__rows">
        {ROWS.map((words, i) => (
          <div className={`marquee__row marquee__row--${i ? 'outline' : 'solid'}`} key={i}>
            <Row words={words} />
          </div>
        ))}
      </div>
    </div>
  )
}
