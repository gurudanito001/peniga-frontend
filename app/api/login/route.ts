// app/api/login/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const loginRes = await fetch('https://external-api.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!loginRes.ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const { accessToken } = await loginRes.json();

  cookies().set('token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60,
    path: '/',
  });

  return NextResponse.json({ success: true });
}
