'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/focus-areas', label: 'Focus Areas' },
  { href: '/services', label: 'Services' },
  { href: '/programs', label: 'Programs' },
  { href: '/team', label: 'Team' },
  { href: '/partners', label: 'Partners' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="CRID International home">
            <Image
              src="/crid/logo.png"
              alt="CRID International"
              width={80}
              height={80}
              priority
              className="h-16 w-auto sm:h-20"
            />
            <span className="hidden font-serif text-xl font-bold text-brand-primary md:block lg:text-2xl">
              CRID International
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-surface hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary ml-2 whitespace-nowrap">
              Work With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-brand-primary xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden"
            >
              <div className="space-y-1 pb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-surface hover:text-brand-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 block w-full rounded-lg bg-brand-primary px-4 py-3 text-center text-base font-semibold text-white hover:bg-brand-primary-800"
                >
                  Work With Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

