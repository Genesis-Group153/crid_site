'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  index: number;
}

export function ProgramCard({ title, description, index }: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="heading-4 mb-2 text-brand-primary group-hover:text-brand-accent">
            {title}
          </h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
        <ArrowRight
          size={20}
          className={`ml-4 flex-shrink-0 text-brand-accent transition-transform ${
            isExpanded ? 'rotate-90' : ''
          }`}
        />
      </div>
    </motion.div>
  );
}

