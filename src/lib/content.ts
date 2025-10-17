import { promises as fs } from 'fs';
import path from 'path';

export interface ProfileData {
  tagline: string;
  about: string;
  vision: string;
  mission: string;
  coreValues: string[];
  focusAreas: FocusArea[];
  services: string[];
  approach: string[];
  legitimacy: string;
  flagshipPrograms: string[];
  contact: ContactInfo;
}

export interface FocusArea {
  title: string;
  points: string[];
}

export interface ContactInfo {
  hq: string;
  phone: string;
  email: string;
  web: string;
  regional: string[];
}

export interface TeamMember {
  name: string;
  title: string;
  photo: string;
  bio: string;
  links: Array<{
    type: string;
    href: string;
    label?: string;
  }>;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Resource {
  title: string;
  file: string;
  description: string;
}

export async function getProfileData(): Promise<ProfileData> {
  const filePath = path.join(process.cwd(), 'content/crid/profile.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getTeamData(): Promise<TeamMember[]> {
  const filePath = path.join(process.cwd(), 'content/crid/team.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getGalleryData(): Promise<GalleryImage[]> {
  const filePath = path.join(process.cwd(), 'content/crid/gallery.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getResourcesData(): Promise<Resource[]> {
  const filePath = path.join(process.cwd(), 'content/crid/resources.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

