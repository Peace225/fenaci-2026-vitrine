import { useState } from 'react'

/**
 * PhotoGallery — Visionneuse de galerie photos avec lightbox
 * Props:
 *   photos: Array<{ src, alt, caption? }>
 *   columns?: 2 | 3 | 4 (default: 3)
 */
export default function PhotoGallery({ photos = [], columns = 3 }) {
  const [selected, setSelected] = useState(null)

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
  }

  if (!photos.length) {
    return (
      <div className="text-center py-20 text-gray-400">
        <div className="text-5xl mb-4">🖼️</div>
        <p className="text-lg font-medium">Galerie photos à venir</p>
        <p className="text-sm">Les photos seront disponibles prochainement.</p>
      </div>
    )
  }

  return (
    <>
      <div className={`grid ${gridCols[columns] ?? gridCols[3]} gap-4`}>
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative overflow-hidden rounded-2xl aspect-video bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label={`Voir ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            {photo.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm">{photo.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse photo"
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white"
            onClick={() => setSelected(null)}
            aria-label="Fermer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {selected > 0 && (
            <button
              className="absolute left-4 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1) }}
              aria-label="Photo précédente"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {photos[selected].caption && (
            <p className="absolute bottom-6 text-white/70 text-sm text-center px-4">
              {photos[selected].caption}
            </p>
          )}

          {/* Next */}
          {selected < photos.length - 1 && (
            <button
              className="absolute right-4 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1) }}
              aria-label="Photo suivante"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  )
}
