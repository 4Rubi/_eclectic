export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6">
            <div className="logo bg-(--pink) rounded-full px-5 py-3 text-white text-sm whitespace-nowrap">
                Eclectic Nails
            </div>

            <div className="navbar hidden md:flex gap-8 text-black text-sm ">
                <a>Home</a>
                <a>Services</a>
                <a>Booking</a>
            </div>
        </nav>
    );
}