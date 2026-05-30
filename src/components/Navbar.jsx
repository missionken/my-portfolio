import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#skills' },
  { label: 'View Projects', href: '#', disabled: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const ids = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 80) {
          setActive(ids[i]); break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, link) => {
    e.preventDefault()
    if (link.disabled) { setMenuOpen(false); return }
    const target = document.querySelector(link.href)
    if (target) { target.scrollIntoView({ behavior: 'smooth' }) }
    setMenuOpen(false)
  }

  const getLinkClass = (link) => {
    let cls = 'navbar__link'
    if (active === link.href.slice(1)) cls += ' navbar__link--active'
    if (link.label === 'Resume') cls += ' navbar__link--resume'
    if (link.label === 'View Projects') cls += ' navbar__link--view-projects'
    return cls
  }

  const renderLinks = () => {
    return NAV_LINKS.map(link => {
      const anchorTag = ['a', {
        href: link.href,
        className: getLinkClass(link),
        onClick: (e) => handleNav(e, link)
      }, link.label]
      return (
        <li key={link.label}>
          <a href={link.href} className={getLinkClass(link)} onClick={e => handleNav(e, link)}>
            {link.label}
          </a>
        </li>
      )
    })
  }

  return (
    <nav className={scrolled ? 'navbar navbar--scrolled' : 'navbar'}>
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#home" onClick={e => handleNav(e, { href: '#home' })}>
          P. Josephine
        </a>
        <ul className={menuOpen ? 'navbar__links navbar__links--open' : 'navbar__links'}>
          {renderLinks()}
        </ul>
        <button
          className={menuOpen ? 'navbar__hamburger navbar__hamburger--open' : 'navbar__hamburger'}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}