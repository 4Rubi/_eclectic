
import Button from "../components/button.tsx";
import Image from "../assets/idcover.png";

export default function Hero () {
    return (
        <section id="home" className="min-h-[85vh] flex items-center">
            <div className="w-full flex felx-col-reverse lg:flex-row items-center justify-between gap-12">
                {/*left content*/}
                <div className="text-white w-full lg:w-1/2">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-[.45em] text-var[(--pink)] uppercase mb-8">
                        Eclectic Nails
                    </h1>
                    <ul className="space-y-3 text-sm md:text-base font-light">
                        <li>• Professional Nail Services</li>
                        <li>• Affordable Prices</li>
                        <li>• Best Services</li>
                    </ul>
                    <div className="mt-10">
                        <Button text="Explore Services"/>
                    </div>
                </div>
                {/*right content*/}
                <div className="w-full lg:w-1/2">
                    <img src={Image} alt="Eclectic Nails avatar" className="w-[230px] md:w-[320px] lg:w-[420px] object-contain" />
                </div>
            </div>
        </section>
    )
}