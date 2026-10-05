import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu =  () => {
        setMenuOpen(false);
    }
    return (
        <nav className="relative flex justify-between items-center py-6">
            <a href="#home" className="logo bg-(--pink) rounded-full px-5 py-3 text-white text-sm whitespace-nowrap">
                Eclectic Nails
            </a>

            <div className="navbar hidden md:flex gap-8 text-black text-sm ">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#design-tiers">Design Tiers</a>
                <a href="#booking">Booking</a>
            </div>
            {/*hamburger*/}
            <button onClick={()=> setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 " aria-label="menu" aria-expanded={menuOpen}>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
            </button>
            {/*mobile menu */}
            {menuOpen && (
                <div className="absolute top-full right-0 z-50 w-52 bg-(--pink) p-6 flex flex-col gap-5 text-black text-sm shadow-lg md:hidden rounded-lg hover:shadow-xl ">
                    <a href="#home" onClick={closeMenu}> Home </a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#design-tiers" onClick={closeMenu}>Design Tiers</a>
                    <a href="#booking" onClick={closeMenu}>Booking</a>
                </div>
            )}
        </nav>
    );
}