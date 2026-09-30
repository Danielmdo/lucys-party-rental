import { useState } from 'react'
import { business } from '../data/business'
import VideoModal from './VideoModal'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section id="inicio" className="hero">
      <div className="hero-decor" aria-hidden="true">
        <span className="d1">🎈</span>
        <span className="d2">🎡</span>
        <span className="d3">🎠</span>
        <span className="d4">🎉</span>
        <span className="d5">🎈</span>
      </div>
      <div className="container hero-inner">
        <span className="hero-badge">🎉 Fiestas inolvidables en Virginia</span>
        <h1>
          Renta de <span className="grad">brincolines e inflables</span> para tu
          fiesta
        </h1>
        <p className="lead">
          Brincolines, resbaladillas de agua, combos, toro mecánico, fiesta de
          espuma y mucho más. Llevamos la diversión hasta tu evento — ¡reserva
          hoy mismo!
        </p>
        <div className="hero-cta">
          <a
            className="btn btn-primary"
            href={business.whatsappMessage(
              'Hola, me interesa rentar un inflable. ¿Me pueden dar información?',
            )}
            target="_blank"
            rel="noreferrer"
          >
            📱 Reserva por WhatsApp
          </a>
          <a className="btn btn-light" href={business.phoneHref}>
            📞 {business.phone}
          </a>
        </div>
        <button
          className="hero-video"
          onClick={() => setShowVideo(true)}
          aria-label="Ver video de presentación"
        >
          <span className="hero-video-play" aria-hidden="true">
            ▶
          </span>
          <span className="hero-video-text">
            <strong>Video de presentación</strong>
            <span>Mira toda la diversión en acción</span>
          </span>
        </button>
        <div className="hero-info">
          <div>
            🕐 <strong>Horario</strong>
            <span>{business.hours}</span>
          </div>
          <div>
            📍 <strong>Servimos</strong>
            <span>Massies Mill, VA y alrededores</span>
          </div>
          <div>
            ✅ <strong>Tranquilidad</strong>
            <span>Inflables limpios e instalaciones seguras</span>
          </div>
        </div>
      </div>
      <VideoModal open={showVideo} onClose={() => setShowVideo(false)} />
    </section>
  )
}
