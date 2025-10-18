import { PageHeader } from '@/components/PageHeader';
import { FocusAreaCard } from '@/components/FocusAreaCard';
import { getProfileData } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Focus Areas',
  description:
    'Explore CRID International\'s focus areas including RMNCAH, SRHR, Gender Development, Organizational Support, Training, MEL, and Education.',
};

const focusIcons = ['Heart', 'Users', 'TrendingUp', 'Building', 'GraduationCap', 'FileText', 'Lightbulb'] as const;

export default async function FocusAreasPage() {
  const profile = await getProfileData();

  return (
    <>
      <PageHeader
        title="Our Focus Areas"
        breadcrumbs={[{ label: 'Focus Areas', href: '/focus-areas' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="body-large mx-auto max-w-3xl">
              CRID International delivers comprehensive solutions across multiple sectors to drive
              sustainable development, institutional excellence, and human capital growth
              throughout Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {profile.focusAreas.map((area, index) => (
              <FocusAreaCard
                key={index}
                title={area.title}
                points={area.points}
                iconName={focusIcons[index]}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4 text-brand-accent">
            Let&apos;s Collaborate on Your Next Initiative
          </h2>
          <p className="body-large mx-auto mb-8 max-w-2xl">
            Our multidisciplinary team is ready to support your organization&apos;s goals with
            evidence-based solutions.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

