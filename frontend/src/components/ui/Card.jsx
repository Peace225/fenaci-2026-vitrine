/**
 * Card — Composant de carte réutilisable FENACI
 * Variants: default | elevated | bordered | gradient
 */
export default function Card({
  children,
  variant = 'default',
  hover = true,
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const base = 'rounded-2xl overflow-hidden transition-all duration-300'

  const variants = {
    default: 'bg-white border border-gray-100 shadow-sm',
    elevated: 'bg-white shadow-lg',
    bordered: 'bg-white border-2 border-gray-200 hover:border-orange-400',
    gradient: 'bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100',
    dark: 'bg-white/5 border border-white/10 text-white',
  }

  const hoverClass = hover ? 'hover:-translate-y-2 hover:shadow-xl' : ''

  const classes = [base, variants[variant] ?? variants.default, hoverClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}

/**
 * CardBody — Padding interne standard
 */
export function CardBody({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
