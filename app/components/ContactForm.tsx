'use client';

import { useState } from 'react';

declare global {
  function gtag(...args: unknown[]): void;
  function fbq(...args: unknown[]): void;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    revenue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', { send_to: 'AW-11353830288/2anpCMuBkekYEJDn9qUq' });
        }
        if (typeof fbq === 'function') {
          fbq('track', 'Lead');
        }
        setSubmitMessage('Thanks for reaching out! We\'ll be in touch soon.');
        setFormData({ name: '', company: '', phone: '', email: '', revenue: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-gray-900"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-gray-900"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-gray-900"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-gray-900"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="revenue" className="block text-sm font-semibold text-gray-900 mb-2">
            Annual Business Revenue *
          </label>
          <select
            id="revenue"
            name="revenue"
            value={formData.revenue}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition text-gray-900 bg-white"
          >
            <option value="" disabled>Select your annual revenue</option>
            <option value="Under $250K">Under $250K</option>
            <option value="$250K - $500K">$250K – $500K</option>
            <option value="$500K - $1M">$500K – $1M</option>
            <option value="$1M - $5M">$1M – $5M</option>
            <option value="$5M+">$5M+</option>
          </select>
        </div>

        {submitMessage && (
          <div className={`p-4 rounded-lg ${submitMessage.includes('Thanks') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {submitMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Book Free Consultation'}
        </button>
      </form>
    </div>
  );
}
