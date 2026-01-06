import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-dark-navy via-navy to-dark-blue text-white pt-40 pb-24">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/50 via-transparent to-navy/80"></div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#4a90e2 1px, transparent 1px), linear-gradient(90deg, #4a90e2 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        {/* Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Elegant Shield Icon Above Title */}
          <div className="mb-6 flex justify-center">
            <svg width="48" height="56" viewBox="0 0 48 56" className="opacity-80">
              <path
                d="M24 2 L44 10 L44 28 C44 42 24 52 24 52 C24 52 4 42 4 28 L4 10 Z"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-serif">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gold bg-clip-text text-transparent">
              Solomon & Park
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10 shadow-lg shadow-gold/50"></div>
          <p className="text-2xl md:text-3xl mb-10 text-gray-200 leading-relaxed font-light tracking-wide">
            Premium College Applications Consulting
          </p>
          <p className="text-lg md:text-xl mb-14 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your college application journey with personalized guidance from
            experienced consultants. We specialize in creating compelling narratives
            that showcase your unique story and maximize your admission potential to
            top-tier universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="btn-secondary text-lg px-12 py-4 group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/what-we-offer"
              className="bg-navy hover:bg-dark-blue text-white font-semibold py-4 px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent-blue/20 text-lg border border-accent-blue/30 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Elegant Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#1a2332"
            opacity="1"
          />
          <path
            d="M0 100L48 95C96 90 192 80 288 75C384 70 480 70 576 72.5C672 75 768 80 864 82.5C960 85 1056 85 1152 82.5C1248 80 1344 75 1392 72.5L1440 70V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V100Z"
            fill="#0a1628"
            opacity="0.7"
          />
        </svg>
      </div>
    </section>
  );
}
