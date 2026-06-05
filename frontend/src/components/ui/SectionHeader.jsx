/**
 * SectionHeader — En-tête de section standardisé FENACI
 */
export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
}) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-5 ${
            light
              ? 'bg-orange-500/20 border border-orange-500/30 text-orange-300'
              : 'bg-orange-100 text-orange-600'
          }`}
        >
          {badge}
        </div>
      )}

      {!badge && (
        <div
          className={`w-14 h-1 rounded-full mb-5 bg-gradient-to-r from-orange-500 to-yellow-400 ${
            center ? 'mx-auto' : ''
          }`}
        />
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/60' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
