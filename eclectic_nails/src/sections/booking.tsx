import Button from "../components/button";
import Image from "../assets/idcover.png";

const schedule = [
  "Friday - Sunday","9:00am - 5:00pm","Daystar University",
];
type BookingProps = {onBookNow:() => void;};

export default function Booking({onBookNow,}: BookingProps) {
  return (

    <section
      id="booking"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      {/* Title */}
      <h2 className="text-center text-sm mb-12">
        Schedule
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Avatar */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="Eclectic Nails avatar"
            className="w-[250px] lg:w-[330px] object-contain"
          />
        </div>

        {/* Schedule */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">

          {schedule.map((item) => (
            <div
              key={item} className="bg-white w-72 py-4 rounded-xl text-center shadow-md transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 hover:scale-105"
            >
              <p>{item}</p>
            </div>
          ))}

          <Button text="Book Now" onClick={onBookNow}/>

        </div>

      </div>
    </section>
  );
}