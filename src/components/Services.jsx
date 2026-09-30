import { services } from '../data/services'

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2 className="section-title">Todo para tu evento</h2>
        <p className="section-sub">
          Desde brincolines y resbaladillas hasta sillas, mesas y generadores:
          tenemos todo lo necesario para que tu fiesta sea un éxito.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
