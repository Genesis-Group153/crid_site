'use client';

import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import type { Resource } from '@/lib/content';

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="space-y-4">
      {resources.map((resource, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="card group flex items-start gap-4"
        >
          <div className="rounded-lg bg-brand-accent/10 p-3 text-brand-accent">
            <FileText size={24} />
          </div>
          <div className="flex-1">
            <h3 className="heading-4 mb-1 text-brand-primary">{resource.title}</h3>
            <p className="text-sm text-slate-600">{resource.description}</p>
          </div>
          <a
            href={resource.file}
            download
            className="flex-shrink-0 rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-accent-dark"
            aria-label={`Download ${resource.title}`}
          >
            <Download size={18} />
          </a>
        </motion.div>
      ))}
    </div>
  );
}

