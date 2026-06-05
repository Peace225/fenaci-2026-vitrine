import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500000, label: 'Voix citoyennes attendues', suffix: '', icon: '🗳️' },
  { value: 25, label: 'Localités en compétition', suffix: '', icon: '📍' },
  { value: 10, label: "Jours de festival", suffix: ' j', icon: '📅' },
  { value: 1, label: "Trésor national ivoirien", suffix: 'er', icon: '🌾' },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}

function StatCard({ value, label, suffix, icon, animate }) {
  const count = useCountUp(value, 2000, animate)

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #f0f0f0',
      borderRadius: '12px',
      padding: '32px 24px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      flex: '1',
      minWidth: '0',
    }}>
      <div style={{ fontSize: '32px', marginBottom: '12px', lineHeight: 1 }}>{icon}</div>
      <div style={{
        color: '#E8420A',
        fontSize: '48px',
        fontWeight: 900,
        lineHeight: 1,
        marginBottom: '8px',
      }}>
        {count.toLocaleString('fr-FR')}{suffix}
      </div>
      <p style={{
        color: '#777777',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: 0,
      }}>{label}</p>
    </div>
  )
}

export default function Stats() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '60px 0' }} ref={ref}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            width: '48px',
            height: '4px',
            backgroundColor: '#E8420A',
            borderRadius: '2px',
            margin: '0 auto 20px',
          }} />
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontWeight: 900,
            color: '#111827',
            margin: '0 0 12px',
          }}>
            Le FENACI en chiffres
          </h2>
          <p style={{ color: '#6b7280', maxWidth: '480px', margin: '0 auto', fontSize: '16px', lineHeight: 1.6 }}>
            Un festival d'envergure nationale qui célèbre l'attiéké, trésor culinaire de la Côte d'Ivoire
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  )
}
