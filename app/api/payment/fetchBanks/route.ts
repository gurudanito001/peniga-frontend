/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { API_URL } from '@/app/utils/consts';
import { getToken } from '@/app/lib/auth';
import Result_ from 'postcss/lib/result';

export async function POST() {
  try {
    const token = await getToken();

    const response = await fetch(`${API_URL.base_url}/tempAccount/getBanks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ ...errorData }, { status: response.status });
    }

    const result = await response.json();
    console.log(Result_)


    return NextResponse.json({ message: 'Banks fetched successfully', data: result }, { status: response.status });
  } catch (error: any) {
    console.error("Fetch banks error:", error);
    return NextResponse.json({ message: 'Internal server error', }, { status: 500 });
  }
}