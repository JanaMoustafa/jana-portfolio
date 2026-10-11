import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, Flip, SplitText, ScrambleTextPlugin)

export { gsap, ScrollTrigger, Flip, SplitText }

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const finePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

export const EASE = 'power3.out'

const fontsReady = () => (typeof document !== 'undefined' && document.fonts ? document.fonts.ready : Promise.resolve())

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
 * Scroll-driven entrances for everything inside `scope`:
 * - [data-reveal]  fades and rises; members of one [data-reveal-group] stagger together
 * - [data-split]   headline whose letters rise out of a mask, one after another
 * - [data-clip]    card that unfolds upward through a clip-path, then its contents follow
 */
export function revealWithin(scope) {
  if (!scope) return () => {}
  const plain = Array.from(scope.querySelectorAll('[data-reveal]'))
  const clips = Array.from(scope.querySelectorAll('[data-clip]'))
  if (reducedMotion()) {
    plain.forEach((el) => el.classList.add('is-visible'))
    return () => {}
  }

  let cancelled = false
  const ctx = gsap.context(() => {
    const groups = new Map()
    plain.forEach((el) => {
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

    clips.forEach((el, i) => {
      gsap.set(el, { clipPath: 'inset(100% 0% 0% 0% round 20px)' })
      const inner = el.querySelectorAll('[data-clip-item]')
      gsap.set(inner, { opacity: 0, y: 24 })
      gsap
        .timeline({ scrollTrigger: { trigger: el.parentElement, start: 'top 84%', once: true }, delay: i * 0.12 })
        .to(el, { clipPath: 'inset(0% 0% 0% 0% round 20px)', duration: 1.1, ease: 'expo.out' })
        .to(inner, { opacity: 1, y: 0, duration: 0.7, ease: EASE, stagger: 0.07 }, 0.25)
        .add(() => gsap.set(el, { clearProps: 'clipPath' }))
    })
  }, scope)

  // Headlines are split only once fonts have loaded, so letter widths are final.
  fontsReady().then(() => {
    if (cancelled) return
    ctx.add(() => {
      scope.querySelectorAll('[data-split]').forEach((el) => {
        const split = SplitText.create(el, { type: 'words,chars', wordsClass: 'sw', charsClass: 'sc', mask: 'words', aria: 'auto' })
        gsap.from(split.chars, {
          yPercent: 115,
          rotate: 6,
          duration: 1,
          ease: 'expo.out',
          stagger: Math.min(0.03, 0.6 / split.chars.length),
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
    })
  })

  return () => {
    cancelled = true
    ctx.revert()
  }
}

/** Words light up one by one as the paragraph scrolls through the viewport. */
export function scrubWords(el) {
  if (!el || reducedMotion()) return () => {}
  let cancelled = false
  const ctx = gsap.context(() => {}, el)
  fontsReady().then(() => {
    if (cancelled) return
    ctx.add(() => {
      const split = SplitText.create(el, { type: 'words', wordsClass: 'scrub-word', aria: 'auto' })
      gsap.fromTo(
        split.words,
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 52%', scrub: 0.6 },
        },
      )
    })
  })
  return () => {
    cancelled = true
    ctx.revert()
  }
}
