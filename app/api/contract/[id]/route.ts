/* eslint-disable @typescript-eslint/no-explicit-any */
/* import { NextResponse } from 'next/server';
import { API_URL } from '@/app/utils/consts';
import { getToken } from '@/app/lib/auth'; */


export async function POST(request: Request) {
  const payload = await request.json();
  console.log(payload);
}

export async function GET(request: Request) {
  
  const payload = await request.json();
  console.log(payload);
  
}