
export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/20">

      <div className="flex flex-col items-center gap-6 text-center">

        {/* Brand */}
        <div className="logo text-white px-6 py-3 text-sm font-medium whitespace-nowrap justify-center">
          Eclectic Nails
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-white text-sm">
          <a className="hover:font-bold hover:rotate-4" href="#home">Home</a>
          <a className="hover:font-bold hover:rotate-4" href="#services">Services</a>
          <a className="hover:font-bold hover:rotate-4" href="#design-tiers">Design Tiers</a>
          <a className="hover:font-bold hover:rotate-4" href="#booking">Booking</a>
          <a className="hover:font-bold hover:rotate-4" href="https://www.instagram.com/eclecticnailske">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-white text-xs opacity-80">
          © 2026 Eclectic Nails. All rights reserved.
        </p>

      </div>

    </footer>
  );
}