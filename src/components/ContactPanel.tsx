'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import type { ContactInfo } from '@/lib/content';

interface ContactPanelProps {
  contact: ContactInfo;
}

export function ContactPanel({ contact }: ContactPanelProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Headquarters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card"
      >
        <h3 className="heading-4 mb-4 text-brand-primary">Headquarters</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-0.5 flex-shrink-0 text-brand-accent" />
            <span className="text-slate-600">{contact.hq}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={20} className="flex-shrink-0 text-brand-accent" />
            <a href={`tel:${contact.phone}`} className="text-slate-600 hover:text-brand-accent">
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={20} className="flex-shrink-0 text-brand-accent" />
            <a
              href={`mailto:${contact.email}`}
              className="text-slate-600 hover:text-brand-accent"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Globe size={20} className="flex-shrink-0 text-brand-accent" />
            <a
              href={`https://${contact.web}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-brand-accent"
            >
              {contact.web}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Regional Offices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="card"
      >
        <h3 className="heading-4 mb-4 text-brand-primary">Regional Offices</h3>
        <ul className="space-y-3">
          {contact.regional.map((location, index) => (
            <li key={index} className="flex items-center gap-3">
              <MapPin size={20} className="flex-shrink-0 text-brand-accent" />
              <span className="text-slate-600">{location}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

