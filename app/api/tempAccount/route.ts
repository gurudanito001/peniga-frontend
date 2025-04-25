/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from 'next/server';
import { API_URL } from '@/app/utils/consts';
import { getToken } from '@/app/lib/auth';


export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const token = await getToken();

    const response = await fetch(`${API_URL.base_url}/tempAccount/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ ...errorData }, { status: response.status });
    }

    const data = await response.json();
    console.log(data)


    return NextResponse.json({ message: 'Temp Account Generated successfully' }, { status: response.status });
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json({ message: 'Internal server error', }, { status: 500 });
  }
}

/* export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
    const response = await fetch(`${API_URL.base_url}/contract`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ ...errorData }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ message: 'Contracts fetched successfully', data: data?.payload?.data }, { status: response.status });
  } catch (error: any) {
    console.error("Get Contracts error:", error);
    return NextResponse.json({ message: 'Internal server error', }, { status: 500 });
  }
} */