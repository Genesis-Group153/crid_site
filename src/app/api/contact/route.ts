import { getProfileData } from '@/lib/content';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const profile = await getProfileData();
    return NextResponse.json(profile.contact);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load contact data' }, { status: 500 });
  }
}

