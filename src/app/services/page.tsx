'use client';

import { PageHeader } from '@/components/PageHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { useState, useEffect } from 'react';

interface Service {
  title: string;
  emoji: string;
  description: string;
  image?: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('/content/crid/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => {
        console.error('Failed to load services:', error);
        // Fallback services if fetch fails
        setServices([
          { title: 'AI & Digital Skills Training', emoji: '🤖', description: 'Practical AI literacy, data skills, and applied tools for teams and learners.' },
          { title: 'Information Technology Courses', emoji: '💻', description: 'Programming, software development, cybersecurity, and digital transformation.' },
          { title: 'Short Courses & Institutional Capacity Building', emoji: '🎓', description: 'Tailored upskilling, governance, strategy, and operational excellence.' },
          { title: 'Consultancy & Research Support', emoji: '🔬', description: 'Research design, evaluations, MEL, and evidence-to-policy advisory.' },
          { title: 'Mentorship & School Partnerships', emoji: '🤝', description: 'Youth leadership, mentorship pipelines, and educator partnerships.' },
          { title: 'Gender Analytics & Development', emoji: '👩🏽‍🤝‍👩🏻', description: 'Gender-responsive research, policy dialogue, and empowerment programs.' },
        ]);
      });
  }, []);

  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumbs={[{ label: 'Services', href: '/services' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="body-large mx-auto max-w-3xl">
              CRID International delivers comprehensive training, research, and capacity-building services
              that empower teams, strengthen institutions, and drive measurable impact across Africa.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                emoji={service.emoji}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4 text-brand-primary">
            Ready to Strengthen Your Organization?
          </h2>
          <p className="body-large mx-auto mb-8 max-w-2xl">
            Contact us to discuss how our services can support your goals and drive measurable impact.
          </p>
          <a href="/contact" className="btn-primary">
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
