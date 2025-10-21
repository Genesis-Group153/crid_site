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
        <div className="flex items-center justify-between" style={{height: 'clamp(4rem, 8vw, 6rem)'}}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="CRID International home">
            <Image
              src="/crid/logo.png"
              alt="CRID International"
              width={80}
              height={80}
              priority
              className="w-auto"
              style={{height: 'clamp(3rem, 6vw, 5rem)'}}
            />
            <span className="hidden font-serif font-bold text-brand-primary md:block" style={{fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'}}>
              CRID International
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center xl:flex" style={{gap: 'clamp(0.125rem, 0.5vw, 0.5rem)'}}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-lg transition-colors hover:bg-surface hover:text-brand-primary"
                style={{
                  padding: 'clamp(0.375rem, 1vw, 0.5rem) clamp(0.625rem, 1.5vw, 0.875rem)',
                  fontSize: 'clamp(0.813rem, 1.2vw, 0.938rem)',
                  fontWeight: 500
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="btn-primary whitespace-nowrap"
              style={{marginLeft: 'clamp(0.25rem, 1vw, 0.5rem)'}}
            >
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

