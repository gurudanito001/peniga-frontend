/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/login/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
//import { apiPost } from '@/app/lib/api';
import { API_URL } from '@/app/utils/consts';
import { getToken } from '@/app/lib/auth';


export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const token = await getToken();

    const response = await fetch(`${API_URL.base_url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ ...errorData}, {status: response.status});
    }
    
    const data = await response.json();
    console.log(data)
    const cookieStore = await cookies();
    cookieStore.set("token", data.payload.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400, // 1 day in seconds
      path: "/",
    });

    return NextResponse.json({ message: 'Login successful'}, {status: response.status});
  } catch (error: any) {
    console.error("Login error:", error); 
    return NextResponse.json({ message: 'Internal server error', }, {status: 500});
  }
}
