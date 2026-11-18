import { security } from '../content'
import { Container, SectionHeading } from '../components/ui'

export function Security() {
  return (
    <section id="sakerhet" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="rounded-2xl bg-brand px-6 py-14 text-white sm:px-14">
          <div className="[&_h2]:text-white [&_p]:text-white/80">
            <SectionHeading
              eyebrow="Säkerhet och integritet"
              title="Byggt för kliniker som tar patientdata på allvar"
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {security.map((s) => (
              <div key={s.title} className="rounded-xl bg-mint p-6 text-ink">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
