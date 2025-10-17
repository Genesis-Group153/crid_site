'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary py-24 md:py-32">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-accent"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="heading-1 mb-6 text-white"
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="body-large mx-auto mb-8 max-w-2xl text-slate-200"
            >
              {description}
            </motion.p>
          )}
          
          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href} className="btn-primary group">
                  {ctaPrimary.text}
                  <ArrowRight
                    size={20}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  {ctaSecondary.text}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

