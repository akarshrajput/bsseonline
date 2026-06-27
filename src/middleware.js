import { NextResponse } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  
  if (path.startsWith('/admin')) {
    if (path === '/admin/login') {
      return NextResponse.next();
    }
    
    const token = request.cookies.get('session')?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const parsed = await decrypt(token);
    
    if (!parsed) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    if (path === '/admin') {
      return NextResponse.redirect(new URL('/admin/registrations', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
