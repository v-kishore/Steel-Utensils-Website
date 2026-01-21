"use clients";

export default function WhyChooseUs() {
  const items = [
    {
      title: "High Quality",
      description:
        "We deliver top-notch products built with performance and reliability in mind.",
      link: "#",
    },
    {
      title: "Expert Team",
      description:
        "Our experienced professionals ensure the best solutions for your needs.",
      link: "#",
    },
    {
      title: "Customer Support",
      description:
        "We provide dedicated support to help you at every step of the journey.",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-15 bg-gray-400 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                group rounded-2xl border border-white/50
                bg-white/5 backdrop-blur-md
                p-8 transition-all duration-300
                hover:bg-white/10 hover:-translate-y-2
              "
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {item.description}
              </p>

              <a
                href={item.link}
                className="
                  inline-flex items-center text-sm font-medium
                  text-white group-hover:text-gray-200
                  transition
                "
              >
                Read more
                <span className="ml-2 group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
