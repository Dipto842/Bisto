const CONTACT = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-500 mt-2">
              We are here to help you anytime
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Info */}
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold text-lg">📍 Address</h3>
                <p className="text-gray-600">green Rood, Dhaka, Bangladesh</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <p className="text-gray-600">+880 1791620986</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <p className="text-gray-600">diptobakshi72@gmail.com</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold text-lg">⏰ Opening Hours</h3>
                <p className="text-gray-600">10:00 AM - 10:00 PM</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">Send Message</h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <iframe
              className="w-full h-64 rounded-xl shadow"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CONTACT;
