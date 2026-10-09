import { useState } from "react";

import Hero from "./sections/hero"
import Navbar from "./components/navbar"
import Services from "./sections/services"
import DesignTiers from "./sections/designtiers"
import Booking from "./sections/booking"
import Footer from "./sections/footer"
import BookingModal from "./components/bookingmodal";
import "./Index.css"

type ServicesProps = {
  onBookNow: () => void;
};
export default function App({}: ServicesProps) {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => {
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setBookingOpen(false);
  };
  return (
    <main className="bg-(--green) min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Navbar />
        <Hero />
        <Services />
        <DesignTiers/>
        <Booking onBookNow={openBooking}/>
        <Footer />
      </div>
      <BookingModal
        isOpen={bookingOpen}
        onClose={closeBooking}
      />
    </main>
  )
}