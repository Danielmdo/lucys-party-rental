import { useState } from 'react'
import { categories, products } from '../data/products'
import ProductCard from './ProductCard.jsx'

export default function Catalog() {
  const [active, setActive] = useState('todos')
  const filtered =
    active === 'todos' ? products : products.filter((p) => p.category === active)

  return (
    <section id="catalogo" className="section catalog">
      <div className="container">
        <h2 className="section-title">Nuestro catálogo</h2>
        <p className="section-sub">
          Elige el inflable perfecto para tu evento. Toca las flechas para ver
          más fotos de cada unidad y reserva por WhatsApp o teléfono.
        </p>
        <div className="filters" role="tablist">
          <button
            className={`chip ${active === 'todos' ? 'active' : ''}`}
            onClick={() => setActive('todos')}
          >
            ✨ Todo
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`chip ${active === c.id ? 'active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
