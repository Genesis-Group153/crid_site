'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import type { TeamMember } from '@/lib/content';

interface TeamCardProps {
  member: TeamMember;
  index: number;
  onClick: () => void;
}

export function TeamCard({ member, index, onClick }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      className="card group cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-slate-100">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-contain object-center p-2 transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="text-center">
        <h3 className="heading-4 mb-2 text-brand-accent">{member.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-text-light">{member.title}</p>
        {member.links.length > 0 && (
          <div className="flex justify-center gap-2">
            {member.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => e.stopPropagation()}
                className="rounded-full bg-brand-primary-50 p-2 text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
                aria-label={link.label || link.type}
              >
                {link.type === 'email' && <Mail size={16} />}
                {link.type === 'tel' && <Phone size={16} />}
                {link.type === 'external' && <ExternalLink size={16} />}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

