export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to work with us?  
            Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              We are always open to discuss your project, wholesale
              requirements, or customization needs.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-medium text-black">Email:</span>{" "}
                info@yourbrand.com
              </li>
              <li>
                <span className="font-medium text-black">Phone:</span>{" "}
                +1 234 567 890
              </li>
              <li>
                <span className="font-medium text-black">Address:</span>{" "}
                Global Operations
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <button
                type="submit"
                className="
                  w-full rounded-full bg-black text-white
                  py-3 font-medium
                  hover:bg-gray-800 transition
                "
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
