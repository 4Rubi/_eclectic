import ServiceCard from "../components/servicecard";
import Button from "../components/button";
import manicureImg from "../assets/manicure.jpg";

import gelxImg from "../assets/gel-x.jpg";
import pressonsImg from "../assets/presson.jpg";
import tipsgelImg from "../assets/tips&gel.jpg";
{/*import { MdDescription } from "react-icons/md";*/}


const services = [
  {
    title:"Manicure",
    description:"Nail care, shaping and finishing.",
    image: manicureImg,
  },
  {
    title:"Gel X",
    description:"Soft gel extensions for a clean finish.",
    image: gelxImg
  },
  {
    title:"Custom Press-ons",
    description:"Custom-made reusable nail sets.",
    image: pressonsImg
  },
  {
    title:"Tips & Gel",
    description:"Nail tips finished with gel.",
    image: tipsgelImg
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-center py-20">
      <div className="text-center mb-12">
        <h2 className="bg-black/10 p-1.5 w-25% rounded-xl inline-block text-center text-black text-sm">
          Services
        </h2>
        <p className="text-black/80 text-sm mt-2">
          Select your desired service
        </p>
      </div>

      {/* Service cards */}
      <div className="servicecard grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} image={service.image}/>
        ))}
      </div>

      {/* Continue to design tiers */}
      <div className="flex justify-center mt-12 animate-bounce  transition duration-300 hover:scale-102">
        <Button text="↓" href="#design-tiers"/>
      </div>
    </section>
  );
}