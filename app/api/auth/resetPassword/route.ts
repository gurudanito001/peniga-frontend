/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/login/route.ts
import { NextResponse } from 'next/server';
//import { apiPost } from '@/app/lib/api';
import { API_URL } from '@/app/utils/consts';
import { getToken } from '@/app/lib/auth';


export async function POST(request: Request) {
  try {
    const { email, verificationCode, newPassword } = await request.json();
    const token = await getToken();

    const response = await fetch(`${API_URL.base_url}/auth/resetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ email, code: verificationCode, newPassword }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ ...errorData}, {status: response.status});
    }
    
    const data = await response.json();
    console.log(data)

    return NextResponse.json({ message: 'Password reset was successful '}, {status: response.status});
  } catch (error: any) {
    console.error("Reset Password Error:", error); 
    return NextResponse.json({ message: 'Internal server error', }, {status: 500});
  }
}
