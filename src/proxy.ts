import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function proxy(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  if (!token) return NextResponse.next();

  try {
    jwt.verify(token, process.env.JWT_SECRET!);

    if (
      req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/signup')
    ) {
      return NextResponse.redirect(new URL('/marketplace', req.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/login', '/signup'],
};
