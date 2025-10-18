import type { TeamMember } from '@/lib/content';

interface PersonSchemaProps {
  member: TeamMember;
}

export function PersonSchema({ member }: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.title,
    image: `https://www.cridinternational.org${member.photo}`,
    description: member.bio,
    worksFor: {
      '@type': 'Organization',
      name: 'CRID International Limited',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

