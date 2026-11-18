import { useRef } from 'react'
import { testimonials as t } from '../content'
import { Container, SectionHeading } from '../components/ui'

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} />
    </svg>
  )
}

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section id="kunder" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} />
          <div className="flex gap-2">
            {(['left', 'right'] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => scroll(d === 'left' ? -1 : 1)}
                aria-label={d === 'left' ? 'Föregående omdömen' : 'Nästa omdömen'}
                className="grid size-11 place-items-center rounded-xl border border-ink/15 bg-white transition-colors hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Arrow dir={d} />
              </button>
            ))}
          </div>
        </div>

      <div
        ref={track}
        tabIndex={0}
        aria-label="Kundomdömen"
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {t.items.map((o, i) => {
          const dark = false
          const initials = o.name.split(' ').map((w) => w[0]).join('').slice(0, 2)
          return (
            <figure
              key={i}
              className={`flex w-[84%] shrink-0 snap-start flex-col justify-between rounded-2xl p-7 sm:w-[26rem] ${
                dark ? 'bg-brand text-white' : 'border border-line bg-white'
              }`}
            >
              <div>
                <span aria-hidden="true" className={`font-serif text-5xl leading-none ${dark ? 'text-sun' : 'text-brand'}`}>
                  &ldquo;
                </span>
                <blockquote className="-mt-1 text-lg leading-relaxed">{o.quote}</blockquote>
                {o.result && (
                  <p className="mt-5">
                    <span className={`font-serif text-3xl font-semibold ${dark ? 'text-sun' : 'text-brand'}`}>{o.result}</span>{' '}
                    <span className={`text-sm ${dark ? 'text-white/75' : 'text-muted'}`}>{o.resultLabel}</span>
                  </p>
                )}
              </div>
              <figcaption className={`mt-6 flex items-center gap-3 border-t pt-5 ${dark ? 'border-white/15' : 'border-line'}`}>
                <span
                  aria-hidden="true"
                  className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-semibold ${dark ? 'bg-white/15' : 'bg-mint text-brand'}`}
                >
                  {initials}
                </span>
                <span className="text-sm">
                  <span className="block font-semibold">{o.name}</span>
                  <span className={dark ? 'text-white/75' : 'text-muted'}>
                    {o.role}, {o.clinic}
                  </span>
                </span>
              </figcaption>
            </figure>
          )
        })}
      </div>
      </Container>
    </section>
  )
}
