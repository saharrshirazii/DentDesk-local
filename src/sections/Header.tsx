import { useState } from 'react'
import { nav } from '../content'
import { Button, Container } from '../components/ui'

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-xl bg-brand text-white"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M12 21c-.6 0-1-.4-1.2-1l-.9-3.4c-.2-.6-.6-.8-1.2-.8-1 0-2.1-.5-2.8-1.6C5 12.600 4.600 10.600 4.600 9 4.600 6.400 6.400 4.500 8.700 4.500c1.200 0 2.200.5 3.300 1.300 1.100-.8 2.100-1.300 3.300-1.300 2.300 0 4.100 1.900 4.100 4.500 0 1.600-.4 3.600-1.300 5.200-.7 1.100-1.800 1.600-2.800 1.600-.6 0-1 .2-1.200.8L13.200 20c-.2.600-.6 1-1.200 1z" />
        </svg>
      </span>
      <span className="text-xl">DentDesk</span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Huvudmeny" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="#" variant="ghost" className="px-3">
            Logga in
          </Button>
          <Button href="#demo">Boka demo</Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-line md:hidden"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-medium hover:bg-mint"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3">
              <Button href="#" variant="secondary" className="flex-1">
                Logga in
              </Button>
              <Button href="#demo" className="flex-1">
                Boka demo
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
