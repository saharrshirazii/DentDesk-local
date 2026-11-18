import type { AnchorHTMLAttributes, ReactNode } from 'react'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

const base =
  'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'border border-ink/15 bg-white text-ink hover:border-ink/40',
  ghost: 'text-ink hover:text-brand',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string
  title: string
  text?: string
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-base font-medium text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </div>
  )
}
