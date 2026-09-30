import { business } from '../data/business'

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-sub">
          Reserva hoy o pregúntanos por disponibilidad. ¡Las fechas se llenan
          rápido!
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h4>Dirección</h4>
                <p>
                  <a href={business.mapsLink} target="_blank" rel="noreferrer">
                    {business.address}
                  </a>
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h4>Teléfono</h4>
                <p>
                  <a href={business.phoneHref}>{business.phone}</a>
                </p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div>
                <h4>Horario de servicio</h4>
                <p>{business.hours}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">💬</div>
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a
                    href={business.whatsappMessage(
                      'Hola, me interesa rentar un inflable.',
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Escríbenos y te respondemos al instante
                  </a>
                </p>
              </div>
            </div>
            <a
              className="btn btn-primary contact-cta"
              href={business.whatsappMessage(
                'Hola, me interesa rentar un inflable. ¿Me pueden dar información?',
              )}
              target="_blank"
              rel="noreferrer"
            >
              📱 Reserva por WhatsApp
            </a>
          </div>
          <div className="map-frame">
            <iframe
              src={business.mapsEmbed}
              title="Ubicación de Lucy's Party Rental LLC"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
