'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { GalleryImage } from '@/lib/content';

interface GalleryMasonryProps {
  images: GalleryImage[];
}

export function GalleryMasonry({ images }: GalleryMasonryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">{image.alt}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

