import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function generateJsonLd(type: string, data: Record<string, any>) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
}

