export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CRID International Limited',
    alternateName: 'Centre for Research, Innovations, and Development',
    url: 'https://www.cridinternational.org',
    logo: 'https://www.cridinternational.org/crid/logo.png',
    description:
      'CRID International is a multidisciplinary research, training, and capacity-building organization advancing sustainable development, institutional excellence, and human capital growth across Africa.',
    foundingDate: '2015',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kampala',
      addressCountry: 'UG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+256-772699471',
      email: 'info@cridinternational.org',
      contactType: 'General Inquiries',
    },
    sameAs: [
      // Add social media URLs when available
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Uganda',
      },
      {
        '@type': 'Country',
        name: 'Rwanda',
      },
      {
        '@type': 'Country',
        name: 'Kenya',
      },
      {
        '@type': 'Country',
        name: 'South Sudan',
      },
      {
        '@type': 'Country',
        name: 'Ghana',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

