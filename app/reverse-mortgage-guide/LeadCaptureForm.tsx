'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/reverse-mortgage-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-fairway-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Free Guide Is Ready!</h3>
        <p className="text-gray-600 mb-8">
          Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Dave will also personally reach out to answer any questions.
        </p>
        <Link
          href="/reverse-mortgage-guide/guide"
          className="block w-full px-8 py-4 bg-fairway-green text-white font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full text-center"
        >
          Read the Complete Reverse Mortgage Guide →
        </Link>
        <p className="mt-6 text-sm text-gray-500">
          Or call Dave now:{' '}
          <a href="tel:+19045098762" className="font-semibold text-fairway-green hover:underline">
            (904) 509-8762
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Get Your Free Guide</h3>
        <p className="text-gray-500 text-sm mt-1">Enter your info below — no spam, ever.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fairway-green focus:border-transparent outline-none transition text-gray-900"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Cell Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fairway-green focus:border-transparent outline-none transition text-gray-900"
            placeholder="(904) 555-0123"
          />
        </div>

        {error && (
          <div className="p-4 rounded-lg bg-red-50 text-red-800 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-fairway-green text-white font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Me the Free Guide →'}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting, you agree to be contacted by Dave Davis regarding your reverse mortgage inquiry.
        </p>
      </form>
    </div>
  );
}
