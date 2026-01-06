import Link from 'next/link';

export default function Services() {
  const services = [
    {
      phase: 'Phase 1',
      duration: '1-2 Weeks',
      title: 'Strategic Planning',
      description:
        'We begin by creating a comprehensive roadmap for your college application journey. Through initial consultations, we assess your profile, identify your strengths, and develop a strategic plan tailored to your target schools.',
    },
    {
      phase: 'Phase 2',
      duration: '4 Weeks',
      title: 'Persona Development',
      description:
        'The heart of our process. Through detailed Zoom meetings and collaborative sessions, we work intensively to craft your unique persona and storyline. We help you discover and articulate what makes you distinctive, creating a compelling narrative that resonates with admissions committees.',
    },
    {
      phase: 'Phase 3',
      duration: '8 Weeks',
      title: 'Continuous Editing',
      description:
        'Excellence through refinement. We provide constant editing support, multiple revision rounds, and detailed feedback on all your application materials. Every essay, every response is polished to perfection, ensuring your application represents your best self.',
    },
  ];

  return (
    <section className="section-container bg-gradient-to-b from-navy via-dark-navy to-dark-blue">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Process
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto mb-6 shadow-lg shadow-gold/50"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A proven three-phase methodology designed to bring out your best
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-dark-navy to-dark-blue rounded-2xl p-8 shadow-2xl hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-gold"
          >
            <div className="text-5xl mb-4 text-center">{service.icon}</div>
            <div className="text-sm text-gold font-semibold mb-2 text-center">
              {service.phase}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              {service.title}
            </h3>
            <div className="text-center mb-4">
              <span className="inline-block bg-dark-blue text-white px-4 py-1 rounded-full text-sm font-semibold border border-accent-blue/30">
                {service.duration}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/what-we-offer"
          className="btn-primary text-lg inline-block"
        >
          View Detailed Services
        </Link>
      </div>
    </section>
  );
}
