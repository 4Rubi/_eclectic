
import arrow from "../assets/arrowdown.svg";
const services = ["Manicure", "Pedicure", "Nail Art", "Gel Nails", "Acrylic Nails"];
export default function Services () {
    return (
        <section id="services" className="min-h-[screen] flex flex-col justify-center py-20">
            <div className="flex justify-end gap-8 text-black text-sm mb-16">
                <span>Home</span>
                <span>Service</span>
                <span>Booking</span>
            </div>
            <h2 className="text-center text-black text-sm mb-12">Services</h2>
            {/*Service Cards*/}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <div key={service} className="bg-(--pink) h-64 flex items-end justify-center pb-6">
                        <p className="text-black text-sm">{service}</p>
                    </div>
                ))}
            </div>
            {/*down arrow button*/ }
            <div className="flex justify-center mt-12">
                <button className="Button bg-(--brown) rounded-full px-10 py-3 text-white">
                    <img src={arrow} alt="Down Arrow" className="animate-bounce object-contain" />
                </button>
            </div>
        </section>
    );
}