import { stats } from '../content'
import { Container } from '../components/ui'

export function Stats() {
  return (
    <section aria-label="Nyckeltal" className="border-y border-line bg-white">
      <Container className="grid gap-8 py-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
        {stats.map((s) => (
          <div key={s.label} className="sm:px-10 sm:first:pl-0">
            <p className="font-serif text-4xl font-semibold text-brand sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-muted">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
