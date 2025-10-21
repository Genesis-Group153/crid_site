import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/focus-areas', label: 'Focus Areas' },
  { href: '/services', label: 'Services' },
  { href: '/programs', label: 'Programs' },
  { href: '/team', label: 'Our Team' },
  { href: '/partners', label: 'Partners' },
  { href: '/resources', label: 'Resources' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-accent text-white" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/crid/logo.png"
                alt="CRID International"
                width={70}
                height={70}
                className="h-16 sm:h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              Research. Skills. Impact.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Advancing sustainable development and human capital growth across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-brand-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+256772699471" className="hover:text-brand-secondary">
                  +256-772699471
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@cridinternational.org" className="hover:text-brand-secondary">
                  info@cridinternational.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Regional */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full bg-white/10 p-2 transition-colors hover:bg-brand-primary"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Regional Offices</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>Kigali, Rwanda</li>
                <li>Nairobi, Kenya</li>
                <li>Juba, South Sudan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-300">
              © {currentYear} CRID International Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-300">
              <Link href="#" className="hover:text-brand-secondary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-brand-secondary">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Powered By - Centered */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Powered by:{' '}
              <a
                href="https://www.genesiscodeworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-secondary hover:text-brand-secondary-100 transition-colors font-semibold"
              >
                Genesis Codeworks Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

