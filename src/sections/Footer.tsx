import { footer } from '../content'
import { Container } from '../components/ui'
import { Logo } from './Header'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.4fr_2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-muted">{footer.description}</p>
          <dl className="mt-6 space-y-2 text-sm">
            {footer.contact.map((c) => (
              <div key={c.label} className="flex gap-2">
                <dt className="w-16 text-muted">{c.label}</dt>
                <dd className="font-medium">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-muted hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {year} DentDesk AB. Alla rättigheter förbehållna.</p>
          <p className="flex gap-5">
            <a href="#" className="hover:text-ink">Integritetspolicy</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </p>
        </Container>
      </div>
    </footer>
  )
}
