import { PageHeader } from '@/components/PageHeader';
import { ResourceList } from '@/components/ResourceList';
import { getResourcesData } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Access CRID International\'s publications, reports, and educational materials on sustainable development and capacity building.',
};

export default async function ResourcesPage() {
  const resources = await getResourcesData();

  return (
    <>
      <PageHeader
        title="Resources"
        breadcrumbs={[{ label: 'Resources', href: '/resources' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="body-large mx-auto max-w-3xl">
              Access our publications, organizational profiles, and other resources that showcase
              our work and insights on sustainable development across Africa.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <h2 className="heading-3 mb-6 text-brand-primary">Publications & Documents</h2>
            <ResourceList resources={resources} />
          </div>

          {/* Placeholder for future blog/articles */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="heading-3 mb-6 text-brand-primary">Latest Insights</h2>
            <div className="card text-center">
              <p className="text-slate-600">
                Our blog and article section is coming soon. Stay tuned for insights, research
                findings, and stories from the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4 text-brand-primary">Stay Updated</h2>
          <p className="body-large mx-auto mb-8 max-w-2xl">
            Subscribe to our newsletter to receive the latest updates, research findings, and
            opportunities from CRID International.
          </p>
          <a
            href="mailto:info@cridinternational.org?subject=Newsletter Subscription"
            className="btn-primary"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </section>
    </>
  );
}

