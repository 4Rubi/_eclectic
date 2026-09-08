import Button from "../components/button";
import Image from "../assets/idcover.png";
export default function Booking () {
    return (
        <section id="booking" className="min-h-screen flex flex-col justify-center py-20">
            {/*top navbar*/}
            <div className="flex justify-end gap-8 text-white text-sm mb-16">
                <span>Home</span>
                <span>Service</span>
                <span>Booking</span>
            </div>
            {/*Title*/}
            <h2 className="text-center text-white text-sm mb-12">Schedule</h2>
            {/*Main layout*/}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/*left side avatar*/}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src={Image} alt="Eclectic Nails avatar" className="w-[250px] lg:w-[330px] object-contain" />
                    </div>
                    {/*right side form*/}
                    <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
                        <div className="bg-(--pink) w-72 py-4 rounded-xl text-center">
                            <p>Friday-Sunday</p>
                        </div>

                        <div className="bg-(--pink) w-72 py-4 rounded-xl text-center">
                            <p>9:00am-5:00pm</p>
                        </div>

                        <div className="bg-(--pink) w-72 py-4 rounded-xl text-center">
                            <p>Daystar University</p>
                        </div>

                        <Button text="Book Now"/>
                    </div>
                </div>
        </section>
    );
}