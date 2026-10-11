import { useEffect, useRef } from 'react'
import { reducedMotion } from '../lib/motion'

const PALETTE = [
  [140, 82, 255], // purple
  [226, 169, 241], // lavender
  [255, 102, 196], // pink
]

function colorAt(t) {
  const [a, b, k] = t < 0.5 ? [PALETTE[0], PALETTE[1], t * 2] : [PALETTE[1], PALETTE[2], (t - 0.5) * 2]
  return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]
}

/**
 * The signature element of the page: a field of flowing dotted curves, like a
 * live data stream plotted in the brand palette, that bends away from the pointer.
 * Pauses when off-screen or when the tab is hidden; draws a single still frame
 * under prefers-reduced-motion.
 */
export default function FieldCanvas({ className }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const still = reducedMotion()
    const CURVES = 9
    const STEP = 15
    const RADIUS = 170
    let w = 0
    let h = 0
    let raf = 0
    let visible = true
    let hidden = false
    const pointer = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (still) draw(0)
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h)
      pointer.x += (pointer.tx - pointer.x) * 0.1
      pointer.y += (pointer.ty - pointer.y) * 0.1
      const t = time * 0.001
      for (let i = 0; i < CURVES; i++) {
        const f = i / (CURVES - 1)
        const baseY = h * (0.22 + 0.62 * f)
        const amp1 = h * (0.05 + 0.03 * ((i * 7) % 3))
        const amp2 = h * 0.025
        const k1 = 0.0022 + i * 0.00025
        const k2 = 0.0051 - i * 0.0002
        const depth = 0.3 + 0.7 * Math.sin(Math.PI * f) // brighter in the middle of the field
        for (let x = -STEP; x <= w + STEP; x += STEP) {
          let px = x
          let py = baseY + amp1 * Math.sin(x * k1 + t * 0.55 + i * 0.9) + amp2 * Math.sin(x * k2 - t * 0.38 + i * 2.1)
          const dx = px - pointer.x
          const dy = py - pointer.y
          const d = Math.hypot(dx, dy)
          if (d < RADIUS && d > 0.01) {
            const push = (1 - d / RADIUS) ** 2 * 52
            px += (dx / d) * push
            py += (dy / d) * push
          }
          const [r, g, b] = colorAt(px / w)
          const alpha = (0.18 + 0.5 * depth) * (0.75 + 0.25 * Math.sin(x * 0.01 + t + i))
          const size = 1.1 + 0.9 * depth
          ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha.toFixed(3)})`
          ctx.beginPath()
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const loop = (time) => {
      if (!visible || hidden) {
        raf = 0
        return
      }
      draw(time)
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (!still && !raf && visible && !hidden) raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      pointer.tx = e.clientX - r.left
      pointer.ty = e.clientY - r.top
    }
    const onLeave = () => {
      pointer.tx = -1e4
      pointer.ty = -1e4
    }
    const onVisibility = () => {
      hidden = document.hidden
      start()
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        start()
      },
      { threshold: 0.02 },
    )
    const ro = new ResizeObserver(resize)

    resize()
    io.observe(canvas)
    ro.observe(canvas)
    if (!still) {
      window.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('pointerleave', onLeave)
      document.addEventListener('visibilitychange', onVisibility)
      start()
    }

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
