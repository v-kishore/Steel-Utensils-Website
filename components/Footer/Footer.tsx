import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              YourBrand
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering quality products and customized solutions
              worldwide with trust, experience, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Wholesale Exports</li>
              <li>Custom Products</li>
              <li>Global Logistics</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@yourbrand.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: Global</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">

          <p className="text-gray-400">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["Facebook", "Twitter", "LinkedIn"].map((social) => (
              <span
                key={social}
                className="
                  h-9 w-9 rounded-full bg-white/10
                  flex items-center justify-center
                  hover:bg-white hover:text-black
                  transition cursor-pointer
                "
              >
                {social[0]}
              </span>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
