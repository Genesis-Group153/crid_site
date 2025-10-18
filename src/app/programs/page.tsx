import { PageHeader } from '@/components/PageHeader';
import { ProgramCard } from '@/components/ProgramCard';
import { getProfileData } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Discover CRID International\'s flagship programs driving measurable impact across communities and institutions in Africa.',
};

const programDetails = {
  'Young Professionals Development Program (YPDP)': {
    description:
      'Empowering the next generation of leaders through mentorship, skills training, and experiential learning opportunities.',
    objectives: [
      'Develop leadership and professional competencies among young professionals',
      'Provide mentorship and career guidance from experienced practitioners',
      'Create networking opportunities and knowledge exchange platforms',
      'Link youth to employment and entrepreneurship opportunities',
    ],
    impact:
      'Over 500 young professionals trained across East Africa, with 75% reporting improved career prospects.',
  },
  'Health Systems Innovation Initiative (HSII)': {
    description:
      'Strengthening health systems through evidence-based interventions and innovative solutions for improved maternal and child health outcomes.',
    objectives: [
      'Improve quality of RMNCAH services in underserved communities',
      'Strengthen health workforce capacity through training and mentorship',
      'Pilot and scale innovative health service delivery models',
      'Support health systems research and policy dialogue',
    ],
    impact:
      'Reached 100,000+ beneficiaries across 50 health facilities with improved RMNCAH outcomes.',
  },
  'Gender and Equity Advancement Program (GEAP)': {
    description:
      'Promoting gender equality and women\'s empowerment through research, advocacy, and capacity building initiatives.',
    objectives: [
      'Conduct gender analysis and research to inform policy and programming',
      'Empower women through skills development and leadership training',
      'Advocate for gender-responsive policies and practices',
      'Support organizations to mainstream gender in their operations',
    ],
    impact:
      '1,000+ women empowered through skills training; 20+ organizations supported in gender mainstreaming.',
  },
  'Community Resilience and Empowerment Project (CREP)': {
    description:
      'Building resilient communities through participatory approaches and sustainable development interventions.',
    objectives: [
      'Strengthen community-led development initiatives',
      'Improve livelihoods through economic empowerment programs',
      'Enhance community capacity to respond to shocks and stresses',
      'Foster social cohesion and collective action',
    ],
    impact:
      '50+ communities engaged; 2,000+ households reporting improved livelihoods and resilience.',
  },
  'Research for Policy and Practice Program (RPPP)': {
    description:
      'Translating research evidence into actionable policies and practices for improved development outcomes.',
    objectives: [
      'Conduct applied research on critical development challenges',
      'Facilitate evidence-to-policy dialogue and knowledge translation',
      'Build research capacity among practitioners and policymakers',
      'Document and disseminate best practices and lessons learned',
    ],
    impact:
      '30+ research studies completed; 10+ policy briefs informing national and regional strategies.',
  },
};

export default async function ProgramsPage() {
  const profile = await getProfileData();

  return (
    <>
      <PageHeader
        title="Our Programs"
        breadcrumbs={[{ label: 'Programs', href: '/programs' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="body-large mx-auto max-w-3xl">
              Our flagship programs represent our commitment to driving measurable impact across
              communities and institutions. Each initiative is designed with evidence-based
              approaches and a focus on sustainability.
            </p>
          </div>

          <div className="space-y-8">
            {profile.flagshipPrograms.map((program, index) => {
              const details = programDetails[program as keyof typeof programDetails];
              return (
                <div key={index} className="card">
                  <h3 className="heading-3 mb-4 text-brand-accent">{program}</h3>
                  <p className="body-large mb-6">{details.description}</p>

                  <div className="mb-6">
                    <h4 className="heading-4 mb-3 text-brand-primary">Key Objectives</h4>
                    <ul className="space-y-2">
                      {details.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-secondary" />
                          <span className="text-text-light">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-surface p-4">
                    <h4 className="mb-2 font-semibold text-brand-accent">Impact Highlights</h4>
                    <p className="text-text-light">{details.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4 text-brand-accent">
            Interested in Partnering on a Program?
          </h2>
          <p className="body-large mx-auto mb-8 max-w-2xl">
            We welcome collaborations with governments, NGOs, development partners, and academic
            institutions to scale our impact.
          </p>
          <a href="/contact" className="btn-primary">
            Explore Partnership Opportunities
          </a>
        </div>
      </section>
    </>
  );
}

