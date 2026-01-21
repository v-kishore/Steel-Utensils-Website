import Link from "next/link";

export default function CustomizeProducts() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Customize Products
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-gray-600 mb-4">
              We specialize in providing customized product solutions tailored
              to your business requirements and market demands.
            </p>
            <p className="text-gray-600 mb-4">
              From material selection to packaging design, our team works closely
              with clients to deliver products that align with their brand identity.
            </p>
            <p className="text-gray-600 mb-4">
              Our customization process ensures flexibility, quality control,
              and scalability for both small and large orders.
            </p>
            <p className="text-gray-600 mb-4">
              With advanced manufacturing capabilities, we support unique
              specifications and innovative designs.
            </p>
            <p className="text-gray-600 mb-6">
              We help businesses stand out in competitive markets with reliable,
              customized product solutions.
            </p>

            <Link
              href="/customize-products"
              className="
                inline-flex items-center text-sm font-medium
                text-black hover:underline
              "
            >
              Read more
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden rounded-2xl">
            <img
              src="/customize-products.jpg"
              alt="Customize Products"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
