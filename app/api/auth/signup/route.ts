/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/login/route.ts
//import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { API_URL } from '@/app/utils/consts';
import { getToken } from '@/app/lib/auth';


export async function POST(request: Request) {
  try {
    const {firstName, lastName, email, password } = await request.json();
    const token = await getToken();

    const response = await fetch(`${API_URL.base_url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ ...errorData}, {status: response.status});
    }

    return NextResponse.json({ message: 'Account Created successfully'}, {status: response.status});
  } catch (error: any) {
    console.error("Login error:", error); 
    return NextResponse.json({ message: 'Internal server error', }, {status: 500});
  }
}
