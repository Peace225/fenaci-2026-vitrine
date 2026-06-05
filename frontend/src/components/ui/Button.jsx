/**
 * Button — Composant réutilisable premium FENACI
 * Variants: primary | secondary | outline | ghost
 * Sizes: sm | md | lg
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  icon,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105',
    secondary:
      'bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-xl hover:shadow-green-500/30 hover:scale-105',
    outline:
      'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    ghost:
      'bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm',
  }

  const classes = [
    base,
    sizes[size] ?? sizes.md,
    variants[variant] ?? variants.primary,
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  )
}
