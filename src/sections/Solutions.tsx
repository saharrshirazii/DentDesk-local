import { solutions } from '../content'
import { Art } from '../components/Art'
import { Container, SectionHeading } from '../components/ui'

export function Solutions() {
  return (
    <section id="losningar" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Våra lösningar"
          title="Ett system för kliniken, utan krångel"
          text="Vi börjar med ekonomin och bygger vidare på det som kliniker faktiskt behöver."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-xl border border-line bg-paper p-4"
            >
              <Art name={s.art} className="w-full rounded-lg" />
              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="text-xl">{s.title}</h3>
                <span className="text-xs font-medium text-muted">
                  {s.status}
                </span>
              </div>
              <p className="mt-2 text-muted">{s.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
