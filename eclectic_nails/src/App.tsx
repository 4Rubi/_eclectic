import Hero from "./sections/hero"
import Navbar from "./components/navbar"
import Services from "./sections/services"
import Booking from "./sections/booking"
import Footer from "./sections/footer"

import "./Index.css"

export default function App() {
  return (
    <main className="bg-(--green) min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Navbar />
        <Hero />
        <Services />
        <Booking />
        <Footer />
      </div>
    </main>
  )
}