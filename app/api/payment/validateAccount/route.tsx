/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { API_URL } from '@/app/utils/consts';
import { getToken } from '@/app/lib/auth';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const token = await getToken();
    console.log(payload, "from frontend server")
    const response = await fetch(`${API_URL.base_url}/tempAccount/validateBankAccount`, {
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


    return NextResponse.json({ message: 'Bank Account validated successfully', data: data }, { status: response.status });
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json({ message: 'Internal server error', }, { status: 500 });
  }
}