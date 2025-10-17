import { getTeamData } from '@/lib/content';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const team = await getTeamData();
    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load team data' }, { status: 500 });
  }
}

