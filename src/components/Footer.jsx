import { profile } from '../data/content'
import { scrollToId } from '../lib/motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          {new Date().getFullYear()} {profile.name}
        </p>
        <p className="footer__built">Built with React, Vite and GSAP</p>
        <a
          href="#home"
          className="footer__top"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('home')
          }}
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
