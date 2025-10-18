'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  TrendingUp,
  Building,
  GraduationCap,
  FileText,
  Lightbulb,
} from 'lucide-react';

const iconMap = {
  Heart,
  Users,
  TrendingUp,
  Building,
  GraduationCap,
  FileText,
  Lightbulb,
};

interface FocusAreaCardProps {
  title: string;
  points: string[];
  iconName: keyof typeof iconMap;
  index: number;
}

export function FocusAreaCard({ title, points, iconName, index }: FocusAreaCardProps) {
  const Icon = iconMap[iconName];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card group h-full"
    >
      <div className="mb-4 inline-flex rounded-lg bg-brand-primary-50 p-3 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
        <Icon size={28} />
      </div>
      <h3 className="heading-4 mb-4 text-brand-accent">{title}</h3>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-text-light">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-secondary" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

