import { Navbar } from "./components/DropNav"
import About from "./components/About"
import Footer1 from "./components/Footer"
import WhatsAppButton from "./components/Whatappbtn"
import ScrollToTop from "./components/ScroltoTop"
import ContactForm from "./components/Enquriy"
import SubscribeSection from "./components/Subscripition"
import Hero from "./components/Hero"
import BookNowNew from "./components/BookNowNew"
import Testimonials from "./components/Testimonals"
import WhyChooseUs from "./components/WhyChooseus"
import Numbercount from "./components/Numbercount"
import Events from "./components/Event"
import Contact from "./components/Contact"






function App() {

  return (
    <>


      <Navbar />
      <Hero />
      <Events />


      <Numbercount />
      <SubscribeSection />



      <About />
      <WhyChooseUs />

      {/* <Testimonials /> */}
      <ContactForm />

     
      <BookNowNew />



      <WhatsAppButton />
      <ScrollToTop />
      <Footer1 />









    </>
  )
}

export default App
