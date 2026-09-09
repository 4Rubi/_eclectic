import Button from "../components/button";
import Image from "../assets/idcover.png";

const schedule = [
  "Friday - Sunday","9:00am - 5:00pm","Daystar University",
];

export default function Booking() {
  return (
    <section
      id="booking"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      {/* Title */}
      <h2 className="text-center text-white text-sm mb-12">
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
              key={item} className="bg-(--pink) w-72 py-4 rounded-xl text-center"
            >
              <p>{item}</p>
            </div>
          ))}

          <Button text="Book Now" />

        </div>

      </div>
    </section>
  );
}