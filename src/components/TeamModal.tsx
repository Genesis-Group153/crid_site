'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Mail, Phone, ExternalLink } from 'lucide-react';
import type { TeamMember } from '@/lib/content';
import { useEffect } from 'react';

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function TeamModal({ member, onClose }: TeamModalProps) {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [member]);

  return (
    <AnimatePresence>
      {member && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand-primary"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="192px"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="heading-3 mb-2 text-brand-primary">{member.name}</h2>
                  <p className="mb-4 leading-relaxed text-muted">{member.title}</p>
                  
                  {member.links.length > 0 && (
                    <div className="mb-4 flex gap-2">
                      {member.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="inline-flex items-center gap-2 rounded-lg bg-brand-accent/10 px-3 py-2 text-sm font-medium text-brand-accent transition-colors hover:bg-brand-accent hover:text-white"
                          aria-label={link.label || link.type}
                        >
                          {link.type === 'email' && <Mail size={16} />}
                          {link.type === 'tel' && <Phone size={16} />}
                          {link.type === 'external' && <ExternalLink size={16} />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="heading-4 mb-3 text-brand-primary">Biography</h3>
                <p className="leading-relaxed text-slate-600">{member.bio}</p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

