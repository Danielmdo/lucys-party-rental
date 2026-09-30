import { useEffect, useState } from 'react'
import { business } from '../data/business'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon">🎪</span>
          <span className="brand-text">
            Lucy's <em>Party Rental</em>
          </span>
        </a>
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${open ? 'show' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a className="btn btn-call btn-small" href={business.phoneHref}>
              📞 {business.phone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
