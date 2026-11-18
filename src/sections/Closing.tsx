import { closing } from '../content'
import { Button, Container } from '../components/ui'

export function Closing() {
  return (
    <section id="demo" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-sun-soft px-6 py-14 sm:px-14">
          <div className="relative">
            <h2 className="max-w-2xl text-3xl sm:text-4xl">
              {closing.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted">{closing.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="mailto:info@dentdesk.se">{closing.primary}</Button>
              <Button href="mailto:info@dentdesk.se" variant="secondary">
                {closing.secondary}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
