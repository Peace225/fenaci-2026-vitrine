import { useEffect, useState } from 'react'

export default function RealTimeCounter({ initial = 0, goal = 500000 }) {
  const [count, setCount] = useState(initial)

  // Simulate real-time updates for MVP: increment randomly
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => {
        const inc = Math.max(1, Math.floor(Math.random() * 20))
        const next = Math.min(goal, c + inc)
        return next
      })
    }, 1500)
    return () => clearInterval(id)
  }, [goal])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#E8420A' }}>{count.toLocaleString()}</div>
      <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>sur {goal.toLocaleString()} voix</div>
      <div style={{ width: '220px', height: '8px', background: '#f3f4f6', borderRadius: '999px', overflow: 'hidden' }}>
        <div style={{ width: `${Math.floor((count / goal) * 100)}%`, height: '100%', background: 'linear-gradient(90deg,#E8420A,#c93600)' }} />
      </div>
    </div>
  )
}
