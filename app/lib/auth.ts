// lib/auth.ts
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export function requireAuth() {
  const token = cookies().get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  return token;
}
