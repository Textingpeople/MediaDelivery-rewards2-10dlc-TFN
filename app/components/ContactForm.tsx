'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClass =
    'block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent';
  const labelClass = 'block text-sm font-medium text-text-headline mb-2';

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-text-headline mb-3">Message Sent!</h2>
        <p className="text-text-body mb-6">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-text-headline mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
            className={inputClass} placeholder="John Doe" />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
            className={inputClass} placeholder="john@company.com" />
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>Subject *</label>
          <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}
            className={`${inputClass} bg-white`}>
            <option value="">Select a subject...</option>
            <option value="general">General Inquiry</option>
            <option value="perks">Question About Perks</option>
            <option value="support">Technical Support</option>
            <option value="privacy">Privacy Request</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Message *</label>
          <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange}
            className={inputClass} placeholder="How can we help you?" />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-primary hover:bg-primary-hover text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}
