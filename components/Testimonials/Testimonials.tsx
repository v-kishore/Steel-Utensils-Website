export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Retail Corp",
      review:
        "The product quality and customer service exceeded our expectations. Highly recommended!",
    },
    {
      name: "Sarah Lee",
      role: "Wholesale Buyer",
      review:
        "Reliable exports and consistent quality. We've built a long-term partnership with them.",
    },
    {
      name: "Michael Smith",
      role: "International Distributor",
      review:
        "Professional team, smooth logistics, and excellent support throughout the process.",
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Our Client Reviews
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl shadow-sm
                p-8 transition hover:shadow-md
              "
            >
              <p className="text-gray-600 mb-6 leading-relaxed">
                “{item.review}”
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-sm text-gray-500">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
