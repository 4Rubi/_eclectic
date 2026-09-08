export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6">
            <div className="bg-[var(--pink)] rounded-full px-5 py-3 text-white text-sm">
                Eclectic Nails
            </div>

            <div className="hidden md:flex gap-8 text-white text-sm">
                <a>Home</a>
                <a>Services</a>
                <a>Booking</a>
            </div>
        </nav>
    );
}