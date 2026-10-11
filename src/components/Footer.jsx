import { profile } from '../data/content'
import { scrollToId } from '../lib/motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">
          {new Date().getFullYear()} {profile.name}
        </p>
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
