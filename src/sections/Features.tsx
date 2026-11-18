import { features } from '../content'
import { Art } from '../components/Art'
import { Container, SectionHeading } from '../components/ui'

export function Features() {
  return (
    <section id="funktioner" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Så fungerar det"
          title="Allt klinikens ekonomi behöver, på ett ställe"
        />

        <div className="mt-14 space-y-20 sm:space-y-24">
          {features.map((f, i) => (
            <article
              key={f.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-2xl sm:text-3xl">
                  {f.title}
                </h3>
                <p className="mt-4 text-lg text-muted">{f.text}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-4 shrink-0 bg-brand"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Art
                name={f.art}
                className={`w-full max-w-md justify-self-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
