'use client';

import { PageHeader } from '@/components/PageHeader';
import { PartnerCard } from '@/components/PartnerCard';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface PartnerOrClient {
  name: string;
  logo: string;
  blurb: string;
  website?: string;
}

interface PartnersData {
  partners: PartnerOrClient[];
  clients: PartnerOrClient[];
}

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState<'partners' | 'clients'>('partners');
  const [data, setData] = useState<PartnersData>({ partners: [], clients: [] });

  useEffect(() => {
    fetch('/api/partners')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Failed to load partners:', error);
      });
  }, []);

  return (
    <>
      <PageHeader
        title="Partners & Clients"
        breadcrumbs={[{ label: 'Partners', href: '/partners' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Hero Image */}
          <div className="relative mx-auto mb-12 h-64 max-w-4xl overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-full w-full">
              <Image
                src="/crid/Partner.png"
                alt="Partnership and Collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-3xl font-bold">Building Partnerships for Impact</h2>
              <p className="mt-2 text-lg">Collaborating across Africa for sustainable development</p>
            </div>
          </div>

          <div className="mb-12 text-center">
            <p className="body-large mx-auto max-w-3xl">
              CRID International collaborates with governments, universities, NGOs, and private sector organizations
              to deliver impactful programs and build capacity across Africa.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-lg border border-slate-200 bg-surface p-1">
              <button
                onClick={() => setActiveTab('partners')}
                className={`rounded-lg px-6 py-3 text-base font-semibold transition-all ${
                  activeTab === 'partners'
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-text-light hover:text-brand-primary'
                }`}
              >
                Partners
              </button>
              <button
                onClick={() => setActiveTab('clients')}
                className={`rounded-lg px-6 py-3 text-base font-semibold transition-all ${
                  activeTab === 'clients'
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-text-light hover:text-brand-primary'
                }`}
              >
                Clients
              </button>
            </div>
          </div>

          {/* Partners Grid */}
          {activeTab === 'partners' && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {data.partners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  name={partner.name}
                  logo={partner.logo}
                  blurb={partner.blurb}
                  website={partner.website}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Clients Grid */}
          {activeTab === 'clients' && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {data.clients.map((client, index) => (
                <PartnerCard
                  key={index}
                  name={client.name}
                  logo={client.logo}
                  blurb={client.blurb}
                  website={client.website}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4 text-brand-primary">Partner With Us</h2>
          <p className="body-large mx-auto mb-8 max-w-2xl">
            Join our network of partners and clients working to advance sustainable development and
            institutional excellence across Africa.
          </p>
          <a href="/contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}

