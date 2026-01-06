import Link from "next/link";

export default function WhatWeOffer() {
  const offerings = [
    {
      title: "Comprehensive Profile Assessment",
      description:
        "We conduct an in-depth analysis of your academic achievements, extracurricular activities, and personal experiences to identify your unique strengths and competitive advantages.",
      features: [
        "Detailed academic record evaluation",
        "Extracurricular activity analysis",
        "Personal strength identification",
        "Competitive positioning strategy",
      ],
    },
    {
      title: "Persona & Story Development",
      description:
        "Through intensive collaborative sessions, we craft a compelling narrative that authentically represents who you are while resonating with admissions committees.",
      features: [
        "Weekly Zoom consultation sessions",
        "Personal brand development",
        "Narrative arc construction",
        "Authentic voice cultivation",
      ],
    },
    {
      title: "Essay Writing & Editing",
      description:
        "From brainstorming to final polish, we guide you through every stage of essay development, ensuring each piece showcases your unique perspective and writing excellence.",
      features: [
        "Common App essay development",
        "Supplemental essay strategies",
        "Multiple revision rounds",
        "Line-by-line editing feedback",
      ],
    },
    {
      title: "Strategic School Selection",
      description:
        "We help you build a balanced college list that aligns with your goals, maximizes your chances of admission, and ensures you'll thrive academically and personally.",
      features: [
        "Reach, target, and safety school identification",
        "Program-specific guidance",
        "Scholarship opportunity research",
        "Fit assessment and recommendations",
      ],
    },
    {
      title: "Application Strategy & Timeline",
      description:
        "Stay on track with a customized timeline that ensures every component of your application receives proper attention and is submitted on time.",
      features: [
        "Personalized application calendar",
        "Deadline management",
        "Priority task identification",
        "Progress monitoring and accountability",
      ],
    },
    {
      title: "Interview Preparation",
      description:
        "Build confidence and polish your presentation skills with mock interviews, feedback sessions, and proven strategies for showcasing your best self.",
      features: [
        "Mock interview sessions",
        "Question and answer preparation",
        "Body language and presentation coaching",
        "School-specific interview strategies",
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-dark-navy to-navy">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Offer
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto mb-6 shadow-lg shadow-gold/50"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Comprehensive college application consulting services designed to showcase
            your unique story and maximize your admission potential. Our proven
            methodology combines strategic planning, personalized guidance, and
            meticulous attention to detail.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-20 bg-gradient-to-br from-dark-navy to-dark-blue rounded-2xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto border border-dark-blue">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our 13-Week Program Timeline
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 md:w-40">
                <span className="inline-block bg-dark-blue text-white px-4 py-2 rounded-lg font-semibold border border-accent-blue/30">
                  Weeks 1-2
                </span>
              </div>
              <div className="flex-1 ml-4 md:ml-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Strategic Planning
                </h3>
                <p className="text-gray-300">
                  Initial consultations, profile assessment, and development of your
                  personalized application strategy.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 md:w-40">
                <span className="inline-block bg-gold text-white px-4 py-2 rounded-lg font-semibold">
                  Weeks 3-6
                </span>
              </div>
              <div className="flex-1 ml-4 md:ml-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Persona Development
                </h3>
                <p className="text-gray-300">
                  Intensive sessions to craft your unique narrative, identify your
                  personal brand, and develop compelling storylines for your essays.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-32 md:w-40">
                <span className="inline-block bg-yale-light text-white px-4 py-2 rounded-lg font-semibold">
                  Weeks 7-13
                </span>
              </div>
              <div className="flex-1 ml-4 md:ml-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Continuous Editing & Refinement
                </h3>
                <p className="text-gray-300">
                  Constant editing support, multiple revision rounds, and polish of all
                  application materials to perfection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-dark-navy to-dark-blue rounded-2xl p-8 shadow-2xl hover:shadow-gold/20 transition-all duration-300 border-l-4 border-gold"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {offering.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {offering.description}
              </p>
              <ul className="space-y-2">
                {offering.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-gold mr-2 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-dark-blue to-accent-blue text-white rounded-2xl p-12 text-center max-w-4xl mx-auto shadow-2xl border border-accent-blue/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's work together to create an application that stands out
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-secondary text-lg">
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="bg-white text-dark-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
