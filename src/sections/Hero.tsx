import { hero } from '../content'
import { Button, Container } from '../components/ui'

// A calm product card instead of a stock photo. All figures are placeholders.
function DashboardCard() {
  const bars = [40, 62, 48, 78, 58, 88, 70]
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl bg-sun-soft" />

      <div className="relative rounded-2xl border border-line bg-white p-6 pb-12 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted">Dagsavslut</p>
            <p className="text-2xl font-bold">XX XXX kr</p>
          </div>
          <span className="rounded-md bg-mint px-2.5 py-1 text-xs font-semibold text-brand">
            Avstämd
          </span>
        </div>

        <div className="mt-6 flex h-28 items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-sm ${i === 5 ? 'bg-brand' : 'bg-mint'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <ul className="mt-6 space-y-3 text-sm">
          {[
            ['Kort', 'XX XXX kr'],
            ['Swish', 'X XXX kr'],
            ['Tandvårdsstöd', 'XX XXX kr'],
          ].map(([k, v]) => (
            <li key={k} className="flex items-center justify-between">
              <span className="text-muted">{k}</span>
              <span className="font-semibold">{v}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -bottom-5 right-4 flex rotate-2 items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm shadow-sm">
        <span className="grid size-7 place-items-center rounded-full bg-sun text-ink">✓</span>
        <span className="font-medium">Synkad med journalsystem</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="mb-5 inline-block rounded-md bg-sun-soft px-3 py-1 text-sm font-medium">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl leading-[1.12] sm:text-5xl lg:text-[3.5rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{hero.text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#demo">{hero.primary}</Button>
            <Button href="#funktioner" variant="secondary">
              {hero.secondary}
            </Button>
          </div>
        </div>
        <DashboardCard />
      </Container>
    </section>
  )
}
