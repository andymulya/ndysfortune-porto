import { useEffect, useState } from 'react'
import { img_logo } from '../assets/images.js'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-in">
        <a className="brand" href="#top">
          <img src={img_logo} alt="NdysFortune logo" />
          <span>NdysFortune</span>
        </a>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="btn btn-primary btn-sm" href="#contact">
            Hire Me
          </a>
          <button
            type="button"
            className={`hamburger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
