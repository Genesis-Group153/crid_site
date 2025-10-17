'use client';

import { PageHeader } from '@/components/PageHeader';
import { ContactPanel } from '@/components/ContactPanel';
import { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import type { ContactInfo } from '@/lib/content';

export default function ContactPage() {
  const [contact, setContact] = useState<ContactInfo | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch(() => {
        // Fallback
        setContact({
          hq: 'Plot [Insert Address], Kampala, Uganda',
          phone: '+256-772699471',
          email: 'info@cridinternational.org',
          web: 'www.cridinternational.org',
          regional: ['Kigali, Rwanda', 'Nairobi, Kenya', 'Juba, South Sudan'],
        });
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with Formspree or other form service endpoint
    const mailtoLink = `mailto:info@cridinternational.org?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={[{ label: 'Contact', href: '/contact' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="body-large mx-auto max-w-3xl">
              Get in touch with us to discuss partnerships, collaborations, or inquiries about our
              services and programs. We&apos;re here to support your goals.
            </p>
          </div>

          {contact && <ContactPanel contact={contact} />}

          {/* Contact Form */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="card">
              <h2 className="heading-3 mb-6 text-brand-primary">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    placeholder="Partnership Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <div className="text-sm text-slate-600">
                  <p>
                    Note: This form will open your default email client. For alternative submission
                    methods, email us directly at{' '}
                    <a href="mailto:info@cridinternational.org" className="text-brand-accent">
                      info@cridinternational.org
                    </a>
                  </p>
                </div>

                <button type="submit" className="btn-primary group w-full sm:w-auto">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface py-12">
        <div className="container-custom">
          <div className="aspect-video overflow-hidden rounded-lg bg-slate-200">
            <div className="flex h-full items-center justify-center text-slate-500">
              <p>Map integration placeholder - Add Google Maps or OpenStreetMap embed here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

