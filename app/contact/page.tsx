'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-dark-navy to-navy">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto mb-6 shadow-lg shadow-gold/50"></div>
            <p className="text-xl text-gray-300">
              Ready to transform your college application journey? Contact us
              today and we will reach out to discuss how we can help you achieve
              your goals.
            </p>
          </div>

          <div className="bg-gradient-to-br from-dark-navy to-dark-blue rounded-2xl shadow-2xl p-8 md:p-12 border border-dark-blue">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you for your message! We&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-dark-blue rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-dark-blue rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-dark-blue rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all text-white placeholder-gray-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-dark-blue rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Tell us about your goals and how we can help you..."
                />
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4">
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gradient-to-br from-dark-navy to-dark-blue rounded-xl shadow-2xl border border-dark-blue hover:shadow-gold/20 transition-all">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-gold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">
                We will respond within 24 hours
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-dark-navy to-dark-blue rounded-xl shadow-2xl border border-dark-blue hover:shadow-gold/20 transition-all">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gold mb-2">Expert Guidance</h3>
              <p className="text-gray-300 text-sm">Personalized consultation</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-dark-navy to-dark-blue rounded-xl shadow-2xl border border-dark-blue hover:shadow-gold/20 transition-all">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold text-gold mb-2">Results</h3>
              <p className="text-gray-300 text-sm">Proven success record</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
