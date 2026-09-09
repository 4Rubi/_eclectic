export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6">
            <div className="logo bg-(--pink) rounded-full px-5 py-3 text-white text-sm whitespace-nowrap">
                Eclectic Nails
            </div>

            <div className="navbar hidden md:flex gap-8 text-black text-sm ">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#design-tiers">Design Tiers</a>
                <a href="#booking">Booking</a>
            </div>
        </nav>
    );
}