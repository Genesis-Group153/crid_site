'use client';

import { PageHeader } from '@/components/PageHeader';
import { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: 'Research & Policy Advisory',
    description:
      'Evidence-based research and policy analysis to inform decision-making and drive sustainable development outcomes.',
    details: [
      'Applied research in health, education, and social development',
      'Policy analysis and recommendations',
      'Feasibility studies and needs assessments',
      'Data collection and analysis (quantitative and qualitative)',
    ],
  },
  {
    title: 'Professional Training & Mentorship',
    description:
      'Tailored capacity building programs that strengthen individual and institutional capabilities.',
    details: [
      'Customized training workshops and seminars',
      'Leadership and management development',
      'Mentorship and coaching programs',
      'Technical skills development',
    ],
  },
  {
    title: 'Monitoring, Evaluation & Learning (MEL)',
    description:
      'Comprehensive MEL frameworks and assessments to measure impact and improve program effectiveness.',
    details: [
      'MEL system design and implementation',
      'Baseline, midline, and endline evaluations',
      'Impact assessments and learning documentation',
      'Performance monitoring and reporting',
    ],
  },
  {
    title: 'Organizational & Institutional Development',
    description:
      'Strategic support to strengthen governance, operations, and sustainability of organizations.',
    details: [
      'Organizational capacity assessments',
      'Strategic planning and governance support',
      'Policy development and operational frameworks',
      'Digital transformation and knowledge management',
    ],
  },
  {
    title: 'Leadership & Mentorship Programs',
    description:
      'Developing the next generation of leaders through structured programs and experiential learning.',
    details: [
      'Youth leadership development',
      'Women\'s leadership and empowerment',
      'Executive coaching and mentorship',
      'Professional networking and career development',
    ],
  },
  {
    title: 'Community Empowerment Initiatives',
    description:
      'Participatory programs that build resilience and foster sustainable community development.',
    details: [
      'Community needs assessments',
      'Participatory action research',
      'Livelihoods and economic empowerment',
      'Community health and education initiatives',
    ],
  },
  {
    title: 'Program Design, Proposal Writing & Grant Management',
    description:
      'Expert support in designing impactful programs and securing funding for development initiatives.',
    details: [
      'Program design and theory of change development',
      'Proposal writing and donor engagement',
      'Grant management and compliance',
      'Budget development and financial management',
    ],
  },
  {
    title: 'Knowledge Management & Innovation Platforms',
    description:
      'Creating systems and platforms that capture, share, and scale best practices and innovations.',
    details: [
      'Knowledge management system design',
      'Documentation of lessons learned and best practices',
      'Innovation labs and pilot projects',
      'Communities of practice facilitation',
    ],
  },
];

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
              CRID International offers a comprehensive range of services designed to strengthen
              institutions, build capacity, and drive sustainable development outcomes.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="card cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="heading-4 mb-2 text-brand-primary">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`ml-4 flex-shrink-0 text-brand-accent transition-transform ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 border-t border-slate-200 pt-4">
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle
                                size={18}
                                className="mt-0.5 flex-shrink-0 text-brand-accent"
                              />
                              <span className="text-sm text-slate-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
            Contact us to discuss how our services can support your goals and drive measurable
            impact.
          </p>
          <a href="/contact" className="btn-primary">
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  );
}

