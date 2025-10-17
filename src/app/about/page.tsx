import { PageHeader } from '@/components/PageHeader';
import { getProfileData } from '@/lib/content';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';
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
          <div className="mx-auto max-w-4xl">
            <p className="body-large mb-8 text-center">{profile.about}</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card">
              <div className="mb-4 inline-flex rounded-lg bg-brand-accent/10 p-3 text-brand-accent">
                <Eye size={32} />
              </div>
              <h2 className="heading-3 mb-4 text-brand-primary">Our Vision</h2>
              <p className="leading-relaxed text-slate-600">{profile.vision}</p>
            </div>

            <div className="card">
              <div className="mb-4 inline-flex rounded-lg bg-brand-accent/10 p-3 text-brand-accent">
                <Target size={32} />
              </div>
              <h2 className="heading-3 mb-4 text-brand-primary">Our Mission</h2>
              <p className="leading-relaxed text-slate-600">{profile.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="heading-2 mb-4 text-brand-primary">Our Core Values</h2>
            <p className="body-large mx-auto max-w-2xl">
              These principles guide everything we do and how we work with our partners and
              communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profile.coreValues.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-brand-accent/10 p-4 text-brand-accent">
                  <Award size={28} />
                </div>
                <h3 className="heading-4 text-brand-primary">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="heading-2 mb-4 text-brand-primary">Our Approach</h2>
            <p className="body-large mx-auto max-w-2xl">
              We employ a holistic, evidence-based methodology that ensures sustainable impact.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {profile.approach.map((item, index) => (
              <div key={index} className="card flex items-start gap-4">
                <CheckCircle size={24} className="mt-1 flex-shrink-0 text-brand-accent" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legitimacy & Networks */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="heading-2 mb-6 text-center text-brand-primary">
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

