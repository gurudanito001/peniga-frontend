/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { API_URL } from '@/app/utils/consts';
import { getToken } from '@/app/lib/auth';





interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: Params) {
  try {
    const {id: contractId} = await params;
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    console.log(contractId, token);
    const response = await fetch(`${API_URL.base_url}/contract/${contractId}`, {
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
    return NextResponse.json({ message: 'Contract fetched successfully', data: data?.payload }, { status: response.status });
  } catch (error: any) {
    console.error("Get Contracts error:", error);
    return NextResponse.json({ message: 'Internal server error', }, { status: 500 });
  }
}



export async function PATCH(
  request: NextRequest,
  {params}: Params
) {
  try {
    const {id: contractId} = await params;
    const payload = await request.json();
    //const { searchParams } = new URL(request.url);
    //const token = searchParams.get('token');
    const token = await getToken();
    console.log(contractId, token);
    const response = await fetch(`${API_URL.base_url}/contract/${contractId}`, {
      method: "PATCH",
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
    return NextResponse.json({ message: 'Contract updated successfully', data: data?.payload }, { status: response.status });
  } catch (error) {
    console.error('Error updating resource:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}