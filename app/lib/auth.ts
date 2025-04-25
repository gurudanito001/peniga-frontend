// lib/auth.ts
"use server"


import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { userTokenData } from '../utils/interfaces';



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
  const token = cookieStore.get('token')?.value;
  return token;
}


export async function getUserData(){
  
  const token = await getToken() as string ;
  const userData = jwt.decode(token) as userTokenData;

  return userData;
}


