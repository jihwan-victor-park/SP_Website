import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-dark-navy text-white py-16 border-t border-accent-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gold">Solomon & Park</h3>
            <p className="text-gray-400">
              Premium college applications consulting for ambitious students
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-offer"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  What We Offer
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <p className="text-gray-400 mb-2">
              Ready to start your journey?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-yellow-500 px-6 py-2 rounded-lg transition-colors font-semibold mt-2 text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-dark-blue pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Solomon & Park. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
