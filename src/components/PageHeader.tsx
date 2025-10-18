import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Array<{ label: string; href: string }>;
}

export function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-brand-primary to-brand-primary-800 py-12 md:py-16">
      <div className="container-custom">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight size={16} />
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="heading-1 text-white">{title}</h1>
      </div>
    </div>
  );
}

