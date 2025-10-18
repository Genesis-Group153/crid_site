import { PageHeader } from '@/components/PageHeader';
import { getProfileData } from '@/lib/content';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about CRID International - our vision, mission, core values, and approach to advancing sustainable development across Africa.',
};

export default async function AboutPage() {
  const profile = await getProfileData();

  return (
    <>
      <PageHeader title="About CRID International" breadcrumbs={[{ label: 'About', href: '/about' }]} />

      {/* Profile Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <p className="body-large mb-6">{profile.about}</p>
              </div>
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50">
                {/* Image placeholder - add team-collaboration.jpg to public/crid/about/ */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card">
              <div className="mb-4 inline-flex rounded-lg bg-brand-secondary-50 p-3 text-brand-secondary">
                <Eye size={32} />
              </div>
              <h2 className="heading-3 mb-4 text-brand-accent">Our Vision</h2>
              <p className="leading-relaxed text-text-light">{profile.vision}</p>
            </div>

            <div className="card">
              <div className="mb-4 inline-flex rounded-lg bg-brand-primary-50 p-3 text-brand-primary">
                <Target size={32} />
              </div>
              <h2 className="heading-3 mb-4 text-brand-accent">Our Mission</h2>
              <p className="leading-relaxed text-text-light">{profile.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="heading-2 mb-4 text-brand-accent">Our Core Values</h2>
            <p className="body-large mx-auto max-w-2xl">
              These principles guide everything we do and how we work with our partners and
              communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profile.coreValues.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-brand-primary-50 p-4 text-brand-primary">
                  <Award size={28} />
                </div>
                <h3 className="heading-4 text-brand-accent">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="heading-2 mb-4 text-brand-accent">Our Approach</h2>
            <p className="body-large mx-auto max-w-2xl">
              We employ a holistic, evidence-based methodology that ensures sustainable impact.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {profile.approach.map((item, index) => (
              <div key={index} className="card flex items-start gap-4">
                <CheckCircle size={24} className="mt-1 flex-shrink-0 text-brand-secondary" />
                <p className="text-text-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legitimacy & Networks */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="heading-2 mb-6 text-center text-brand-accent">
              Legitimacy & Networks
            </h2>
            <div className="card">
              <p className="body-large text-center">{profile.legitimacy}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

