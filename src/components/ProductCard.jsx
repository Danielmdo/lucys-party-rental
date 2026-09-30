import { useState } from 'react'
import { business } from '../data/business'

export default function ProductCard({ product }) {
  const [index, setIndex] = useState(0)
  const total = product.images.length

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  const wa = business.whatsappMessage(
    `Hola, me interesa rentar el "${product.name}". ¿Me pueden dar información de disponibilidad y precios?`,
  )

  return (
    <article className="card">
      <div className="card-media">
        <img src={product.images[index]} alt={product.name} loading="lazy" />
        {product.tags?.length > 0 && (
          <div className="card-tags">
            {product.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
        {total > 1 && (
          <>
            <button
              className="arrow prev"
              onClick={prev}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              className="arrow next"
              onClick={next}
              aria-label="Foto siguiente"
            >
              ›
            </button>
            <div className="thumbs">
              {product.images.map((src, i) => (
                <img
                  key={src}
                  className={`thumb ${i === index ? 'active' : ''}`}
                  src={src}
                  alt={`${product.name} - foto ${i + 1}`}
                  onClick={() => setIndex(i)}
                  loading="lazy"
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="card-body">
        <span className="card-cat">{product.cat}</span>
        <h3>{product.name}</h3>
        {product.desc && <p className="card-desc">{product.desc}</p>}
        <div className="card-actions">
          <a
            className="btn btn-primary btn-small"
            href={wa}
            target="_blank"
            rel="noreferrer"
          >
            Reservar
          </a>
          <a className="btn btn-ghost btn-small" href={business.phoneHref}>
            Llamar
          </a>
        </div>
      </div>
    </article>
  )
}
