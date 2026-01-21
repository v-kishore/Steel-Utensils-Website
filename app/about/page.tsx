import React from "react";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Our Store
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            We are passionate about delivering quality products and exceptional shopping experiences. Our mission is to make online shopping simple, fun, and trustworthy.
          </p>
        </div>
      </section>

      {/* Brand Story / Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="hero.jpg"
              alt="Our Store"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Our goal is to bring high-quality, stylish products right to your doorstep. We carefully select each item to ensure it meets our standards for quality, design, and value.
            </p>
            <p className="text-gray-600">
              From fashion to electronics, we aim to create a shopping experience that’s convenient, reliable, and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Quality Products", desc: "We carefully select the best products for our customers." },
              { title: "Fast Shipping", desc: "Get your orders delivered quickly and reliably." },
              { title: "Excellent Support", desc: "Our friendly team is here to help you anytime." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Community */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Alice Johnson", role: "Founder & CEO", img: "/about/alice.jpg" },
              { name: "Bob Smith", role: "Head of Operations", img: "/about/bob.jpg" },
              { name: "Carol Lee", role: "Creative Director", img: "/about/carol.jpg" },
              { name: "David Kim", role: "Lead Developer", img: "/about/david.jpg" },
            ].map((member) => (
              <div key={member.name} className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-blue-300 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Shopping Today</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Explore our wide range of products and enjoy a seamless shopping experience. Join our community of happy customers now!
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          <Link href="/products">Shop Now</Link>
        </button>
      </section>

    </div>
  );
};

export default AboutPage;
