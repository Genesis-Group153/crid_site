'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Partner {
  name: string;
  logo: string;
  website?: string;
}

export function PartnersCarousel() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    fetch('/api/partners')
      .then((res) => res.json())
      .then((data) => {
        // Only use partners (not clients) to avoid duplication
        setPartners(data.partners);
      })
      .catch((error) => {
        console.error('Failed to load partners:', error);
      });
  }, []);

  if (partners.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden py-8">
      <div className="flex gap-12 justify-center flex-wrap">
        {partners.map((partner, index) => {
          const content = (
            <div className="flex h-24 w-48 flex-shrink-0 items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className="h-auto max-h-20 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          );

          return partner.website ? (
            <Link
              key={`${partner.name}-${index}`}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              {content}
            </Link>
          ) : (
            <div key={`${partner.name}-${index}`}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

