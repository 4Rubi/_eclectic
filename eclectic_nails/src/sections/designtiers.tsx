const tiers = [ 
    {
        tier: "",
        name: "",
        price: "",
        items: ["French Tips", "Swirls", "Polka Dots", "Accent Nails", "Cat eye"],
    },
    {
        tier: "",
        name: "",
        price: "",
        items: ["Isolated Chrome", "Animal Print", "Simple 3D Art", "Multicolor Auras", "Layered Designs"],
    },
    {
        tier: "",
        name: "",
        price: "",
        items: ["", "", "", "", ""],
    },];
export default function DesignTiers() {
  return (
    <section
      id="design-tiers"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-black text-sm">
          Design Tiers
        </h2>

        <p className="text-black/70 text-sm mt-2">
          Choose how detailed you want it
        </p>
      </div>

      {/* Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.tier}
            className="bg-(--pink) p-8 min-h-96"
          >
            <p className="text-sm">
              {tier.tier}
            </p>

            <h3 className="text-xl font-medium mt-2">
              {tier.name}
            </h3>

            <p className="mt-3 font-medium">
              {tier.price}
            </p>

            <ul className="mt-8 space-y-2 text-sm">
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
        <a
          href="#booking"
          className="bg-(--brown) text-white px-8 py-3 rounded-full text-sm"
        >
          CONTINUE TO BOOKING
        </a>
      </div>
    </section>
  );
}