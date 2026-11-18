import { Closing } from './sections/Closing'
import { Faq } from './sections/Faq'
import { Features } from './sections/Features'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Security } from './sections/Security'
import { Solutions } from './sections/Solutions'
import { Stats } from './sections/Stats'
import { Testimonials } from './sections/Testimonials'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Solutions />
        <Testimonials />
        <Security />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
