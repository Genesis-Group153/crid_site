'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ServiceCard } from '@/components/ServiceCard';
import { PartnersCarousel } from '@/components/PartnersCarousel';
import { OrganizationSchema } from '@/components/OrganizationSchema';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Service {
  title: string;
  emoji: string;
  description: string;
  image?: string;
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('/content/crid/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6))) // Show first 6 services
      .catch((error) => console.error('Failed to load services:', error));
  }, []);

  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary-800 to-brand-accent text-white" style={{padding: 'clamp(3rem, 8vw, 10rem) 0'}}>
        <div className="container-custom">
          <div className="mx-auto text-center" style={{maxWidth: 'min(90%, 1200px)', padding: '0 clamp(1rem, 3vw, 2rem)'}}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-1"
              style={{marginBottom: 'clamp(1rem, 3vw, 2rem)'}}
            >
              Research. Skills. Impact.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto"
              style={{maxWidth: 'min(100%, 900px)', marginBottom: 'clamp(2rem, 4vw, 3rem)'}}
            >
              <p className="leading-relaxed text-slate-100" style={{fontSize: 'clamp(0.938rem, 2vw, 1.25rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)'}}>
                CRID International (Centre for Research, Innovations, and Development) is a multidisciplinary research, training, and capacity-building organization advancing sustainable development, institutional excellence, and human capital growth across Africa.
              </p>
              <p className="leading-relaxed text-slate-100" style={{fontSize: 'clamp(0.938rem, 2vw, 1.25rem)', marginBottom: 'clamp(1rem, 2vw, 1.5rem)'}}>
                We translate evidence into practical interventions, strengthen systems in health, education, gender, and socio-economic development, and operate with the philosophy of <span className="font-semibold text-brand-secondary-100">&quot;Skilling for the Future.&quot;</span>
              </p>
              <p className="leading-relaxed text-slate-100" style={{fontSize: 'clamp(0.938rem, 2vw, 1.25rem)'}}>
                With work across East, Central, and West Africa, CRID delivers programs in RMNCAH, SRHR, gender analytics, organizational development, youth/women empowerment, leadership, mentorship, and education skilling — in partnership with governments, universities, development partners, and civil society.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center"
              style={{gap: 'clamp(0.75rem, 2vw, 1.5rem)'}}
            >
              <Link href="/focus-areas" className="btn-primary bg-brand-secondary hover:bg-brand-secondary-700">
                Explore Our Work
              </Link>
              <Link href="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-primary">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center" style={{marginBottom: 'clamp(2rem, 5vw, 4rem)'}}>
            <h2 className="heading-2 text-brand-accent" style={{marginBottom: 'clamp(1rem, 2vw, 1.5rem)'}}>Our Core Services</h2>
            <p className="body-large mx-auto" style={{maxWidth: 'min(100%, 800px)'}}>
              Comprehensive solutions for research, training, and institutional capacity building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-responsive">
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
          
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="bg-surface py-16">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="heading-3 text-brand-accent">Trusted By</h2>
            <p className="mt-2 text-text-light">Partners and clients across Africa</p>
          </div>
          <PartnersCarousel />
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center text-brand-primary">Explore CRID International</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/about" className="card text-center hover:shadow-lg">
              <h3 className="heading-4 text-brand-primary">About Us</h3>
              <p className="text-sm text-slate-600 mt-2">Our vision, mission, and values</p>
            </Link>
            <Link href="/focus-areas" className="card text-center hover:shadow-lg">
              <h3 className="heading-4 text-brand-primary">Focus Areas</h3>
              <p className="text-sm text-slate-600 mt-2">7 key areas of impact</p>
            </Link>
            <Link href="/programs" className="card text-center hover:shadow-lg">
              <h3 className="heading-4 text-brand-primary">Programs</h3>
              <p className="text-sm text-slate-600 mt-2">Flagship initiatives</p>
            </Link>
            <Link href="/team" className="card text-center hover:shadow-lg">
              <h3 className="heading-4 text-brand-primary">Our Team</h3>
              <p className="text-sm text-slate-600 mt-2">Meet the experts</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-brand-primary to-brand-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Partner With Us?</h2>
          <p className="body-large mx-auto mb-8 max-w-2xl text-slate-100">
            Join us in advancing sustainable development and building capacity across Africa.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-brand-secondary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-secondary-700 hover:shadow-xl">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
