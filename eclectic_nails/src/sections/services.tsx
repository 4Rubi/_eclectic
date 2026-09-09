import ServiceCard from "../components/servicecard";
import Button from "../components/button";

const services = [
  "Manicure",
  "Gel X",
  "Custom Press-ons",
  "Tips & Gel",
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      {/* Title */}
      <h2 className="text-center text-black text-sm mb-12">
        Services
      </h2>

      {/* Service cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service}
            title={service}
          />
        ))}
      </div>

      {/* Continue to design tiers */}
      <div className="flex justify-center mt-12">
        <Button
          text="↓"
          href="#design-tiers"
        />
      </div>
    </section>
  );
}