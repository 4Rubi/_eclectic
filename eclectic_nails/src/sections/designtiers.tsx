import Button from "../components/button";


const tiers = [ 
    {
        tier: "Tier 1",
        name: "Simple",
        price: "Ksh.(800-1000)",
        items: ["French Tips", "Swirls", "Polka Dots", "Accent Nails", "Cat eye"],
    },
    {
        tier: "Tier 2",
        name: "Detailed",
        price: "Ksh.(1000-1500)",
        items: ["Isolated Chrome", "Animal Print", "Simple 3D Art", "Multicolor Auras", "Layered Designs"],
    },
    {
        tier: "Tier 3",
        name: "Premium",
        price: "Ksh.(1500)+",
        items: ["Multiple Techniques", "3D Jelly Art", "Mix & Match Designs", "Detailed Custom Art", "Maximalist Designs"],
    },];
export default function DesignTiers() {
  return (
    <section
      id="design-tiers"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      {/* Heading */}
      <div className="text-center mb-12 ">
        <h2 className="text-black text-lg bg-black/10 p-1.5 w-25% rounded-xl shadow-md inline-block">
          Design Tiers
        </h2>

        <p className="text-black/70 text-sm mt-2">
          Choose how detailed you want it
        </p>
      </div>

      {/* Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
        {tiers.map((tier) => (
          <div
            key={tier.tier}
            className="bg-(--wwhite) p-8 min-h-96 shadow-md transition rounded-xl duration-300 hover:-translate-y-2 hover:rotate-2 "
          >
            <p className="text-md font-bold">
              {tier.tier}
            </p>

            <h3 className="text-2xl text-md mt-2 text-bold">
              {tier.name}
            </h3>

            <p className="mt-3 font-medium">
              {tier.price}
            </p>

            <ul className="mt-8 space-y-2 text-md">
              {tier.items.map((item) => (
                <li key={item}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Next section */}
      <div className="flex justify-center mt-12">
        <Button text="Book an Appointment" href="#booking"/>
      </div>
    </section>
  );
}