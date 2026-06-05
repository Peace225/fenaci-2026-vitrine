import { useState, useRef } from 'react'

/**
 * VideoPlayer — Lecteur vidéo avec vignette et contrôles natifs
 * Props:
 *   src: string (URL de la vidéo)
 *   poster?: string (image de couverture)
 *   title?: string
 *   youtubeId?: string (ID YouTube — prioritaire sur src)
 */
export default function VideoPlayer({ src, poster, title, youtubeId }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  // YouTube embed
  if (youtubeId) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
        {!playing ? (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
            aria-label={`Lire la vidéo${title ? ` : ${title}` : ''}`}
          >
            {poster && (
              <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover" />
            )}
            <div className="relative z-10 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {title && (
              <p className="relative z-10 text-white font-semibold mt-4 text-center px-6 drop-shadow">
                {title}
              </p>
            )}
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title ?? 'Vidéo FENACI'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
    )
  }

  // Native video
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
      {!src ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
          <div className="text-5xl mb-3">🎬</div>
          <p className="font-medium">Vidéo à venir</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          className="absolute inset-0 w-full h-full"
          aria-label={title ?? 'Vidéo FENACI'}
        />
      )}
    </div>
  )
}

/**
 * VideoGrid — Grille de vignettes vidéos
 */
export function VideoGrid({ videos = [] }) {
  if (!videos.length) {
    return (
      <div className="text-center py-20 text-gray-400">
        <div className="text-5xl mb-4">🎬</div>
        <p className="text-lg font-medium">Vidéos à venir</p>
        <p className="text-sm">Les teasers et reportages seront disponibles prochainement.</p>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, i) => (
        <div key={i}>
          <VideoPlayer {...video} />
          {video.title && (
            <p className="mt-3 font-semibold text-gray-800 text-sm">{video.title}</p>
          )}
        </div>
      ))}
    </div>
  )
}
