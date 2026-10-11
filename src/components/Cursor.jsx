import { useEffect, useRef } from 'react'
import { finePointer, gsap, reducedMotion } from '../lib/motion'

const INTERACTIVE = 'a, button, [data-cursor]'

/**
 * A soft ring that trails the pointer on desktop. It swells over anything clickable and
 * shows a short label over elements that set data-cursor="Label". The system cursor
 * stays visible, so nothing is lost for people who rely on it.
 */
export default function Cursor() {
  const ring = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    const el = ring.current
    if (!el || reducedMotion() || !finePointer()) return
    document.documentElement.classList.add('has-cursor')
    const x = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' })
    const y = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' })
    let shown = false

    const move = (e) => {
      if (!shown) {
        gsap.set(el, { x: e.clientX, y: e.clientY })
        gsap.to(el, { autoAlpha: 1, duration: 0.3 })
        shown = true
      }
      x(e.clientX)
      y(e.clientY)
    }
    const over = (e) => {
      const target = e.target.closest(INTERACTIVE)
      const text = target?.closest('[data-cursor]')?.getAttribute('data-cursor') || ''
      label.current.textContent = text
      el.classList.toggle('is-hover', Boolean(target) && !text)
      el.classList.toggle('is-label', Boolean(text))
    }
    const leave = () => {
      gsap.to(el, { autoAlpha: 0, duration: 0.3 })
      shown = false
    }
    const down = () => el.classList.add('is-down')
    const up = () => el.classList.remove('is-down')

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over)
    document.documentElement.addEventListener('pointerleave', leave)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      document.documentElement.removeEventListener('pointerleave', leave)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [])

  return (
    <div className="cursor" ref={ring} aria-hidden="true">
      <span className="cursor__label" ref={label} />
    </div>
  )
}
