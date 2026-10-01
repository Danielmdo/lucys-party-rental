import { useEffect, useRef, useState } from 'react'

const videos = ['/video/presentacion.mp4', '/video/presentacion-2.mp4']

export default function VideoModal({ open, onClose }) {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  // Cada vez que se abre el modal, empieza desde el primer video
  useEffect(() => {
    if (open) setCurrent(0)
  }, [open])

  // Reproducción: silenciado (política de autoplay de los navegadores)
  useEffect(() => {
    if (!open) return
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [open, current])

  if (!open) return null

  const next = () => setCurrent((c) => (c + 1) % videos.length)

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video de presentación"
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar video">
          ✕
        </button>
        <video
          key={current}
          ref={videoRef}
          src={videos[current]}
          onEnded={next}
          controls
          autoPlay
          muted
          playsInline
        />
        <div className="modal-caption">
          <span className="modal-count">
            Video {current + 1} de {videos.length}
          </span>
          <span className="modal-hint">
            El video inicia silenciado · activa el sonido 🔊 en el reproductor
          </span>
        </div>
      </div>
    </div>
  )
}
