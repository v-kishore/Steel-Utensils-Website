import Link from "next/link";

export default function ExperienceWholesale() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden rounded-2xl">
            <img
              src="/experience.jpg"
              alt="Experience & Wholesale Exports"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience & Wholesale Exports
            </h2>

            <p className="text-gray-600 mb-4">
              With years of industry experience, we specialize in delivering
              high-quality products through reliable wholesale export channels.
            </p>

            <p className="text-gray-600 mb-6">
              Our global network and logistics expertise ensure timely delivery
              and consistent quality across international markets.
            </p>

            <Link
              href="/experience"
              className="
                inline-flex items-center text-sm font-medium
                text-black hover:underline
              "
            >
              Read more
              <span className="ml-2">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
