'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface PartnerCardProps {
  name: string;
  logo: string;
  blurb: string;
  index: number;
  website?: string;
}

export function PartnerCard({ name, logo, blurb, index, website }: PartnerCardProps) {
  const CardContent = () => (
    <>
      <div className="mb-4 flex h-32 items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={100}
          className="h-auto max-h-24 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
        />
      </div>
      <h3 className="heading-4 mb-2 text-brand-accent">{name}</h3>
      <p className="text-sm text-text-light">{blurb}</p>
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-primary transition-colors hover:text-brand-primary-800"
          onClick={(e) => e.stopPropagation()}
        >
          Visit Website
          <ExternalLink size={14} />
        </a>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card text-center"
    >
      <CardContent />
    </motion.div>
  );
}

