import NavBar from './components/NavBar'
import Experience from './sections/Experience'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import LogoShowcase from './sections/LogoSection'
import ShowcaseSection from './sections/ShowcaseSection'
import TechStack from './sections/TechStack'
//import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </>
  )
}

export default App
