'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  emoji: string;
  description: string;
  index: number;
  image?: string;
}

export function ServiceCard({ title, emoji, description, index, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card group relative overflow-hidden"
    >
      {/* Image Header */}
      {image && (
        <div className="relative -mx-6 -mt-6 mb-4 h-48 overflow-hidden bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50">
          {/* Image will be shown when added to public/crid/services/ */}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {/* Emoji Badge on image */}
          <div className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm text-2xl shadow-lg">
            <span aria-hidden="true">{emoji}</span>
          </div>
        </div>
      )}

      {/* Fallback: Emoji Badge if no image */}
      {!image && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50 text-3xl shadow-sm">
          <span aria-hidden="true">{emoji}</span>
        </div>
      )}

      {/* Title */}
      <h3 className="heading-4 mb-3 text-brand-accent">{title}</h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-text-light">{description}</p>

      {/* CTA Link */}
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-all group-hover:gap-3 group-hover:text-brand-primary-800"
      >
        Inquire
        <ArrowRight size={16} className="transition-transform" />
      </Link>

      {/* Hover Effect */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
}

