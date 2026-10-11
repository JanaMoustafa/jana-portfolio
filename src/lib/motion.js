import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, Flip)

export { gsap, ScrollTrigger, Flip }

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const EASE = 'power3.out'

let lenis = null

/** Smooth scrolling synced with ScrollTrigger. Skipped under reduced motion. */
export function initSmoothScroll() {
  if (reducedMotion() || lenis) return lenis
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) })
  } else {
    el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' })
  }
}

/**
 * Reveal every [data-reveal] descendant of `scope` as it enters the viewport.
 * Elements that share a [data-reveal-group] stagger together.
 */
export function revealWithin(scope) {
  if (!scope) return () => {}
  const els = Array.from(scope.querySelectorAll('[data-reveal]'))
  if (els.length === 0) return () => {}
  if (reducedMotion()) {
    els.forEach((el) => el.classList.add('is-visible'))
    return () => {}
  }
  const ctx = gsap.context(() => {
    const groups = new Map()
    els.forEach((el) => {
      const key = el.closest('[data-reveal-group]') || el
      if (!groups.has(key)) groups.set(key, [])
      groups.get(key).push(el)
    })
    groups.forEach((members, key) => {
      gsap.set(members, { opacity: 0, y: 28 })
      gsap.to(members, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: EASE,
        stagger: members.length > 1 ? 0.08 : 0,
        overwrite: 'auto',
        scrollTrigger: { trigger: key, start: 'top 86%', once: true },
        onComplete: () => members.forEach((m) => m.classList.add('is-visible')),
      })
    })
  }, scope)
  return () => ctx.revert()
}
