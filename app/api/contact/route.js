import { NextResponse } from 'next/server';

export async function POST(request) {
  // Simple mock endpoint. In production, connect to SendGrid/Resend.
  const data = await request.json();
  
  if (!data.email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: 'Message received' });
}