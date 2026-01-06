import Link from 'next/link';

export default function Pricing() {
  const packages = [
    {
      name: 'Essential',
      price: 'Contact for pricing',
      description:
        'Perfect for students who need focused guidance on key components',
      features: [
        'Initial consultation & profile assessment',
        'Strategic planning session (1-2 weeks)',
        'Common App essay development',
        'Up to 3 supplemental essays',
        '2 rounds of comprehensive editing',
        'Email support throughout process',
      ],
      highlighted: false,
    },
    {
      name: 'Premium',
      price: 'Contact for pricing',
      description:
        'Our most popular package for comprehensive application support',
      features: [
        'Everything in Essential, plus:',
        'Extended persona development (4 weeks)',
        'Weekly Zoom consultation sessions',
        'Unlimited supplemental essays',
        'Continuous editing (8 weeks)',
        'School selection strategy',
        'Interview preparation session',
        'Priority email & messaging support',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: 'Contact for pricing',
      description:
        'White-glove service for students targeting top-tier universities',
      features: [
        'Everything in Premium, plus:',
        'Extended strategic planning',
        'Twice-weekly Zoom sessions',
        'Resume/CV development',
        'Multiple mock interview sessions',
        'Scholarship application support',
        'Waitlist & deferral strategies',
        '24/7 priority support',
        'Parent consultation sessions',
      ],
      highlighted: false,
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-dark-navy to-navy">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investment in Your Future
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto mb-6 shadow-lg shadow-gold/50"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Choose the package that best fits your needs. All packages include
            our proven three-phase methodology and personalized attention from
            both founders.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-gradient-to-br from-dark-blue to-accent-blue text-white transform scale-105 shadow-2xl border-4 border-gold'
                  : 'bg-gradient-to-br from-dark-navy to-dark-blue hover:shadow-gold/20 border border-dark-blue'
              }`}
            >
              {pkg.highlighted && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 text-center ${
                  pkg.highlighted ? 'text-white' : 'text-white'
                }`}
              >
                {pkg.name}
              </h3>

              <div className="text-center mb-4">
                <div
                  className={`text-3xl font-bold ${
                    pkg.highlighted ? 'text-gold' : 'text-gold'
                  }`}
                >
                  {pkg.price}
                </div>
              </div>

              <p
                className={`text-center mb-6 ${
                  pkg.highlighted ? 'text-blue-100' : 'text-gray-300'
                }`}
              >
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span
                      className={`mr-2 mt-1 ${
                        pkg.highlighted ? 'text-gold' : 'text-gold'
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        pkg.highlighted ? 'text-white' : 'text-gray-300'
                      } ${
                        feature.includes('Everything in') ? 'font-semibold' : ''
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-gold hover:bg-yellow-500 text-black'
                    : 'bg-dark-blue hover:bg-accent-blue text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-dark-blue to-accent-blue text-white rounded-2xl p-8 text-center shadow-2xl border border-accent-blue/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have Questions About Pricing?
            </h2>
            <p className="text-lg mb-6 text-gray-200">
              We're happy to discuss our packages and help you find the right
              fit for your needs
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
