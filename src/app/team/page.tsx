'use client';

import { PageHeader } from '@/components/PageHeader';
import { TeamCard } from '@/components/TeamCard';
import { TeamModal } from '@/components/TeamModal';
import { useState, useEffect } from 'react';
import type { TeamMember } from '@/lib/content';

// Note: Metadata is defined in layout.tsx for client components
// For SEO, this page uses the root metadata configuration

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    fetch('/api/team')
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch(() => {
        // Fallback data if API fails
        setTeam([
          {
            name: 'Atuhaire Edgar',
            title: 'Executive Director',
            photo: '/crid/Atuhaire.jpg',
            bio: 'Public Health Specialist & Educator with 16+ years of experience in health systems strengthening, institutional development, and program implementation across East Africa. WHO/HRP Research Fellow and PhD Candidate (University of Ghana) specializing in Population, Family, and Reproductive Health. Leads CRID in research, gender & development, institutional capacity building, and youth empowerment; contributor to national strategies, training manuals, and policy reforms.',
            links: [],
          },
          {
            name: 'Humphrey Atwijukiire, BNS, MHSR',
            title: 'Research Fellow | Health Services Researcher | Public Health Scientist',
            photo: '/crid/Akatwijuka.jpg',
            bio: 'Health services researcher with expertise in health systems, mental health, climate & health, infectious disease, and digital health. Skilled in Stata, SPSS, NVivo, Atlas.ti, and R. Has contributed to malaria elimination, HIV care, climate resilience, and AI-in-health projects; authored peer-reviewed publications and secured multiple competitive research grants and fellowships.',
            links: [
              { type: 'email', href: 'mailto:htwijukiire@gmail.com' },
              { type: 'tel', href: 'tel:+256775131535' },
              { type: 'external', label: 'ResearchGate', href: '#' },
            ],
          },
        ]);
      });
  }, []);

  return (
    <>
      <PageHeader title="Our Team" breadcrumbs={[{ label: 'Team', href: '/team' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="body-large mx-auto max-w-3xl">
              Our multidisciplinary team brings together expertise in research, public health,
              education, gender development, and organizational capacity building. Meet the people
              driving impact across Africa.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                index={index}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />

      {/* Join Us CTA */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4 text-brand-primary">Join Our Team</h2>
          <p className="body-large mx-auto mb-8 max-w-2xl">
            We&apos;re always looking for passionate professionals who share our commitment to
            sustainable development and institutional excellence.
          </p>
          <a href="/contact" className="btn-primary">
            Explore Opportunities
          </a>
        </div>
      </section>
    </>
  );
}

