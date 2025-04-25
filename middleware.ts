import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search.slice(1); // Remove the leading '?'

  const response = NextResponse.next();
  response.headers.set('x-pathname', pathname);
  response.headers.set('x-search-params', search);

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/contracts/:path*'], // adjust to protect routes
};
