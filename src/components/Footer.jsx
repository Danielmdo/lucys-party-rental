import { business } from '../data/business'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="brand">
            <span className="brand-icon">🎪</span>
            <span className="brand-text">
              Lucy's <em>Party Rental</em>
            </span>
          </a>
          <p className="footer-tag">
            Hacemos de tu fiesta un evento inolvidable. Renta de inflables,
            brincolines, resbaladillas y más en Massies Mill, Virginia.
          </p>
        </div>
        <div>
          <h4>Enlaces</h4>
          <ul className="footer-links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#catalogo">Catálogo</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul className="footer-links">
            <li>📍 {business.address}</li>
            <li>
              📞 <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>🕐 {business.hours}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} {business.name}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  )
}
