// This file demonstrates how to add JSON-LD structured data to pages
// Import and use in your page components

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CRID International Limited',
  alternateName: 'Centre for Research, Innovations, and Development',
  url: 'https://www.cridinternational.org',
  logo: 'https://www.cridinternational.org/crid/logo.png',
  description:
    'CRID International is a multidisciplinary research, training, and capacity-building organization advancing sustainable development across Africa.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Uganda',
    addressLocality: 'Kampala',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+256-772699471',
    contactType: 'Customer Service',
    email: 'info@cridinternational.org',
    areaServed: ['UG', 'RW', 'KE', 'SS', 'GH'],
  },
  sameAs: [
    // Add social media URLs when available
    'https://facebook.com/cridinternational',
    'https://twitter.com/cridinternational',
    'https://linkedin.com/company/crid-international',
  ],
  foundingDate: '2008',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '50+',
  },
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'CRID International Limited',
  image: 'https://www.cridinternational.org/crid/logo.png',
  '@id': 'https://www.cridinternational.org',
  url: 'https://www.cridinternational.org',
  telephone: '+256-772699471',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot [Insert Address]',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.3476, // Update with actual coordinates
    longitude: 32.5825,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
};

