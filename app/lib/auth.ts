// lib/auth.ts
"use server"


import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function requireAuth() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    console.log("does not have token");
    const currentPath = headerStore.get('x-pathname') || '/';
    redirect(`/login?redirectTo=${encodeURIComponent(currentPath)}`);
  }

  return token;
}


export async function getToken() {
  const cookieStore = await cookies();
  console.log("Cookie Store:", Object.fromEntries(cookieStore.getAll().map(c => [c.name, c.value])));
  const token = cookieStore.get('token')?.value;
  console.log("Token:", token);
  return token;
}


