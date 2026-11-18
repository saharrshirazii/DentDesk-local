import { faq } from '../content'
import { Container, SectionHeading } from '../components/ui'

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Vanliga frågor" title="Svar på det många undrar" />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-md bg-mint text-brand transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pr-12 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
