import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextAuthOptions } from 'next-auth';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const token = await getToken({ req, secret });
  const pathname = req.nextUrl.pathname;

  // If the user is not authenticated and trying to visit protected routes
  if (!token && pathname.startsWith('/protected')) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  // Allow authenticated users to visit protected routes
  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*', '/api/protected/:path*'],
};
